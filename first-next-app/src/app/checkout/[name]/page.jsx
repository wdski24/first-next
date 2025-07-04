export default async function Page({ params }) {
  const { name } = await params;
  return <div>Danke für die Reservierung {name}</div>;
}
