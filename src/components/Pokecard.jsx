export default function Pokecard({ cardData }) {
  return (
    <div className="poke-card">
      <span className="poke-name">{cardData.name}</span>
      <img src={cardData.image}></img>
      <span className="poke-type">Type: {cardData.type}</span>
    </div>
  );
}
