import React, { Component } from "react";
import { Container, Avatar, Icon, Typography, Grid, makeStyles } from "@material-ui/core";

import FormRegister from './formRegister';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function Register() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item ls={3}>
                    <Avatar className={classes.avatar}>
                        <Icon>menu</Icon>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>

                    <FormRegister />
                </Grid>
            </Grid>
        </Container >
    )
}

export default Register;