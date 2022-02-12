import { createElement, useContext } from "react";
import {picturesContex} from  '../../MyContex/PicturesContex';
import { Get } from "../../Service/PicturesService.service";
const Home = ()=> {
  const {pictures,setPictures} = useContext(picturesContex);
  // console.log(pictures);
  const GetData = ()=>{
    Get()
    .then( res => setPictures(res))
    .then( () => console.log(pictures))
    .then(()=>{ const div = createElement('div')})
  }
  return (
    <section>
      <h1>Home</h1>
      {
        // pictures.map((item)=> <p>{item.title}</p>)
      }
      <button onClick={GetData}>go</button>
    </section>
  )
}
export default Home;
