import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { getAll } from "../../../Services/localDB";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        <div>
            {Manga?.map((e, i) => (
                <h1 key={i}>{e.value.title}</h1>
            ))}
        </div>
    )
}

export default Save;