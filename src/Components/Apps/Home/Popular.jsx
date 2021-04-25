import React, { useEffect, useState } from "react";
import Cover from "./Cover";

import { Container, Grid, makeStyles, GridList, GridListTileBar, GridListTile, withWidth } from "@material-ui/core";
import CardComic, { CardComicSkelaton } from "../../Widget/CardComic";
import { getPopuler } from "../../../Services/Populer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        height: '330px',
        flexWrap: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            height: '620px',
        }
    },
}))

const Popular = (props) => {
    const classes = useStyles();
    const [Komik, setKomik] = useState(0);

    useEffect(() => {
        getPopuler("1")
            .then((result) => {
                setKomik(result);
                console.log(result);
            })
    }, [Komik.title]);

    return (
        <div className={classes.root}>
            {(Komik.status) ? (
                <GridList className={classes.gridList} cols={(props.width === 'xs') ? 1 : 2} cellHeight={(props.width === 'xs') ? 600 : 310}>
                    {Komik.manga_list?.map((e, i) => (
                        <GridListTile>
                            <CardComic
                                title={e.title}
                                chapter={e.chapter}
                                endpoint={e.endpoint}
                                thumb={e.thumb}
                                key={i}
                                type={e.type}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            ) : (
                    <GridList className={classes.gridList} cols={(props.width === 'xs') ? 1 : 2} cellHeight={(props.width === 'xs') ? 600 : 310}>
                        <GridListTile>
                            <CardComicSkelaton />
                        </GridListTile>
                        <GridListTile>
                            <CardComicSkelaton />
                        </GridListTile>
                    </GridList>
                )}
        </div>
    )
}

export default withWidth()(Popular)