function getData() {
  return fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(result => {
      return result.map(item => {
        return {
          name: item.name,
          capital: item.capital,
          timezones: item.timezones[0],
          flag: item.flag,
          currencies: item.currencies[0].code
            ? item.currencies[0].code
            : "No Currency"
        };
      });
    })
    .catch(err => console.log("An Error Occured!", err));
}

export { getData };
