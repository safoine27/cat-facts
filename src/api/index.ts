import Axios from 'axios';

interface Response {
  fact: string;
  length: number;
}

export const fetchFact = async (): Promise<Response> => {
  const response = await Axios.get('https://catfact.ninja/fact');
  return response.data;
};
