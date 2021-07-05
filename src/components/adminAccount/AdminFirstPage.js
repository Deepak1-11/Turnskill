import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from '@material-ui/icons/Star';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PublicIcon from '@material-ui/icons/Public';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
/*My imported components */
import AdminDashboard from './AdminDashboard';
import AdminViewFeedback from './AdminViewFeedback';
import FormPage from './AdminSetting';
import UploadVideo from './AdminUploadVideo';
import { Public } from "@material-ui/icons";
import { totalSessions } from "../../features/sessionSlice";
import db from "../Firebase";
import { useDispatch } from "react-redux";
const drawerWidth = 240;

const sidebarData = [
  // "admindashboard","adminuploadvideo","adminviewfeedback", "adminsetting"
 
  {name:"Admin Dashboard",url:"admindashboard"},
  {name:"Upload Videos",url:"adminuploadvideo"},
  {name:"View Feedback",url:"adminviewfeedback"},
  {name:"Settings",url:"adminsetting"},

  
]

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [live, setLive] = useState([]);
  const [psession, setPrivate] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("livesessions").onSnapshot((snapshot) =>
      setLive(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data:doc.data()
         
        }))
      )
    );

    db.collection("privatesessions").onSnapshot((snapshot) =>
    setPrivate(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data:doc.data()
       
      }))
    )
  )
  
  
  
  }, []);



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {/* {["admindashboard","adminuploadvideo","adminviewfeedback", "adminsetting"].map((text, index) => ( */}
        {sidebarData.map(({name,url}, index) => (
          <ListItem key={url} component={Link} to={"/" + url}>
            <ListItemIcon>
              {index  === 0 ? <PublicIcon /> : index  === 1 ? <VideoLibraryIcon /> : index  === 2 ? < FeedbackIcon /> : index  === 3 ? <SettingsIcon /> : <StarIcon />}
            </ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  dispatch(
    totalSessions({
      livecount:live.length,
      privatecount:psession.length

    })
  )

  console.log(live.length);
  console.log(psession);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Admin Account
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/" render={() => <AdminDashboard/>} />
            <Route exact path="/admindashboard" render={() => <AdminDashboard/>} />
            <Route exact path="/adminuploadvideo" render={() => <UploadVideo/>} />
            <Route exact path="/adminviewfeedback" render={() => <AdminViewFeedback/>} />
            <Route exact path="/adminsetting" render={() => <FormPage/>} />
            
           
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
