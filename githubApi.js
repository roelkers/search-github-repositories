const axios = require('axios');

module.exports = async function getRepositoriesFromApi(searchTerm) {
  return new Promise((resolve,reject)=>{
    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}`)
    .then(function(response) {
      resolve(response.data);
    })
    .catch((error)=>{
      reject(error);
    });
  })  
  
  }