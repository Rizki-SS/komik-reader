import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid } from "@material-ui/core";
import { getAll } from "../../../Services/localDB";
import CardComic from "../../Widget/CardComic";
import withAuthotization from "../../../Session/withAuthorization";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
}));

const Save = () => {
    const classes = useStyles();
    const [Manga, setManga] = useState(null);

    useEffect(async () => {
        const manga = await getAll();
        setManga(manga);
    }, []);

    return (
        <Container className={classes.root}>
            <Grid container spacing={3} justify="center">
                {Manga?.map((e, i) => (
                    <Grid item key={i}>
                        <CardComic
                            title={e.value.title}
                            endpoint={e.endpoin}
                            thumb={e.value.thumb}
                            key={i}
                            type={e.value.type}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
const condition = authUser => authUser;
export default withAuthotization(condition)(Save);