import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataTableFilter } from '../data/DataTableFilter';
import { SelectedListItem } from '../nav/SelectList'

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabcontent: {
        height: '100%'
    }
}));

export const SimpleTabs = () => {
    let { id } = useParams();
    console.log(id)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <h1>{id}</h1>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Group" {...a11yProps(0)} />
                    <Tab label="Core" {...a11yProps(1)} />
                    <Tab label="Boost" {...a11yProps(2)} />
                    <Tab label="Positioning" {...a11yProps(3)} />
                    <Tab label="Movement" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.tabcontent}>
                <SelectedListItem/>
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabcontent}>
                <DataTableFilter id={id} />
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabcontent}>
                <DataTableFilter id={id} />
            </TabPanel>
            <TabPanel value={value} index={3} className={classes.tabcontent}>
                <DataTableFilter id={id} />
            </TabPanel>
            <TabPanel value={value} index={4} className={classes.tabcontent}>
                <DataTableFilter id={id} />
            </TabPanel> 
        </div>
    );
}
