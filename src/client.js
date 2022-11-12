const BASE_URL = `https://api.themoviedb.org/3`;

const getURL = (endpoint, params = {}) => {
  const defaultParams = {
    api_key: process.env.REACT_APP_API_KEY,
    ...params,
  };

  /**
   * array.map -> e -> e2, array.length = array2.length
   * array.filter -> array.length != array2.length
   * array.reduce -> array -> value
   */

  // const qsParams = `?key=value&key2=value2...`
  const qsParams = Object.keys(defaultParams).reduce(
    (paramStr, element, index) => {
      const operator = index === 0 ? "?" : "&";
      paramStr += `${operator}${encodeURIComponent(
        element
      )}=${encodeURIComponent(defaultParams[element])}`;

      return paramStr;
    },
    ""
  );

  return `${BASE_URL}${endpoint}${qsParams}`;
};

const movieClient = {
  getPopular: async () => {
    const res = await fetch(getURL("/movie/popular"));

    return res.json();
  },
  search: async (term) => {
    const res = await fetch(getURL("/search/movie", { query: term }));

    return res.json();
  },
};

export default movieClient;
