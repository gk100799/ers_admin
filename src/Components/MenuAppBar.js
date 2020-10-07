import React, { useEffect } from 'react';
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import './UI.css'
import ManageEvents from './ManageEvents'
import ManageSurvey from './ManageSurvey'
import ManageStudents from './ManageStudents'
import SurveyResults from './SurveyResults'


import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import NoteIcon from '@material-ui/icons/Note';
import AssignmentIcon from '@material-ui/icons/Assignment';

const history = createBrowserHistory();
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MenuAppBar(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [title, setTitle] = React.useState(1)
    const open = Boolean(anchorEl);

    useEffect(() => {
        switch(history.location.pathname) {
            case '/':
                setTitle(1)
                break
            case '/survey':
                setTitle(2)
                break
            case '/survey-result':
                setTitle(3)
                break
            case '/students':
                setTitle(4)
                break
            default:
                setTitle(5)

        }
    }, [history.location])

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onItemClick = (title) => {
        setTitle(title);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Event Registration and Survey
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Router history={history}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem selected={title === 1 ? true : false} button key="Manage Events" component={Link} to="/" onClick={() => onItemClick('Manage Events')}>
                                <ListItemIcon><EventIcon /></ListItemIcon>
                                <ListItemText primary="Manage Events" />
                            </ListItem>
                            <ListItem selected={title === 2 ? true : false} button key="Manage Survey" component={Link} to="/survey" onClick={() => onItemClick('Manage Survey')}>
                                <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                <ListItemText primary="Manage Survey" />
                            </ListItem>
                            <ListItem selected={title === 3 ? true : false} button key="Survey Results" component={Link} to="/survey-result" onClick={() => onItemClick('Survey Results')}>
                                <ListItemIcon><NoteIcon /></ListItemIcon>
                                <ListItemText primary="Survey Results" />
                            </ListItem>
                        </List>
                        <Divider />
                        <List>
                            <ListItem selected={title === 4 ? true : false} button key="Manage Students" component={Link} to="/students" onClick={() => onItemClick('Manage Students')}>
                                <ListItemIcon><PersonIcon /></ListItemIcon>
                                <ListItemText primary="Manage Students" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Route exact path="/" component={ManageEvents} />
                    <Route path="/survey" component={ManageSurvey} />
                    <Route path="/survey-result" component={SurveyResults} />
                    <Route path="/students" component={ManageStudents} />
                    {/* <Route path="/profile" component={Profie} /> */}
                </main>
            </Router>
            {/* <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main> */}
        </div>
    );
}
