export default async function Page(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return(
    <div style={{ padding:20}}>
      <h1>Fetch(キャッシュあり)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}