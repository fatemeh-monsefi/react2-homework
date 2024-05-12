import Card from "./components/Card";
import Alert from "./components/Alert";
import CardUpdate from "./components/CardUpdate";
import RenderList from "./components/RenderList";
import ShowPlanets from "./components/ShowPlanets";
import Pokedex from "./components/Pokedex";
import CustomerInformation from "./components/CustomerInformation";

export default function App() {
  const data = {
    image: "../../.learn/assets/Dylan.png?raw=true",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };

  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  const pokedexCardData = {
    pokemon: [
      {
        id: 1,
        name: "Charmander",
        type: "fire",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      {
        id: 2,
        name: "Squirtle",
        type: "water",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      {
        id: 3,
        name: "Butterfree",
        type: "flying",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      },
      {
        id: 4,
        name: "Rattata",
        type: "normal",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      },
      {
        id: 5,
        name: "Metapod",
        type: "bug",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      },
    ],
  };

  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };

  return (
    <>
      <Card />
      <Alert text="OMG! Something really bad has happened!" />
      <CardUpdate data={data} />
      <RenderList animals={animals} />
      <ShowPlanets planets={planets} />
      <Pokedex data={pokedexCardData} />
      <CustomerInformation information={customer} />
    </>
  );
}
