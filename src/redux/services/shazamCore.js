const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4a27a3a8c6msh970e79bfa528090p1202b0jsne898187dff0c",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
