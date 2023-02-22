import './Navigation.scss'
import CardMedia from '@mui/material/CardMedia';
 
function Navigation() {
  return (
    <div className="header">
      <nav className='navbar'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <CardMedia
                component="img"
                image="/path/to/image.jpg"
                alt="Logo image"
            />
          </li>
          <li className='navbar__item'>
            <a href="/" className='navbar__link'>
              Home
            </a>
          </li>
          <li className='navbar__item'>
            <a href="#news" className='navbar__link'>TV Shows</a>
          </li>
          <li className='navbar__item'>
            <a href="#about" className='navbar__link'>Movies</a>
          </li>
          <li className='navbar__item'>
            <a href="#contact" className='navbar__link'>Contact</a>
          </li>
        </ul>
        <div className='navbar__option'>
          <input type="checkbox" id="dark-mode"/>
          <label for="dark-mode"></label>
          {/* <div class="background"></div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
