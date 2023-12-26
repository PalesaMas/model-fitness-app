export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9ffef95449msh12134f3dc33d452p188488jsnddda671b50bd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
