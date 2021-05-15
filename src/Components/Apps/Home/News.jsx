import React, { useState, useEffect } from "react";
import { getNewUpdate } from "../../../Services/Api";
import { Grid, Button, makeStyles } from "@material-ui/core";
import CardComic from "../../Widget/CardComic";
import { DisappearedLoading, BoxLoading } from 'react-loadingg';

const useStyles = makeStyles((theme) => ({
}));


const News = () => {
    const classes = useStyles();

    const [Komik, setKomik] = useState({
        page: 0,
        komik_list: null
    });
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getNewUpdate(0)
            .then((result) => {
                setKomik({
                    page: 1,
                    ...result
                })

                setLoading(false);
            })
    }, [Komik.status]);

    const LoadMore = (event) => {
        // console.log("CLicked");
        setLoading(true);
        getNewUpdate(Komik.page + 1)
            .then((result) => {
                setKomik({
                    page: Komik.page + 1,
                    status: Komik.status,
                    manga_list: [...Komik.manga_list, ...result.manga_list]
                })
                setLoading(false);
                // console.log(Komik);
            })
    }

    return (
        <Grid container spacing={3} justify="center">

            {Komik.manga_list?.map((e, i) => (
                <Grid item key={i}>
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
            {(Loading) ? (
                <Button disabled>
                    <DisappearedLoading />
                </Button>
            ) : (
                    <Button onClick={LoadMore} color="primary" variant="contained">
                        Load More
                    </Button>
                )}
        </Grid>
    )
}

export default News