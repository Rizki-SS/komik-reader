import React, { useEffect, useState } from "react";

import { makeStyles, Container, Grid, Button } from "@material-ui/core";
import CardComic from "../../Widget/CardComic";
import DisappearedLoading from "react-loadingg/lib/DisappearedLoading";
import { getSearchByName } from "../../../Services/Api";

const useStyles = makeStyles((theme) => ({
}))

const SearchPage = (props) => {
    const classes = useStyles();
    const [List, setList] = useState({ manga_list: [] });
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getSearchByName(props.match.params.key)
            .then(value => {
                setList({
                    message: value.message,
                    manga_list: [...value.manga_list]
                });
                setLoading(false);
            })
    }, [props.match.params.key]);

    return (
        <Container>
            <h1>Search : {props.match.params.key}</h1>
            {(Loading) ? (
                <Button disabled>
                    <DisappearedLoading />
                </Button>
            ) : (
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
                    </Grid>
                )}
        </Container>
    )
}
export default SearchPage