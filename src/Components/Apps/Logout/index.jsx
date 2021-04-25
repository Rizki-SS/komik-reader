import React from "react";
import { Button } from '@material-ui/core';

import { withFirebase } from "../../../Firebase";

const SingOut = ({ firebase }) => (
    <Button color="secondary" onClick={firebase.doSingOut}>
        Sign Out
    </Button>
);

export default withFirebase(SingOut);