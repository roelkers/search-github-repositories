const express = require('express');
const bodyParser = require('body-parser');
const githubApi = require('./githubApi');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.repositories = [];

app.get('/api/repositories/search/:searchTerm', (req, res) => {
  githubApi(req.params.searchTerm)
  .then((rawRepositories)=>{
    let repository;
    app.repositories = [];
    for(item of rawRepositories.items){
      repository = {
                    id   : item.id,
                    name : item.full_name,
                    forks : item.forks,
                    stars : item.stargazers_count,
                    owner : item.owner.login};
      app.repositories.push(repository);
    }
    res.send(app.repositories);
  })
  .catch((error)=>{
    res.send("github repositories not available.");
  })
});

app.get('/api/bookmarks',(req,res)=>{
  const bookmarkedRepositories = app.repositories.filter((repository)=>{
    return repository.bookmark;
  });
  res.send(bookmarkedRepositories);
})

app.put('/api/bookmarks',(req,res)=>{
  const id = req.body.repository_id;
  const repo = app.repositories.find((repository)=>{
    return repository.id == id;
  })
  if(!repo){
    return res.send(`No repository found with #${id}`);
  }
  repo.bookmark = true;

  res.send(repo);
})

app.delete('/api/bookmarks',(req,res)=>{
  const id = req.body.repository_id;
  const repo = app.repositories.find((repository)=>{
    return repository.id == id;
  })
  if(!repo){
    return res.send(`No repository found with #${id}`);
  }
  if(!repo.bookmark){
    return res.send(`No bookmark found for repository #${id}`);
  }
  repo.bookmark = false;

  res.send(repo);
})


app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;