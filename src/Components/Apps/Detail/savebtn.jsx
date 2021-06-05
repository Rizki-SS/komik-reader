import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Localdb, { add } from "../../../Services/localDB";

const Savebtn = (props) => {
    return (
        <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Icon>bookmark_border</Icon>}
            fullWidth
            onClick={
                async () => {
                    await add({
                        endpoin: props.manga.manga_endpoint,
                        value: props.manga
                    })
                }
            }
        >
            Save
        </Button>
    )
}

export default Savebtn;