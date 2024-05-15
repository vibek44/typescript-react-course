interface HeaderProps{
  name:string;
}

interface Course{
  name:string;
  exerciseCount:number
}

interface ContentProps{
  courseParts:Course[]
}

const Header=(props:HeaderProps):JSX.Element=>{
 return <p>{props.name}</p>
}

const Content=({ courseParts }:ContentProps):JSX.Element=>{
  return(<div> <p>
   {courseParts[0].name} {courseParts[0].exerciseCount}
 </p>
 <p>
   {courseParts[1].name} {courseParts[1].exerciseCount}
 </p>
 <p>
   {courseParts[2].name} {courseParts[2].exerciseCount}
 </p></div>)
}

const Total=({courseParts}:ContentProps)=>{
  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);
  return (<div>
       <p>
       Number of exercises {totalExercises}
     </p>
  </div>)
}

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
     <Header name={courseName}/>
     <Content courseParts={courseParts}/>
     <Total courseParts={courseParts}/>
    </div>
  );
};

export default App;