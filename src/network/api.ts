import axios from "axios";

export const BASE_URL = "https://ixora-auto.ru/wipers";

export const instance = axios.create({ baseURL: BASE_URL });

export async function fetchData(route: string) {
  try {
    const response = await instance.get(route);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
