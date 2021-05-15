import React, { useEffect, useState } from "react";

import { getByGenre } from "../../../Services/Api";
import { makeStyles, Container, Grid, Button } from "@material-ui/core";
import CardComic from "../../Widget/CardComic";
import DisappearedLoading from "react-loadingg/lib/DisappearedLoading";

const useStyles = makeStyles((theme) => ({
}))

const GenrePage = (props) => {
    const classes = useStyles();
    const [List, setList] = useState({ manga_list: [] });
    const [Page, setPage] = useState(1);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        getApi()
    }, List);

    const getApi = () => {
        setLoading(true);
        getByGenre(props.match.params.genre, Page)
            .then(value => {
                setList({
                    message: value.message,
                    manga_list: [...List.manga_list, ...value.manga_list]
                });
                setPage(Page + 1);
                setLoading(false);
            })
    }

    return (
        <Container>
            <h1>Genre : {props.match.params.genre}</h1>
            <Grid container spacing={3} justify="center">
                {List.manga_list?.map((e, i) => (
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
                ))}

                {(Loading) ? (
                    <Button disabled>
                        <DisappearedLoading />
                    </Button>
                ) : (
                        <Button onClick={() => { getApi() }} color="primary" variant="contained">
                            Load More
                        </Button>
                    )}
            </Grid>
        </Container>
    )
}
export default GenrePage