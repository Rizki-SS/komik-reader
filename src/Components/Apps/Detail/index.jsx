import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getDetail } from "../../../Services/Detail";

const Manga = (props) => {
    const [manga, setManga] = React.useState(0);

    useEffect(() => {
        getDetail(props.match.params.path)
            .then(result => {
                setManga(result)
            })
    });

    return (
        <div>
            {manga.title}
        </div>
    );
}

export default Manga;