import React from "react";
import { Button } from '@material-ui/core';

import { withFirebase } from "../../../Firebase";

const SingOut = ({ firebase }) => (
    <Button onClick={firebase.doSingOut}>
        Sing Out
    </Button>
);

export default withFirebase(SingOut);