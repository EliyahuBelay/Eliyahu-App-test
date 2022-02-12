import { useState ,createContext, useEffect} from "react";
import { Get } from "../Service/PicturesService.service";

export const picturesContex = createContext();

const PicturesContexProvider = (props)=>{
    const [pictures,setPictures] = useState([]);
    // useEffect(()=>
    // Get()
    // .then(res => setPictures(res))
    // .catch(()=>console.log("error"))
    // ,[])
    return(
        <picturesContex.Provider value={{pictures,setPictures}}>
            {props.children}
        </picturesContex.Provider>
    )
}
export default PicturesContexProvider;