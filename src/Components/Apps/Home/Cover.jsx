import React from "react";
import { Parallax } from 'react-parallax';

const Cover = () => (
    <Parallax
        bgImage="https://qcdn.my.id/2020/11/promo-insta-889124-c7f6fuqG.png"
        bgImageAlt="the dog"
        strength={100}
    >
        <div style={{ height: '800px' }} />
    </Parallax>
);

export default Cover;