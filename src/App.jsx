import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./Nav";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  const [country, setCountry] = useState("India");
  const [search, setSearch] = useState("India");
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=420f9e74420b43ff80404415a3240aa3`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, [search]);

  function handleChange(e) {
    setCountry(e.target.value);
  }

  function handleSearch() {
    setSearch(country);
  }

  return (
    <div>
      <Nav handleChange={handleChange} handleSearch={handleSearch} />
      {news.length === 0 && <h1>No data found</h1>}

      <div className="content">
        {news.length > 0 &&
          news.map((n) => (
            <div>
              <Card sx={{ maxWidth: 345, height: 400  }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={n.urlToImage}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {n.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {n.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <a href={n.url} target="_blank">
                    Read More
                  </a>
                </CardActions>
              </Card>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default App;
