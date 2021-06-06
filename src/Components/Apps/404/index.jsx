import React from "react";
import img from '../../../Asset/Img/paimonshock.jpg'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paimon: {
        width: "50%",
        height: "50%",
        marginTop: "50px",
    },
    root: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    }

}));

const Notfound = () => {
    const classes = useStyles()

    return (
        <div
            className={classes.root}>
            <img
                className={classes.paimon}
                src={img}>
            </img>
            <h1>404 not found :(</h1>
        </div>

    )
}
export default Notfound