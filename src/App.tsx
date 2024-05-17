import Header from "./components/Header";
import Part from "./components/Part";
import Total from "./components/Total";
import { courseParts } from "./types";

const App = () => {
  const courseName = "Half Stack application development";
 
  
  return (
    <div>
     <Header name={courseName}/>
     <Part courseParts={courseParts}/>
     <Total courseParts={courseParts}/>
    </div>
  );
};

export default App;