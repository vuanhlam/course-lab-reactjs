import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function MediaControlCard(props) {
  const theme = useTheme();

  return (  
    <Card sx={{ display: "flex", height: '150px', mt: +props.mt }}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit: "cover" }}
        image="https://m.media-amazon.com/images/M/MV5BNzAwNmVjNGQtYWVlNy00YTljLWExZjgtZWVkZmQyYjYxMzFkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._CR10,77,1563,879_QL75_UY563_CR0,0,1000,563_.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38, border: '1px solid grey', borderRadius: '999px' }} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
