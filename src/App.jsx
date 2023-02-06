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
  const [country, setCountry] = useState("India")
  const [search, setSearch] = useState("India")
  const [news, setNews] = useState([]);
  console.log(news);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=420f9e74420b43ff80404415a3240aa3`
    )
      .then((res) => res.json())
      .then((data) => setNews([data.articles]));
  }, [search]);

  function handleChange(e){
    setCountry(e.target.value)
  }

  function handleSearch(){
    setSearch(country)
  }



  return (
    <div>
      <Nav handleChange={handleChange}
      handleSearch={handleSearch} /> 
      <div>
        {news.map((n) => (
          <div className="content">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[0].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[0].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[0].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[0].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[1].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[1].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[1].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[1].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[2].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[2].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[2].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[2].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[3].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[3].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[3].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[3].url}
                  style={{cursor: "pointer"}}
                  target="_blank" 
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[4].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[4].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[4].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[4].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[5].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[5].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[5].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[5].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[6].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[6].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[6].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[6].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[7].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[7].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[7].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href={n[7].url}
                  target="_blank"
                >
                  Read More
                </a>
              </CardActions>
            </Card>
{/* 
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[8].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[8].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[8].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href="https://gizmodo.com/bitcoin-price-hack-217-btc-og-developer-luke-dashjr-1849944799"
                  size="small"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[9].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[9].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[9].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href="https://gizmodo.com/bitcoin-price-hack-217-btc-og-developer-luke-dashjr-1849944799"
                  size="small"
                >
                  Read More
                </a>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={n[10].urlToImage}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {n[10].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {n[10].description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <a
                  href="https://gizmodo.com/bitcoin-price-hack-217-btc-og-developer-luke-dashjr-1849944799"
                  size="small"
                >
                  Read More
                </a>
              </CardActions>
            </Card> */}
          </div>
          // <div className="card">
          //   <img className="img" src={n.urlToImage} />
          //   <h5>{n.title}</h5>
          //   <p>{n.description}</p>
          //   <button>Read More</button>
          // </div>
        ))} ;
      </div>
      
 
    </div>
  );
}

export default App;
