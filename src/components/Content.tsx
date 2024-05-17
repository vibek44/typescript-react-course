import { CoursePart  } from "../types";

const Content =({part}:{part:CoursePart})=>{
  if(part.kind==='basic'){
  return(
    <>
      <p><b> {part.name} {part.exerciseCount} </b></p>
      <p>{part.description}</p>  
    </>)
  }else if(part.kind==='group'){
    return(
      <>
        <b> {part.name} {part.exerciseCount} </b>
        <p>{part.groupProjectCount}</p>  
      </>)
  }else if (part.kind==='background'){
    return (
      <>
        <b> {part.name} {part.exerciseCount} </b>
        <p>{part.description}</p>
        <p>check material <a href={part.backgroundMaterial}> {part.backgroundMaterial}</a></p>
      </>
    )  
  }else if (part.kind==='special'){
    return (
      <>
        <b> {part.name} {part.exerciseCount} </b>
        <p>{part.description}</p>
        <p>required skills: {part.requirements.join()} </p>
      </>
    )  
  }
}




export default Content