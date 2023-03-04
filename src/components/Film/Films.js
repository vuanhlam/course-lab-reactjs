import { useState } from "react";

import FilmsPresentation from "./FilmsPresentation";
import listFilms from "../../shared/ListOfFilms";
import "./Films.scss";

import Modal from './Modal'



function Films() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filmDetail, setFilmDetail] = useState({});

  const hanleShowModal = (film) => {
    handleOpen();
    setFilmDetail(film);
    console.log("check film :", film);
  };

  return (
    <>
      <FilmsPresentation listFilms={listFilms} handleOpen={hanleShowModal} />
      <div>
        <Modal 
          open={open}
          handleClose={handleClose}
          filmDetail={filmDetail}
        />
      </div>
    </>
  );
}

export default Films;
