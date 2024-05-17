import Content from "./Content";
import { CoursePart } from "../types";

const Part=({courseParts}:{courseParts:CoursePart[]})=>{
  const assertNever=(value:never):never=>{
    throw new Error(`unhandled discriminated union member: ${JSON.stringify(value)}`)

  };
  return(<div> {
    //discriminated union technique  for type narrowing
    courseParts.map((part)=>{
      switch(part.kind){
      case 'basic':
        return <Content key={part.name} part={part}/>
      case 'group':
        return <Content key={part.name} part={part}/>
      case 'background':
        return <Content key={part.name} part={part}/>
      case 'special':
        return <Content key={part.name} part={part}/>
      //exhautive typechecking for union type data
      default:
        assertNever(part);
   }
  })}
    </div>)
}

export default Part