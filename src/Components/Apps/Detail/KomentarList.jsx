import React, { useEffect, useState } from "react";
import { TextField, makeStyles, Grid, Avatar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../../Firebase";
import { compose } from "recompose";

const ListKomentar = (props) => {
    const [KomenList, setKomenList] = useState(0);

    useEffect(() => {
        props.firebase.getKomentar(props.endpoint).on('value', snapshot => {
            const getObject = (snapshot.val() != null) ? snapshot.val() : [];

            if (getObject !== []) {
                const listKomen = Object.keys(getObject).map(key => ({
                    ...getObject[key]
                }))

                setKomenList({
                    list: listKomen,
                    msg: "success"
                })
            }
        })
    }, [KomenList.msg]);

    return (
        <div>
            {KomenList.list?.map((e, i) => (
                <Grid container key={i} xs={12}
                // className={classes.GridKomentar}
                >
                    <Grid item xs={12} >
                        {e.email}
                    </Grid>
                    <Grid item xs={12} >
                        {e.komen}
                    </Grid>
                </Grid>
            ))}
        </div>
    )
}

const KomentarList = compose(
    withRouter,
    withFirebase,
)(ListKomentar);

export default KomentarList;