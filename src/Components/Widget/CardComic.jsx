import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '300px',
        width: '600px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(1),
        paddingTop: theme.spacing(3)
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '300px',
        height: '600px'
    },
    controls: {
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(3),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

const CardComic = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={props.thumb}
                title={props.title}
                width="300px"
                height='600px'
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="body1" color="textSecondary">
                        Last Update {props.updated_on}
                    </Typography>
                    <Typography component="h5" variant="h5">
                        <b>{props.title}</b>
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.chapter}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        # {props.type}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Link to={"/manga/" + props.endpoint}>Baca Selengkapnya</Link>
                </div>
            </div>
        </Card>
    )
}

const CardComicSkelaton = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <Skeleton variant="rect" className={classes.cover} />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="body1" color="textSecondary">
                        <Skeleton variant="text" />
                    </Typography>
                    <Typography component="h5" variant="h5">
                        <Skeleton variant="text" />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <Skeleton variant="text" />
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        <Skeleton variant="text" />
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Link>Baca Selengkapnya</Link>
                </div>
            </div>
        </Card>
    )
}

CardComic.propTypes = {
    thumb: PropTypes.string,
    title: PropTypes.string,
    updated_on: PropTypes.string,
    chapter: PropTypes.string,
    endpoint: PropTypes.string,
    type: PropTypes.string,
}

export default CardComic;
export { CardComicSkelaton }