import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import 'animate.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "#141414",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalCase(props) {
  const { open, handleClose, video } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ background: "#141414" }}
      className='animate__animated animate__slideInDown'
    >
      <Box sx={style}>
        <iframe
          width="960"
          height="615"
          src={video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
    </Modal>
  );
}

export default ModalCase;
