


export default async function Home() {
const response = await fetch("https://build-test-sigma.vercel.app/api");
const result = await response.json();

  return <p>{result.teste}</p>;
}
