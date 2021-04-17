import React, { useEffect, useState } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import { getChapter } from "../../../Services/Chapter";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 100
    },
    jarak : {
        marginTop: 50
    }
}));

const ReadingPage = (props) => {
    const classes = useStyles();
    const [chapter, setChapter] = React.useState(0);

    useEffect(() => {
        getChapter(props.match.params.title)
            .then(result => {
                setChapter(result);
                setChapter({ title: result.chapter_endpoint.toString().replace(/[^\w\s]/gi, ' ') })
            })
    }, [chapter.title]);


    return (
        <Container>
            <Typography variant="h5" component="h1" className={classes.title} align="center" color="textPrimary">
                {
                    chapter.title
                }
            </Typography>
            <Typography variant="p" component="p" align="center" color="secondary">
                Semua chapter ada di {chapter.title}
            </Typography>
            <div className= {classes.jarak}>
                {chapter.chapter_image?.map((e, i) => (
                  <div align = "center">
                  <LazyLoadImage
                    effect="blur"
                    src={e.chapter_image_link}
                    />
                  <span>{e.image_number}</span>
                </div>
            ))}</div>
        </Container>
    )
}

export default ReadingPage
