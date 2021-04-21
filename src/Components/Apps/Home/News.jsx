import React, { useState, useEffect } from "react";
import { getNewUpdate } from "../../../Services/NewUpdate";
import { Grid } from "@material-ui/core";
import CardComic from "../../Widget/CardComic";

const News = () => {
    const [Komik, setKomik] = useState({
        page: 0,
        komik_list: null
    });

    useEffect(() => {
        getNewUpdate(0)
            .then((result) => {
                setKomik({
                    page: 0,
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
        <div>
            <Grid container spacing={3}>
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
            </Grid>
            <button onClick={LoadMore}>
                Load More
            </button>
        </div>
    )
}

export default News