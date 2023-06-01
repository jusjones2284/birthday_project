import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);

  const handleButtonClick = () =>{
    console.log("working");
    setPeople([]);
  }

  return (
  
    <main>
      <section className="container">
      <h3>{people.length} birthdays today</h3>
       <List people={people} />
      </section>
      <button 
        type="button" 
        className="btn btn-block"
        onClick={handleButtonClick}
        > clear all</button>
    </main> 
    );
};
export default App;
