import { get, post } from './request.js';

const URL = '/api/v1/lists';

export async function getLists() {
  return await get(URL);
}

export async function createList(list) {
  return await post(URL, list);
}

export async function getListItems(id) {
  return await get(`${URL}/${id}/items`);
}
