const BASE_URL = "https://dog.ceo/api";

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds/list/all`);;
}

