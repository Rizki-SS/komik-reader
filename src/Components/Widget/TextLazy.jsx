import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import PropTypes from 'prop-types'
import { setPropTypes } from "recompose";

const TextLazy = (props) => {
    if (props.condition) {
        let elements = [];
        for (let i = 0; i < props.row; i++) {
            elements.push(<Skeleton key={i} />);
        }
        return (
            <div>
                {elements}
            </div>
        )
    } else {
        return props.children
    }
}

TextLazy.propTypes = {
    condition: PropTypes.bool,
    row: PropTypes.number,
}

export default TextLazy;