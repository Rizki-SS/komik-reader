import React, { useEffect, useState } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { getChapter } from "../../../Services/Chapter";
import ImageChapter from "./ImageChapter";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { TextLazy } from "../../Widget";

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 100
    },
    ImageChapter: {
        marginTop: 50
    }
}));


const ReadingPage = (props) => {
    const classes = useStyles();
    const [chapter, setChapter] = React.useState(0);
    const [title, setTitle] = React.useState("title")

    useEffect(() => {
        getChapter(props.match.params.title)
            .then(result => {
                setChapter(result);
                return result;
            })
            .then((r) => {
                setTitle(r.chapter_endpoint.toString().replace(/[^\w\s]/gi, ' '))
            })
    }, [chapter.chapter_pages]);


    return (
        <Container>
            <Typography variant="h4" component="h1" className={classes.title} align="center" color="textPrimary">
                <TextLazy row={1} condition={!chapter}>
                    {title}
                </TextLazy>
            </Typography>
            <Typography variant="body1" component="p" align="center" color="secondary">
                <TextLazy row={1} condition={!chapter}>
                    Semua chapter ada di {title}
                </TextLazy>
            </Typography>
            <div className={classes.ImageChapter}>
                <ImageChapter chapter_image={chapter.chapter_image} />
            </div>
        </Container>
    )
};

function textFormat(text) {
    return text.toString().replace(/[^\w\s]/gi, ' ');
}

export default ReadingPage
