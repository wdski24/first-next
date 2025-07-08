let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Bob' },
];
export async function GET() {
  // For example, fetch data from your DB here

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;

  // e.g. Insert new user into your DB
  const newUser = { id: Date.now(), name };
  users.push(newUser);
  return new Response(JSON.stringify(users), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
