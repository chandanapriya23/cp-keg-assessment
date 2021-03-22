/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */

export const getGoatFacts = async () => {
  // console.error(`Step 4. Goat Facts api call!`)
  const request = await fetch('http://localhost:5005/goats');
  const response = await request.json();
   console.log(response);

  return response;
}
