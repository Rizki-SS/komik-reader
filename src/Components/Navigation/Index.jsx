import React from "react";
import { makeStyles, AppBar, Toolbar, Typography, Button, Container, InputBase, Icon, fade } from "@material-ui/core";

import menu from "../../Constants/Menu";
import Drawer from "./SwipeBar";
import Logout from "../Apps/Logout";
import { AuthUserContext } from "../../Session";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
    inputRoot: {
        color: 'inherit',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} color={"primary"} position={"relative"}>
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Baca Komik
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <Icon>search</Icon>
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>

                        <div className={classes.menu}>
                            {menu.map((e, i) => (
                                <Button color="secondary" key={i} component={Link} to={e.url}>
                                    {e.name}
                                </Button>

                            ))}
                            <AuthUserContext>
                                {authUser => authUser ? <Logout /> : <Button color="secondary" component={Link} to="/login">Login</Button>}
                            </AuthUserContext>
                        </div>
                        <Drawer />
                    </Toolbar>
                </Container>
            </AppBar>

        </div>
    );
}