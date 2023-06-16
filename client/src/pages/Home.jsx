import React from 'react';
import { homeDict } from "../dictionary/Dictionary";

import Swapper from "../components/swapper/Swapper";
import Contents from "../components/contents/Contents";

const Home = () => {

    const elements = Object.entries(homeDict).map(([key, value], i) => {
        return <Contents key={i} title={key} query={value} type='watch'/>;
    });
    
    return (
        <>
            <Swapper/>
            <div className="Home">
                {
                    elements
                }
            </div>
        </>
    );
}

export default Home;