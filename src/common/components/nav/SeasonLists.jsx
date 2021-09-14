import React, {setState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Typography from '@material-ui/core/Typography';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import _ from 'lodash'

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
                {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                <ListItemText primary={primary} />
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





export const SeasonLists = (e) => {

    constructor(props) {
        super(props)
        this.state = {data}
    }

    const classes = useStyles();
    this.setState({data: 'data'})
    console.log(e)
    //let links = typeof lists.list ? 'test' : lists.list.map((list, i) => <p>{list.name}</p>)
    /*<ListItemLink color="inherit" href={list.link}  to={list.name}/>*/

    let url = UrlParse(e.id, 'group-list')

    

    async function getData() { 
        const res = AltReq(url) 
        return await res.data.list
    }
    
    
    getData().then(
    data => React.setState({data}))
    .catch((error) => {
        console.error(error)
        return error
      })
    
    return (
        <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
            <div className={classes.root}>
                <Route>
                    {({ location }) => (
                        <Typography gutterBottom>Current route: {location.pathname}</Typography>
                    )}
                </Route>
                <Paper elevation={0}>
                    <List aria-label="main mailbox folders">
                        <ListItemLink to="/inbox" primary="Inbox" icon={<InboxIcon />} />
                        <ListItemLink to="/drafts" primary="Drafts" icon={<DraftsIcon />} />
                    </List>
                    <Divider />
                    <List aria-label="secondary mailbox folders">
                    </List>
                </Paper>

                <p>{ React.state.data  && React.state.data !== undefined ? 'true' : 'false' }</p>
            </div>
        </MemoryRouter>
        
    );
}
