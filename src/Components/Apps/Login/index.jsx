import React, { Component } from "react";

import { withFirebase } from "../../../Firebase";
import { compose, withState } from 'recompose';
import { withRouter } from "react-router-dom";

import { Container, Avatar, Icon, Typography, TextField, Button, Grid, Link, withStyles } from "@material-ui/core";

const INIT_STATE = {
    email: "",
    password: "",
    error: null
}

const useStyles = theme => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INIT_STATE };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ ...INIT_STATE });
                // redirect page
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === "" || email === "";
        const classes = this.props.classes;

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
                            Sign in
                    </Typography>
                        <form className={classes.form} onSubmit={this.onSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                onChange={this.onChange}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                onChange={this.onChange}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                        </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                            </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            {error && <p>{error.message}</p>}
                        </form>
                    </Grid>
                </Grid>
            </Container >
        )
    }
}

const LoginPage = () => (
    <Login></Login>
)

const Login = compose(
    withRouter,
    withFirebase,
    withStyles(useStyles)
)(LoginForm);

export default LoginPage;