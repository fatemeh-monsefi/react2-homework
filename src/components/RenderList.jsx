export default function RenderList({ animals }) {
  return (
    <>
      <ul>
        {animals.map((animal, index) => {
          return <li key={index}>{animal.label}</li>;
        })}
      </ul>
    </>
  );
}
