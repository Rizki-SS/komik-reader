import React from "react";
import Cover from "./Cover";

import { Container } from "@material-ui/core";

const HomePage = () => (
    <div>
        <Cover />
        <Container>
            <h1>Manga Populer</h1>
            <div style={{ height: '800px' }} />
        </Container>
    </div>
)

export default HomePage