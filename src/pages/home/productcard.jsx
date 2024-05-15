import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CardActionArea, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Productcard = ({ title, img, id, description, price, active }) => {
  const navigate = useNavigate();

  const navigateToFood = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Card elevation={0} sx={{ borderRadius: "20px" }}>
      <CardActionArea onClick={navigateToFood}>
        <CardMedia
          sx={{ borderRadius: "20px" }}
          component="img"
          height="200"
          image={img}
        ></CardMedia>
        <CardContent>
          <Typography fontWeight="700" textAlign="start" variant="h6">
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {active ? (
              <Typography variant="body1">{price} сом</Typography>
            ) : (
              <Typography variant="body1">нет в наличии</Typography>
            )}
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <StarIcon color="red"></StarIcon>
              <Typography variant="body1">4.7</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>

    //   <Paper className="talda"
    //   sx={{
    //     p: 2,
    //     margin: 'auto',
    //     maxWidth: 400,
    //     mt: 2,
    //     ml: 2,
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //   }}
    // >
    //   <Grid container spacing={2}>
    //     <Grid item>
    //       <ButtonBase sx={{ width: 128, height: 128, padding: 0 }}>
    //         <Img src={img} />
    //       </ButtonBase>
    //     </Grid>
    //     <Grid item xs={12} sm container>
    //       <Grid item xs container direction="column" spacing={2}>
    //         <Grid item xs>
    //           <Typography gutterBottom variant="subtitle1" component="div">
    //             {title}
    //           </Typography>
    //         </Grid>
    //         <Grid item>
    //           <Button sx={{ cursor: 'pointer' }} variant="outlined">
    //             +
    //           </Button>
    //         </Grid>
    //       </Grid>
    //       <Grid item>
    //         <Typography variant="subtitle1" component="div">
    //           {price}
    //         </Typography>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Paper>
  );
};

export default Productcard;
