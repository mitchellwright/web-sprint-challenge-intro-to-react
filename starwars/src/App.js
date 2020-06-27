import React from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";
import "nes.css/css/nes.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = React.useState([]);

  React.useEffect( () => {
    // make axios call for list of pokemon

    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then( result => {
        result.data.results.forEach( char => {
          // make axios call for the individual pokemon's detailed info
          axios.get(char.url)
              .then( result => {
                setCharacters(
                  // add the pokemon object to the characters array
                  characters => [...characters, result.data]);
              })
              .catch( error => console.error(error));
        });

      })
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

  return (
    <div className="App">
      <h1 className="Header">Pokemon Characters</h1>
        <div className="character-container">
          {characters.map( character => {
              return <Character key={character.id} characterData={character} />
            }
          )}
        </div>
    </div>
  );
}

export default App;
