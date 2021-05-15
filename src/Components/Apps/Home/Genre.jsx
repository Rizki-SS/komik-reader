import React, { useState } from 'react';
import { useEffect } from 'react';

import { Container } from "@material-ui/core";
import { getNewUpdate } from "../../../Services/Api";

const Genre = () => {
    const [GenreList, setGenreList] = useState(0);

    useEffect(() => {

    }, [input]);

    return (
        <Container>
            <Chip variant="outlined" color="primary" avatar={<Avatar>F</Avatar>} />
        </Container>
    )
}