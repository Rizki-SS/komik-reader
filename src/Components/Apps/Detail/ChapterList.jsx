import React from "react";
import { makeStyles, List, ListItemText, ListItem, Icon, ListItemIcon } from "@material-ui/core";
import { TextLazy } from "../../Widget";
import { Link } from "react-router-dom";

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
        <TextLazy row={5} condition={!props.chapter}>
            <List className={classes.root} subheader={<li />}>
                {props.chapter?.map((e, i) => (
                    <ListItem key={i} button to={"../../chapter/" + e.chapter_endpoint} component={Link}>
                        <ListItemIcon>
                            <Icon>visibility</Icon>
                        </ListItemIcon>
                        <ListItemText primary={e.chapter_title} />
                    </ListItem>
                ))}
            </List>
        </TextLazy>
    )
}

export default ChapterList;