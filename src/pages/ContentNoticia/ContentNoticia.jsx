import React from "react";
import noticias from "../../components/Noticias/noticias";
import { useParams } from "react-router-dom";
import { Content, TitleNews } from "../../components/common/PagesStyles";

const  ContentNoticia=()=>{
const {id}=useParams();

const FindNew=noticias.find((FindNew)=>FindNew.id===parseInt(id));


if(!FindNew){
return <p>No existe esa noticia</p>

}
return(
    <div>
<TitleNews>{FindNew.title}</TitleNews>
<Content>{FindNew.content2}</Content>
</div>


);



};

export default ContentNoticia;