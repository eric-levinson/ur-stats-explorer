import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography  } from '@material-ui/core';


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
                <Typography variant="h6" className={classes.title}>
                    {page.page}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}