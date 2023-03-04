import React, { useEffect, useState } from "react";
import listFilms from "../../../shared/ListOfFilms";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import ModalCase from "./ModalCase";

import 'animate.css';

function Detail() {
  const { id } = useParams();
  const [film, setFilm] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  useEffect(() => {
    const result = listFilms.find((item) => item.id === +id);
    if (result) {
      setFilm(result);
    }
  }, []);

  return (
    <>
      <div className="detail">
        <div className="detail__background animate__animated animate__slideInLeft">
            <img src={film.background}/>
        </div>
        <div className="detail__content animate__animated animate__slideInRight">
            <div className="content__image">
                <img src={film.image}/>
            </div>
            <div className="content__desc">
                <h1 className="desc__title">
                    {film.Title}
                </h1>
                <div className="lis" style={{display: 'flex', gap: '10px', margin: '15px 0'}}>
                    <Button sx={{borderRadius: '15px'}} variant="outlined">Action</Button>
                    <Button sx={{borderRadius: '15px'}} variant="outlined">Adventure</Button>
                    <Button sx={{borderRadius: '15px'}} variant="outlined">Fantacy</Button>
                </div>
                <div className="desc__date">
                    <span>Year</span><span style={{fontWeight: '300'}}>{film.Year}</span>
                </div>
                <div className="desc__date">
                    <span>Nation</span><span style={{fontWeight: '300'}}>{film.Nation}</span>
                </div>
                <div 
                    className="watch"
                    onClick={handleOpen}
                >
                    <Icon baseClassName="fas" className="fa-duotone fa-play" color="primary"/>
                    {/* <Icon baseClassName="fas" className="fa-solid fa-pause" color="primary"/> */}
                    <h4 style={{color: '#ffff'}}>WATCH</h4>
                </div>
            </div>
        </div>
      </div>
      <ModalCase
        open={open}
        handleClose={handleClose}
        video={film.video}
      />
    </>
  );
}

export default Detail;
