import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getDetail } from "../../../Services/Detail";
import { Parallax } from "react-parallax";
import { Container, Card, CardMedia, CardContent, Typography, makeStyles, Grid, Button, Paper } from "@material-ui/core";
import ChapterList from "./ChapterList";

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%,-25%)",
        [theme.breakpoints.down('sm')]: {
            position: "relatif",
            left: "0%",
            transform: "translate(0%,5%)",
        }
    },
    media: {
        height: 400,
    },
    ganrebutton: {
        margin: 5
    },
    cover: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    paper: {
        padding: 10,
        margin: 10
    }
}));

const Manga = (props) => {
    const classes = useStyles();
    const [manga, setManga] = React.useState(0);

    useEffect(() => {
        getDetail(props.match.params.path)
            .then(result => {
                setManga(result)
                console.log(result);

            })
    }, [manga.title]);

    return (
        <div>
            <Parallax
                bgImage={manga.thumb}
                bgImageAlt="the dog"
                strength={80}
                className={classes.cover}
            >
                <div style={{ height: '500px' }} />
            </Parallax>

            <Container className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image={manga.thumb}
                                title={manga.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {manga.title}
                                </Typography>
                                <Typography gutterBottom variant="p" component="p">
                                    By. {manga.author}
                                </Typography>
                                <Typography gutterBottom variant="p" component="p">
                                    {manga.status}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h6" component="h2">
                                Sinopsis
                            </Typography>
                            <Typography variant="body" color="textSecondary" component="p">
                                {manga.synopsis}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h5">
                                Ganre
                            </Typography>
                            {manga.genre_list?.map(e => (
                                <Button className={classes.ganrebutton} variant="contained" color="primary" >
                                    {e.genre_name}
                                </Button>
                            ))}
                        </Paper>
                        <Paper className={classes.paper}>
                            <Typography gutterBottom variant="h6" component="h5">
                                Chapter List
                            </Typography>
                            <ChapterList chapter={manga.chapter} />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}

export default Manga;