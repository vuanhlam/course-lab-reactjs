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
import "animate.css";
import { useNavigate } from "react-router-dom";

const styleCartMedia = {
  height: 540,
  border: "1px solid #fff",
  borderRadius: "8px",
};

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

function ModalCard(props) {
  const { open, handleClose, filmDetail } = props;
  const navigate = useNavigate();

  return (
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
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center', fontWeight: '600'}}>
            {filmDetail.Title}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <div
            className="animate__animated animate__slideInLeft navigate"
            style={{
              fontSize: "19px",
              fontWeight: "500",
              color: "#736EFE",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/detail/${filmDetail.id}`)}
          >
            More Detail &gt;&gt;&gt;&gt;
          </div>
        </CardActions>
      </Card>
    </Modal>
  );
}

export default ModalCard;
