import Pokecard from "./Pokecard";

export default function Pokedex({ data }) {
  return (
    <>
      <h1 className="heading">Pokedex</h1>
      <div className="first-container">
        <div className="container">
          {data.pokemon.map((data, index) => {
            return <Pokecard key={index} cardData={data} />;
          })}
        </div>
      </div>
    </>
  );
}
