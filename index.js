const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');

const API_KEY = 'k_hu5xvuvs';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3cmJwdXFkcHl1b2p3c2VpZ2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MTIzMjUsImV4cCI6MTk2OTA4ODMyNX0.wa1iQ7HYrupkCk1jGtyHC-h_AKac76pGaaQgU1Hq5cQ';

const SUPABASE_ENDPOINT = 'https://bwrbpuqdpyuojwseigko.supabase.co';
const ROOT_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/';
const ALCOHOLIC_DRINKS_ENDPOINT = `${ROOT_ENDPOINT}filter.php?a=Alcoholic`;
const DRINK_ENDPOINT = `${ROOT_ENDPOINT}lookup.php?i=`;

const supabase = createClient(SUPABASE_ENDPOINT, SUPABASE_KEY);

async function main() {
  const { drinks } = await getDrinks();

  for (const drink of drinks) {
    const drinkDetails = await getDrink(drink.idDrink);

    console.log(drinkDetails);
  }
}

main();

async function request(endpoint) {
  const result = await fetch(`${endpoint}`);
  const json = await result.json();

  return json;
}

async function getDrinks() {
  return request(ALCOHOLIC_DRINKS_ENDPOINT);
}

async function getDrink(id) {
  const result = await fetch(`${DRINK_ENDPOINT}${id}`);
  const json = await result.json();

  return json;
}

function createAsyncCode(fn, timeout) {
  return new Promise((resolve, reject) => {
    resolve(json);
  });
}
