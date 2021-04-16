import React from "react";
import { makeStyles, List, ListItemText, ListItem, Link, Icon, ListItemIcon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 500,
    },
    list: {
        width: 300,
    },
}))

const ChapterList = (props) => {
    const classes = useStyles();

    return (
        <List className={classes.root} subheader={<li />}>
            {props.chapter?.map((e, i) => (
                <ListItem key={i} button href={"../../chapter/" + e.chapter_endpoint} component={Link}>
                    <ListItemIcon>
                        <Icon>visibility</Icon>
                    </ListItemIcon>
                    <ListItemText primary={e.chapter_title} />
                </ListItem>
            ))}
        </List>
    )
}

export default ChapterList;