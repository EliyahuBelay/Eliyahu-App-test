import React, { useState } from "react";

const movieContex = React.createContext();

const MovieContex = (props)=>{
    const [movies,setMovies] = useState([]);
    return(
        <movieContex.Provider value={{movies,setMovies}}>
            {props.children}
        </movieContex.Provider>
    )
}
export default MovieContex;