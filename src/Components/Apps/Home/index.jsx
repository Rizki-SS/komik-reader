import React from "react";
import Cover from "./Cover";

import { Container, makeStyles } from "@material-ui/core";
import Popular from "./Popular";
import News from "./News";

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

                <News></News>
            </Container>


        </div>
    )
}
export default HomePage