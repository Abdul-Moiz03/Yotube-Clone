import axios from 'axios';
const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key':'cb192fbacamsh6d4bee88a118cd7p1abdc5jsn643dbfe1319f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const FetchfromAPI= async(url)=>{ 
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }