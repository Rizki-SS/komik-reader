import React, { Component } from "react";
import { Container, Avatar, Icon, Typography, Grid, makeStyles } from "@material-ui/core";


import { withAuthorization } from "../../../Session";
import FormLogin from './formLogin';
import withAuthotization from "../../../Session/withAuthorization";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

function Login() {
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

                    <FormLogin />
                </Grid>
            </Grid>
        </Container >
    )
}


const condition = authUser => !authUser;
export default withAuthotization(condition)(Login);