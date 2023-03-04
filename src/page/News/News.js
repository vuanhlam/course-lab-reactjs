import "./News.scss";

import Typography from "@mui/material/Typography";
import MediaControlCard from "./MediaControlCard";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import listFilms from "../../shared/ListOfFilms";

function News() {
  return (
    <div className="new-page">
      <div className="hero">
        <figure className="hero__banner">
          <img
            src="https://m.media-amazon.com/images/M/MV5BNzAwNmVjNGQtYWVlNy00YTljLWExZjgtZWVkZmQyYjYxMzFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._CR10,77,1563,879_QL75_UY563_CR0,0,1000,563_.jpg"
            className="hero__banner-image"
          />
        </figure>
        <div className="hero__upnext">
          <Typography
            sx={{ fontWeight: "600", color: "#141414", pl: 2 }}
            variant="h6"
            gutterBottom
          >
            Up next
          </Typography>
          <Box component="div" sx={{ p: 2 }}>
            <MediaControlCard />
            <MediaControlCard mt="2" />
            <MediaControlCard mt="2" />
          </Box>
        </div>
      </div>
      <div className="featured" style={{ marginTop: "10px" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "600", ml: 1 }}>
          Featured today
        </Typography>
        <div className="featured-container" style={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            {listFilms.map((item) => {
                return (
                    <CardMedia
                      component="img"
                      height="194"
                      image={item.image}
                      alt="Paella dish"
                      sx={{ width: "130px", objectFit: "cover", ml: 1 }}
                    />
                )
            })}
          </Box>
        </div>
      </div>
      <div className="featured" style={{ marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "600", ml: 1 }}>
          Star of the week
        </Typography>
        <div className="featured-container" style={{ display: "flex" }}>
          <Box sx={{ display: "flex" }}>
            {listFilms.map((item) => {
                return (
                    <CardMedia
                      component="img"
                      height="194"
                      image={item.image}
                      alt="Paella dish"
                      sx={{ width: "130px", objectFit: "cover", ml: 1 }}
                    />
                )
            })}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default News;
