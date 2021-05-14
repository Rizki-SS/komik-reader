import React, { useState } from "react";
import { TextField, makeStyles, Grid, Avatar } from "@material-ui/core";
import { compose } from "recompose";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { withFirebase } from "../../../Firebase";
import { withAuthorization, AuthUserContext } from "../../../Session";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    GridKomentar: {
        marginTop: 15
    }
}))

const FormKomentar = (props) => {
    const classes = useStyles();
    const [Komen, setKomen] = useState({
        komen: null
    });

    const postKomen = (e, authUser) => {
        e.preventDefault();
        props.firebase.komentar(props.endpoint, new Date().valueOf()).set({
            userId: authUser.uid,
            email: authUser.email,
            komen: Komen.komen
        })
        setKomen({
            komen: " "
        })
    }

    const onChage = (e) => {
        setKomen({ komen: e.target.value })
    }

    console.log();

    return (
        <div>
            <AuthUserContext.Consumer>
                {authUser =>
                    <form
                        className={classes.root}
                        noValidate
                        onSubmit={e => postKomen(e, authUser)}>
                        <TextField
                            id="standard-basic"
                            label="Ikut berdiskusi.."
                            value={Komen.komen}
                            fullWidth
                            onChange={onChage} />
                    </form>
                }
            </AuthUserContext.Consumer>

        </div>

    )
}

const Komentar = compose(
    withRouter,
    withFirebase,
)(FormKomentar);

export default Komentar;