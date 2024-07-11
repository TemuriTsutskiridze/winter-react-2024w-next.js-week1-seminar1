export default async function About() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await respone.json();
  return (
    <div>
      <h1 className="text-2xl text-red-500">About</h1>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.completed.toString()}</p>
          </div>
        );
      })}
    </div>
  );
}
