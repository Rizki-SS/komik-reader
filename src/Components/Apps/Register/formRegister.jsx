import React, { Component } from "react";

import { withFirebase } from "../../../Firebase";
import { compose } from 'recompose';
import { withRouter } from "react-router-dom";

import { TextField, Button, Grid, Link, withStyles } from "@material-ui/core";

const INIT_STATE = {
    email: "",
    password: "",
    passwordTwo: "",
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

class FormRegisterBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INIT_STATE };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email, password, passwordTwo } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                //create user in firebase realtime
                // return this.props.firebase
                //     .user(authUser.user.uid)
                //     .set({
                //         username,
                //         email,
                //         roles
                //     });
            })
            .then(() => {
                this.setState({ ...INIT_STATE });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ error });
            });
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { email, password, passwordTwo, error } = this.state;
        const isInvalid = password === "" || email === "" || password !== passwordTwo;
        const classes = this.props.classes;

        return (

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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    onChange={this.onChange}
                    name="passwordTwo"
                    label="Password Comfirm"
                    type="password"
                    id="passwordTwo"
                    autoComplete="current-password"
                />
                {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                <Button
                    type="submit"
                    fullWidth
                    disabled={isInvalid}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
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
        )
    }
}

const FormRegister = compose(
    withRouter,
    withFirebase,
    withStyles(useStyles)
)(FormRegisterBase);

export default FormRegister;