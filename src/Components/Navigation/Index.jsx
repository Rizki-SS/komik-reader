import React, { useContext, useState } from "react";
import { makeStyles, AppBar, Toolbar, Typography, Button, Container, InputBase, Icon, fade } from "@material-ui/core";

import menu from "../../Constants/Menu";
import Drawer from "./SwipeBar";
import Logout from "../Apps/Logout";
import { AuthUserContext } from "../../Session";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "../Apps/Search/SearchBar";

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
    const [keyword, setKeyword] = useState(null);

    return (
        <div>
            <AppBar className={classes.root} color={"primary"} position={"relative"}>
                <Container>
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Baca Komik
                        </Typography>

                        <SearchBar />

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

        </div >
    );
}