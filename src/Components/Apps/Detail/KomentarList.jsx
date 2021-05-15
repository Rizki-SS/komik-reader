import React, { useEffect, useState } from "react";
import { TextField, makeStyles, Grid, Avatar } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../../Firebase";
import { compose } from "recompose";

const ListKomentar = (props) => {
    const [KomenList, setKomenList] = useState([]);

    useEffect(() => {
        props.firebase.getKomentar(props.endpoint).on('value', snapshot => {
            const fetchedTasks = [];
            snapshot.forEach(childSnapshot => {
                fetchedTasks.push(childSnapshot.val());
            });
            setKomenList(fetchedTasks)
        });

    }, [])

    return (
        <div>
            {KomenList.map((e, i) => (
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