import React from "react";
import { makeStyles, AppBar, Toolbar, Typography, Button, Container } from "@material-ui/core";

import menu from "../../Constants/Menu";
import Drawer from "./SwipeBar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menu: {
        position: 'relative',
        marginLeft: 0,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} color="inherit">
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
                        </Typography>
                        <div className={classes.menu}>
                            {menu.map((e, i) => (
                                <Button key={i} href={e.url}>{e.name}</Button>
                            ))}
                        </div>
                        <Drawer />
                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    );
}