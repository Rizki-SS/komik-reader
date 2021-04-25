import React from "react";
import { Parallax } from 'react-parallax';
import img from '../../../Asset/Img/bgCover.png'
import Rimuru from '../../../Asset/Img/Rimuru.png'
import { Container, Grid, Typography } from "@material-ui/core";

const Cover = () => {
    return (
        <Parallax
            bgImage={img}
            bgImageAlt="the dog"
            strength={100}
        >
            <Container>
                <Grid Container>
                    <Grid item xs={12} md={6} style={{ paddingTop: '200px', paddingBottom: '200px' }}>
                        <Typography variant="h4" component="h1" color="secondary">Baca Komik</Typography>
                        <Typography variant="h2" component="h2" color="secondary">Tensei Shitara Slime Datta Ken</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
            </Container>
        </Parallax>
    )
};

export default Cover;