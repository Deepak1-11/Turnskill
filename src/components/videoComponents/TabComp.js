import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TablePage from './TablePage';
import FormPage from './FormPage';

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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Transcribe" {...a11yProps(0)} />
          <Tab label="Translate" {...a11yProps(1)} />
          <Tab label="Notes" {...a11yProps(2)} />
          <Tab label="Details" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
        Transcribe will be shown here
      </TabPanel>
      <TabPanel value={value} index={1}>
        Translate will be shown here
      </TabPanel>
      <TabPanel value={value} index={2}>
        Notes will be shown here
        <FormPage/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Details will be shown here
        <TablePage/>
      </TabPanel>
    </div>
  );
}
