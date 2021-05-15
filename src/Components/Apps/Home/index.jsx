import React from "react";
import Cover from "./Cover";

import { Container, makeStyles } from "@material-ui/core";
import Popular from "./Popular";
import News from "./News";
import Genre from "./Genre"

const useStyles = makeStyles((theme) => ({
}))

const HomePage = () => {
    const classes = useStyles();

    return (
        <div>
            <Cover />
            <Container>
                <h1>Manga Populer</h1>
                <div className={classes.root}>
                    <Popular />
                </div>
                <h1>News Comic</h1>
                <News></News>
                <h1>Genre</h1>
                <Genre />
            </Container>
        </div>
    )
}
export default HomePage