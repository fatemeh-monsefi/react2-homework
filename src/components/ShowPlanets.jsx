export default function ShowPlanets({ planets }) {
  return (
    <>
      <ul>
        {planets.map((planet, index) => {
          return <li key={index}>{planet}</li>;
        })}
      </ul>
    </>
  );
}
