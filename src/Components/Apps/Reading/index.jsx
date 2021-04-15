import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 100
    }
}));

const ReadingPage = () => {
    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h4" component="h1" className={classes.title} align="center" color="textPrimary">
                Kaichou wa Maid-sama! Chapter 83 Bahasa Indonesia
            </Typography>
            <Typography variant="p" component="p" align="center" color="secondary">
                Semua chapter ada di Kaichou wa Maid-sama!
            </Typography>
        </Container>
    )
}

export default ReadingPage