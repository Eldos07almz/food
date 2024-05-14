import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { ButtonBase, Grid, Paper } from '@mui/material';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const  Productcard = ({ title, img, id,description,price }) => {
  const navigate = useNavigate();

  const navigateToBook = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Paper className="talda"
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 400,
      mt: 2,
      ml: 2,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128, padding: 0 }}>
          <Img src={img} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Button sx={{ cursor: 'pointer' }} variant="outlined">
              +
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="div">
            {price}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
  );
};

export default Productcard;
