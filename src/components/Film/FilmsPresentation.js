import './FilmsPresentation.scss'
import Button from "@mui/material/Button";


export default function FilmsPresentation({ listFilms, handleOpen }) {

  return (
    <div className="list-items">
      {
        listFilms.map((film, index) => (
          <div 
            className="item" 
            key={`film-item-${index}`}
            onClick={() => handleOpen(film)}
          >
            <div className="item__detail">
              <img src={film.image} className='item__image'/>
              {/* <div className="item__desc">
                  <h3 className='item-desc__title'>{film.Title}</h3>
              </div> */}
            </div>
          </div>
        ))
      }
    </div>
  );
}
