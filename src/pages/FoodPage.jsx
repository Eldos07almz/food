import {
  Container,
  CircularProgress,
  Box,
  Typography,
  CardMedia,
} from "@mui/material";
import { useParams } from "react-router-dom";

import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

const FoodPage = () => {
  const param = useParams();
  const [loading, setLoading] = useState(true);
  const [food, setFoods] = useState([]);

  const pb = new PocketBase("https://restaurant-menu.fly.dev");

  const getFood = async () => {
    const result = await pb.collection("Batman_products").getOne(param.id, {
      $autoCancel: false,
      expand: "category",
    });
    setFoods(result);
    setLoading(false);
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <Container>
      {!loading ? (
        <Box>
          <CardMedia
            component="img"
            height="400"
            width="100%"
            image={`https://restaurant-menu.fly.dev/api/files/Batman_products/${food.id}/${food.images[0]}`}
          />
          <Typography variant="h1">{food.title}</Typography>
          <Typography variant="h4">
            {food.active ? food.price : "нет в наличии"}
          </Typography>
          <Typography variant="h2">{food.expand.category.title}</Typography>
          <Typography variant="body1">{food.description}</Typography>
        </Box>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </Container>
  );
};

export default FoodPage;
