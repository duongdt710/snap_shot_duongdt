import React, {createContext, useState} from "react";
import { ReactDOM } from "react";

export const PhotoContext = createContext();

const PhotoContextProvider = props => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = query => {

    }

    return(
        <PhotoContext.Provider value={{images, loading, runSearch}}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider