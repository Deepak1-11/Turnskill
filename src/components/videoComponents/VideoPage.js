import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReactPlayer from 'react-player';
import Box from '@material-ui/core/Box';
import TablePage from './TablePage';
import screenfull from 'screenfull';
import uuid from "react-uuid";
import PlayerControls from './PlayerControls';
import ListOfBookmark from '../bookmarkComponents/ListOfBookmark';
import EditBookmark from '../bookmarkComponents/EditBookmark';
import '../bookmarkComponents/BookmarkStyle.css';
import './VideoPageStyle.css';
import FeedbackForm from '../FormTemplate/Feedback';
/***************************************************************************************** */

const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    height: "440px",
    position: "relative",
  },
  root: {
    width:"100%",
    height:"50px",
    paddingTop:"10px",
    fontSize:" 2em",
    fontStyle:"bold"
  
  },
});

/***************************************************************************************** */

const format = (seconds) => {
  if (isNaN(seconds)) {
    return '00:00'
  }


  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");

  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }

  return `${mm}:${ss}`;
};
/***************************************************************************************** */
let count = 0;
/***************************************************************************************** */


//TAB PANEL RELATED CODE
/********************* */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useTabStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.secondary.dark,
  },
}));

/***************************************************************************************** */
/***************************************************************************************** */

/******** MAIN FUNCTION : VIDEO PAGE STARTS HERE ************* */

function VideoPage() {

  const classes = useStyles();
  const [state, setstate] = useState({
    playing: true,
    muted: true,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  })

  const [timeDisplayFormat, setTimeDisplayFormat] = useState("normal");
 

  const { playing, muted, volume, playbackRate, played, seeking } = state;

  const playerRef = useRef(null);
  const PlayerContainerRef = useRef(null);
  const controlsRef = useRef(null);

  const handlePlayPause = () => {
    setstate({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleMute = () => {
    setstate({ ...state, muted: !state.muted });
  };

  const handleVolumeChange = (e, newValue) => {
    setstate({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setstate({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlaybackRateChange = (rate) => {
    setstate({
      ...state, playbackRate: rate
    });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(PlayerContainerRef.current);
    // screenfull.toggle(playerRef.current);
  }

  const handleProgress = (changeState) => {
    console.log(changeState);

    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }

    if (controlsRef.current.style.visibility === "visible") {
      count += 1;
    }

    if (!seeking) {
      setstate({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {

    setstate({ ...state, played: parseFloat(newValue / 100) });
  };


  const handleSeekMouseDown = (e) => {
    setstate({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setstate({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100);
  };

  const handleChangeDisplayFormat = () => {
    setTimeDisplayFormat(timeDisplayFormat === 'normal' ? 'remaining' : 'normal');
  };

  

  const handleMouseMove = () => {
    console.log("mousemove");
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
  const duration = playerRef.current ? playerRef.current.getDuration() : "00:00";

  const elapsedTime = timeDisplayFormat === "normal" ? format(currentTime) : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);


  /*****Tab panel related code ***** */
  const tabClasses = useTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /***************************************************************************************** */


  /*********BookMark Related coding ******************/
  const [bookmarks, setBookmarks] = 
  useState( localStorage.bookmarks ? JSON.parse(localStorage.bookmarks) : []);

  const [activeBookmark, setActiveBookmark] = useState(false);

  useEffect(() => {
    localStorage.setItem("bookmarks]", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = () => {   
    const newBookmark = {
      id: uuid(),
      time:  currentTime,
      display: elapsedTime,   
      body: "",
      lastModified: Date.now(),
    }; 
    setBookmarks([newBookmark, ...bookmarks]);
    setActiveBookmark(newBookmark.id);
  };
  const jumpToTimestamp = (videotime)=>{
    playerRef.current.seekTo(videotime);
  };
  const onDeleteBookmark = (noteId) => {
    setBookmarks(bookmarks.filter(({ id }) => id !== noteId));
  };
 
  const onUpdateBookmark = (updatedNote) => {
    const updatedNotesArr = bookmarks.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setBookmarks(updatedNotesArr);
  };

  const getActiveBookmark = () => {
    return bookmarks.find(({ id }) => id === activeBookmark);
  };

  /***************************************************************************************** */
  return <>

    <Container maxWidth="md">
    <Toolbar>
        <Typography className={classes.root} variant="h6">Attended Live Session</Typography>

      </Toolbar>
      <Toolbar className="videobox-titlebar">
        <Typography variant="h6">Live Session Name</Typography>

      </Toolbar>

      <div
        ref={PlayerContainerRef}
        className={classes.playerWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={hanldeMouseLeave}
      >

        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          // url="https://www.youtube.com/watch?v=y2vP5ZpyOS8"
          url = "https://www.youtube.com/watch?v=NnAodvhLI5g"
          muted={muted}
          playing={playing}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
          config={
            {
              file: {
                attributes: {
                  crossorigin: "anonymous",
                },
              },
            }}
        />

        <PlayerControls
          ref={controlsRef}
          onPlayPause={handlePlayPause}
          playing={playing}
          onRewind={handleRewind}
          onFastForward={handleFastForward}
          muted={muted}
          onMute={handleMute}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekUp={handleVolumeSeekUp}
          volume={volume}
          playbackRate={playbackRate}
          onPlaybackRateChange={handlePlaybackRateChange}
          onToggleFullScreen={toggleFullScreen}
          played={played}
          onSeek={handleSeekChange}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          onChangeDisplayFormat={handleChangeDisplayFormat}
          onBookmark={addBookmark}
        />
      </div>

      {/*/********************* Tab Panel coding starts  **************************************/}
      <div className={tabClasses.root}>
        <AppBar position="static">
          <Tabs className="videoPage-tabpanel" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Transcribe" {...a11yProps(0)} />
            <Tab label="Translate" {...a11yProps(1)} />
            <Tab label="Notes" {...a11yProps(2)} />
            <Tab label="Feedback" {...a11yProps(3)} />
            <Tab label="Details" {...a11yProps(4)} />
            
          </Tabs>
        </AppBar>
        <div  className="videoPage-tabpanel-section">
        <TabPanel value={value} index={0}>
          Transcribe will be shown here
        </TabPanel>

        <TabPanel value={value} index={1}>
          Translate will be shown here
        </TabPanel>

        <TabPanel value={value} index={2}>
              <EditBookmark activeBookmark={getActiveBookmark()} onUpdateBookmark={onUpdateBookmark} />
              <ListOfBookmark
                  bookmarks={bookmarks}
                  onAddBookmark={addBookmark}
                  onDeleteBookmark={onDeleteBookmark}
                  activeBookmark={activeBookmark}
                  setActiveBookmark={setActiveBookmark}
                  jumpToTimestamp = {jumpToTimestamp}
              />       
        </TabPanel>

        <TabPanel value={value} index={3}>
                <FeedbackForm/>
        </TabPanel>
        <TabPanel value={value} index={4}>
                Following are the details of the video
                <TablePage />
        </TabPanel>
        </div>

      </div>
      {/* Tabpandel coding ends <TabComp/>*/}







    </Container>

  </>
}

export default VideoPage
