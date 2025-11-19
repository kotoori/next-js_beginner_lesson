export default async function Page(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json(); //JSONデータをパースして、dataに格納する

  return(
    <div style={{ padding:20 }}>
      <h1>SSRのページ</h1>
      <p>サーバーで取得したデータを使ってHTMLを生成する</p>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}