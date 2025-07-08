//Wichtig, damit die Funktion auch immer auf dem Server ausgeführt wird
'use server';

//Server Side Actions sind immer Asyncron
export async function logStatement(params) {
  console.log('test');
}

export async function createUser({ name }) {
  console.log(name);
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'Max' }),
  });
}
