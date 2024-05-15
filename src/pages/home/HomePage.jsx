import { Box, Container, Grid, Typography } from "@mui/material";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import Productcard from "./productcard";

const HomePage = () => {
  const [loading, setLoading] = useState();
  const [foods, setFoods] = useState([]);
  const pb = new PocketBase("https://restaurant-menu.fly.dev");

  const getBooks = async () => {
    try {
      const resultList = await pb.collection("Batman_products").getList(1, 50, {
        $autoCancel: false,
        expand: "category",
      });
      const groupedItems = {};

      resultList.items.forEach((item) => {
        const categoryName = item.expand.category.title;
        if (!groupedItems[categoryName]) {
          groupedItems[categoryName] = [];
        }
        groupedItems[categoryName].push(item);
      });

      setFoods(groupedItems);
      setLoading(false);
      console.log(groupedItems);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Container sx={{ paddingTop: 5 }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        Object.keys(foods).map((key) => (
          <Box key={key}>
            <Typography fontWeight="700" variant="h5">
              {key}
            </Typography>
            <Grid container spacing={2}>
              {foods[key]?.map((item) => (
                <Grid key={item.id} item xs={6} sm={6} md={4} lg={3}>
                  <Productcard
                    {...item}
                    img={`https://restaurant-menu.fly.dev/api/files/batman_products/${item.id}/${item.images[0]}`}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Container>
  );
};

export default HomePage;
