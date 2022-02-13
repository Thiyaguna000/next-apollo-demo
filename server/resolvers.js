const fetch = require('node-fetch');

  export const resolvers = {
    Query: {
      hello: async () => {
       let response = await fetch("http://universities.hipolabs.com/search?country=United+States")
        .then(res => res.json())
        .then(json => {
          let res = json.map(item => {
            return {
              name: item.name,
              location: item.country,
              webPages: item.web_pages[0],
              domain: item.domains[0]
            }
          })
          return res;
        })
        .catch(err => console.log(err));
       return response;
      }
    }
  };
  