import React from "react";
import { makeStyles, SwipeableDrawer, IconButton, List, ListItem, ListItemText, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";


import menu from "../../Constants/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    list: {
        width: 300,
    },
}));

export default function Drawer() {
    const classes = useStyles();
    const [drawerState, setDrawerState] = React.useState({
        open: false
    })

    const toggleDrawer = (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState({ open: !drawerState.open })
    }

    return (
        <div>
            <IconButton
                onClick={() => toggleDrawer()}
                className={classes.menuIcon}
            >
                <Icon>menu</Icon>
            </IconButton>

            <SwipeableDrawer
                anchor="left"
                open={drawerState.open}
                onClose={() => toggleDrawer()}
                onOpen={() => toggleDrawer()}
            >
                <List className={classes.list}>
                    {menu.map((e, i) => (
                        <ListItem key={i} button to={e.url} component={Link}>
                            <ListItemText primary={e.name} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </div>
    );
}