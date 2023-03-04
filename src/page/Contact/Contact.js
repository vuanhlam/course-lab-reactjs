import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useEffect } from "react";
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import "./Contact.scss";
import listFilms from "../../shared/ListOfFilms";
import { useRef } from "react";

function Contact() {

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

  const films = listFilms.map((film) => {
    return {
        value: film.Title,
        label: film.Title
    }
  })

  return (
    <Box className="contact">
      <form className="contact-form">
        <Typography variant="h5">Contact Us</Typography>
        <div className="contact-form__group">
          <TextField
            id="standard-basic"
            label="Your Name"
            variant="standard"
            sx={{ width: "80%" }}
          />
        </div>
        <div className="contact-form__group">
          <TextField
            id="standard-basic"
            label="Your Phone"
            variant="standard"
            sx={{ width: "80%" }}
          />
        </div>
        <div className="contact-form__group">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            sx={{ width: "80%" }}
          />
        </div>
        <div className="contact-form__group">
          <TextField
            id="standard-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your favorite film"
            variant="standard"
          >
            {films.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} 
              </option>
            ))}
          </TextField>
        </div>

        <div className="contact-form__group">
          <Icon baseClassName="fas" className="fa-solid fa-pen contact-form__group-icon" color="primary" sx={{left: '40px', top: "17px"}}/>
          <TextField
            id="filled-multiline-flexible"
            label="Your Content"
            multiline
            maxRows={4}
            variant="filled"
            sx={{ width: "80%", position: 'relative' }}
          />
        </div>
        <Button  variant="contained">Submit</Button>
      </form>
    </Box>
  );
}

export default Contact;
