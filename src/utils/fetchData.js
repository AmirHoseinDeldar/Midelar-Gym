export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '30a1db9040msh5a3ce748482fd38p1f4663jsn61fb80635dfa',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
