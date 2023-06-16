import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Contents from "../../components/contents/Contents";
import Swapper from "../../components/swapper/Swapper";
import { movieDict, seriesDict, cartoonDict } from "../../dictionary/Dictionary";

const SwitchPage = () => {
    const [genres, setGenres] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        switch(type){
            case 'movie':
                setGenres(movieDict);
                break;
            case 'tv-series':
                setGenres(seriesDict);
                break;
            case 'cartoon':
                setGenres(cartoonDict);
                break;
            default: setGenres(movieDict)
        }
    }, [type])



    const elements = Object.entries(genres).map(([key, value]) => {
        return <Contents key={key} type={type} title={key} query={value}/>;
      });

    return (
        <>
            <Swapper/>
            <div className="SwitchPage">
                {elements}
            </div>
        </>
    );

}

export default SwitchPage;