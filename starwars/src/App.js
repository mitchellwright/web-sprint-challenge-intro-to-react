import React from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";
// import "nes.css/css/nes.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = React.useState([]);

  React.useEffect( () => {
    let characterUrls = [];
    // make axios call for list of pokemon
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then( result => {
        return axios.all(result.data.results.map( character => {
          return axios.get(character.url);
        }))
      })
      .then( results => {
        console.log(results);
        return results.map( character => character.data);
      })
      .then( results => setCharacters(results))
      .catch( error => {
        console.error(error);
      });
  }, []);

  // if we don't have data yet, show loading message
  if(!characters) {
    return (
      <div className="App">
        <h1 className="Header">Pokemon Characters</h1>
        <section className="nes-container">
          <section className="message-list">
            <section className="message -left">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left">
                <p>Getting loaded!</p>
              </div>
            </section>
            <section className="message -right">
              <div className="nes-balloon from-right">
                <p>Loading...</p>
              </div>
              <i className="nes-charmander"></i>
            </section>
          </section>
        </section>
      </div>
    );
  }

  // return the characters when we have data
  return (
    <div className="App">
      <h1 className="Header">Pokemon Characters</h1>
        <div className="character-container">
          {characters.map( character => {
              return <Character key={character.id} characterData={character} />
            }
          ).sort( (a, b) => a.id - b.id)}
        </div>
    </div>
  );
}

export default App;
