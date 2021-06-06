import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Localdb, { add, deleteById, getByEndpoin } from "../../../Services/localDB";
import { useState } from "react";
import { useEffect } from "react";

import { AuthUserContext } from "../../../Session";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Savebtn = (props) => {
    const [Saved, setSaved] = useState(false);
    const [Id, setId] = useState(0);

    useEffect(async () => {
        const manga = await getByEndpoin({ key: props.endpoint })

        if (!!manga) {
            setSaved(true)
            setId(manga["id"]);
        }
    }, []);

    const clickSaved = async () => {
        await add({
            endpoin: props.manga.manga_endpoint,
            value: props.manga
        })
        setSaved(true)
    }

    const clickUnsaved = async () => {
        await deleteById({ key: Id })
        setSaved(false)
    }

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <Button
                        variant="contained"
                        color={(Saved) ? "secondary" : "primary"}
                        size="large"
                        startIcon={(Saved) ? <Icon>bookmark</Icon> : <Icon>bookmark_border</Icon>}
                        fullWidth
                        onClick={async () => {
                            (Saved) ? await clickUnsaved() : clickSaved()
                        }}
                    >
                        {(Saved) ? "Unsave" : "Save"}
                    </Button >
                ) : (<Button
                    variant="contained"
                    color={"primary"}
                    size="large"
                    fullWidth
                    component={Link}
                    to={"/login"}
                >
                    Login
                </Button >)}
        </AuthUserContext.Consumer>
    )
}

export default Savebtn;