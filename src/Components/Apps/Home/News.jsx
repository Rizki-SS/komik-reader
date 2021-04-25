import React, { useState, useEffect } from "react";
import { getNewUpdate } from "../../../Services/NewUpdate";
import { Grid, Button, makeStyles } from "@material-ui/core";
import CardComic from "../../Widget/CardComic";

const useStyles = makeStyles((theme) => ({
}));


const News = () => {
    const classes = useStyles();

    const [Komik, setKomik] = useState({
        page: 0,
        komik_list: null
    });

    useEffect(() => {
        getNewUpdate(0)
            .then((result) => {
                setKomik({
                    page: 1,
                    ...result
                })
                console.log(Komik);
            })
    }, [Komik.status]);

    const LoadMore = (event) => {
        // console.log("CLicked");
        getNewUpdate(Komik.page + 1)
            .then((result) => {
                setKomik({
                    page: Komik.page + 1,
                    status: Komik.status,
                    manga_list: [...Komik.manga_list, ...result.manga_list]
                })
                // console.log(Komik);
            })
    }

    return (
        <Grid container spacing={3} justify="center">
            {Komik.manga_list?.map((e, i) => (
                <Grid item>
                    <CardComic
                        title={e.title}
                        chapter={e.chapter}
                        endpoint={e.endpoint}
                        thumb={e.thumb}
                        key={i}
                        type={e.type}
                    />
                </Grid>
            ))
            }
            <Button onClick={LoadMore} color="primary" variant="contained">
                Load More
            </Button>
        </Grid>
    )
}

export default News