import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export const MainNav = (page) => {
    const classes = useStyles();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    <MenuIcon color='action'/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {page.page}
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}