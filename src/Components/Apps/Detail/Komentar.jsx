import React from "react";
import { TextField, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    GridKomentar: {
        marginTop: 15
    }
}))

const Komentar = (props) => {
    const classes = useStyles();

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Ikut berdiskusi.." fullWidth />
            </form>
            <Grid container xs={12} className={classes.GridKomentar} >
                <Grid item xs={12} >
                    Lisa
                </Grid>
                <Grid item xs={12} >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, temporibus laborum. Ab ut, enim in doloremque iusto suscipit amet, aperiam sit quo optio cumque! Voluptas ipsum ab eos nisi quae?
                </Grid>
            </Grid>

        </div>

    )
}

export default Komentar;