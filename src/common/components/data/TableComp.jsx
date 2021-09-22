import React from 'react';
import PropTypes from 'prop-types';
//import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// eslint-disable-next-line
import Link from '@material-ui/core/Link';
import { DataTableFilter } from '../data/DataTableFilter';
import { SelectedListItem } from '../nav/SelectList'
import { UrlParse, AltReq } from "../../../utils/AltReq";
import { set } from 'lodash';

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





export const TableComp = props => {
    console.log(props)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [active, setActive] = React.useState()
    const [data, setData] = React.useState()
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        setActive(props.selected)
        //console.log(active)
        let parse = UrlParse(props.selected.id, 'group-stats')
        AltReq(parse)
        .then(res => {
            //console.log(res.data)
            setData(res.data)
            console.log(data)
        }

        )
    }, [props.selected])

    //let parse = UrlParse(props.id, 'group-stats')

    let table = active !== undefined ? <DataTableFilter id={active.id} /> : null

    //console.log(parse)
    return (
        <div className={classes.root}>
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
                
                {props.active.season !== undefined ? props.active.season.name : null } {props.active.league !== undefined ? ' - ' + props.active.league.name : null} {props.active.week !== undefined ? ' - ' + props.active.week.name : null}
                {props.active.week !== undefined ? AltReq(UrlParse(props.active.week.id, 'group-list'))
                : null}
                <SelectedListItem/>
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabcontent}>
                {active !== undefined ? <DataTableFilter id={active.id} data={data} type='core' /> : null}
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.tabcontent}>
                {active !== undefined ? <DataTableFilter id={active.id} data={data} type='boost' /> : null}
            </TabPanel>
            <TabPanel value={value} index={3} className={classes.tabcontent}>
                {active !== undefined ? <DataTableFilter id={active.id} data={data} type='positioning' /> : null}
            </TabPanel>
            <TabPanel value={value} index={4} className={classes.tabcontent}>
                {active !== undefined ? <DataTableFilter id={active.id} data={data} type='movement' /> : null}
            </TabPanel> 
        </div>
    );
}
