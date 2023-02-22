import { useState } from "react";

import FilmsPresentation from "./FilmsPresentation";
import listFilms from "../../shared/ListOfFilms";
import "./Films.scss";

// modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// card media
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const styleCartMedia = {
  height: 540,
  border: '1px solid #fff',
  borderRadius: '8px'
}

function Films() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filmDetail, setFilmDetail] = useState({});

  const hanleShowModal = (film) => {
    handleOpen();
    setFilmDetail(film);
    console.log('check film :', film);
  }

  return (
    <>
      <FilmsPresentation listFilms={listFilms} handleOpen={hanleShowModal} />
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <CardMedia
              sx={styleCartMedia}
              image={filmDetail.image}
              title="film image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {filmDetail.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Modal>
      </div>
    </>
  );
}

export default Films;
