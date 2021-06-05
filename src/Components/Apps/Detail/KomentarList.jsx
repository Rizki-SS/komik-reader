import React, { useEffect, useState } from "react";
import { makeStyles, Grid, Avatar, ListItem, List, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../../../Firebase";
import { compose } from "recompose";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const ListKomentar = (props) => {
    const classes = useStyles();
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

        <List className={classes.root}>
            {KomenList.map((e, i) => (
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt={e.email} src="/broken-image.jpg" >
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >

                            </Typography>
                            {e.email}
                        </React.Fragment>
                    } secondary={e.komen} />
                </ListItem>
                // <div>
                //     <Grid container key={i} xs={2}>
                //         <Avatar alt={e.email} src="/broken-image.jpg" >
                //         </Avatar>
                //     </Grid>
                //     <Grid container key={i} xs={10}
                //     // className={classes.GridKomentar}
                //     >
                //         <Grid item xs={12} >
                //             {e.email}
                //         </Grid>
                //         <Grid item xs={12} >
                //             {e.komen}
                //         </Grid>
                //     </Grid>
                // </div>
            ))}
        </List>
    )
}

const KomentarList = compose(
    withRouter,
    withFirebase,
)(ListKomentar);

export default KomentarList;