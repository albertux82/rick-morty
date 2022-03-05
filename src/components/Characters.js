import React from "react";

export default function Characters(props) {
  const { characters, setCharacters } = props;
  //console.log(characters);

  const resetCharacters = ()=>{
      setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Regresar</span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive">Alive</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Dead</span>
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
            </div>
          </div>
        ))}
        <span className="back-home" onClick={resetCharacters}>Regresar</span>
      </div>
    </div>
  );
}
