import React, { useState } from 'react';
import { useEffect } from 'react';

import { Container, Chip, Avatar, makeStyles } from "@material-ui/core";
import { getGenre } from "../../../Services/Api";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chip: {
        margin: 3
    }
}))

const Genre = () => {
    const [GenreList, setGenreList] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        getGenre()
            .then((value) => {
                setGenreList(value)
            })
    }, GenreList.message);

    return (
        <Container className={classes.root}>
            {
                GenreList.list_genre?.map((e, i) => (
                    <Chip
                        className={classes.chip}
                        variant="outlined"
                        label={e.genre_name}
                        key={e.endpoint}
                        color="primary"
                        avatar={
                            <Avatar alt={e.genre_name} src="/" />
                        }
                        clickable
                        component={Link}
                        to={"genre/" + e.endpoint}
                    />
                ))
            }
        </Container>
    )
}

export default Genre;