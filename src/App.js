import "./App.css";
import { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";
import Loader from "./components/Loader";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setResults(data.results);
      });
  }, []);

  return (
    <div className='app-wrapper'>
      <h2>Contact list</h2>
      {!results ? (
        <Loader />
      ) : (
        results.map((result, index) => {
          return (
            <ContactCard
              key={result.id.value === null ? index : result.id.value}
              src={result.picture.thumbnail}
              name={result.name.first}
              lastName={result.name.last}
              email={result.email}
              age={result.dob.age}
              city={result.location.city}
              country={result.location.country}
              number={result.cell}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
