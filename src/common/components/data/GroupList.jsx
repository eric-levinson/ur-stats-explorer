import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

//import _ from 'lodash'

import { UrlParse, AltReq} from '../../../utils/AltReq'

//import { LocalDrinkSharp } from '@material-ui/icons';
//import  BallchaseRequest  from '../utils/BallchaseRequest.js'

function ListItemLink(props) {

    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
        [to],
    );

    return (
        <li>
            <ListItem button component={renderLink}>
                <ListItemText primary={primary} />
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
    root: {
        width: 360,
    },
});

const ResolveItems = props => {
    const [list, setList] = React.useState("");

    const { url } = props;
    

    React.useEffect(() => {
        const fetchListData = async () => {
            const res = await AltReq(url)
            const {list} = await res.data
            setList(list)
        }
        fetchListData()
        // eslint-disable-next-line
    }, [])

    return (
        <>
        {list && typeof list !== undefined ? list.map(item => <ListItemLink to={item.id} primary={item.name} icon={<ArrowForwardIosIcon />} />) : <CircularProgress />}
        </>
    )
}



export const GroupList = (e) => {


    const classes = useStyles();
    //console.log(e)
    //let links = typeof lists.list ? 'test' : lists.list.map((list, i) => <p>{list.name}</p>)
    /*<ListItemLink color="inherit" href={list.link}  to={list.name}/>*/

    let url = UrlParse(e.id, 'group-list')

    


    
    return (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            <div className={classes.root}>
                <Route>
                    {({ location }) => (
                        <Typography gutterBottom>Current route: {location.pathname}</Typography>
                    )}
                </Route>
                <Paper elevation={0}>
                    <List aria-label="secondary mailbox folders">
                        <ResolveItems url={url} />
                    </List>
                </Paper>

                <p></p>
            </div>
        </MemoryRouter>
        
    );
}
