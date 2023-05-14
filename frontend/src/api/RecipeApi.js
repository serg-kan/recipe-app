export async function getAllRecipes() {
  try {
    const response = await fetch('http://localhost:3001/');

    return await response.json();
    
  } catch(err) {
    console.log('error', err);
  }
}