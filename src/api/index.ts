import Axios from 'axios';

interface Response {
    fact: string,
    length: Number
};

export const fetchFact = async (): Promise<Response> => {
    const response = await Axios.get('https://catfact.ninja/fact');
    return response.data;
}