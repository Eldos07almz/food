import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Tabs,
  Chip,
} from "@mui/material";
import PocketBase from "pocketbase";
import { useEffect, useState, useRef } from "react";
import Productcard from "./productcard";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const pb = new PocketBase("https://restaurant-menu.fly.dev");

  const scrollRef = useRef(null);

  const handleChipClick = (categoryName) => {
    const categoryElement = document.getElementById(categoryName);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <CircularProgress color="inherit" />
      ) : (
        <Box>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              width: { xs: 360, sm: 600, md: 1200 },
              paddingTop: "10px",
              position: "sticky",
              top: 0,
              zIndex: 1,
              backgroundColor: "white",
            }}
          >
            {Object.keys(foods).map((k) => (
              <Chip
                sx={{ marginRight: "4px" }}
                key={k}
                label={k}
                onClick={() => handleChipClick(k)}
              />
            ))}
          </Tabs>

          {Object.keys(foods).map((key) => (
            <Box key={key}>
              <Typography
                ref={scrollRef}
                id={key}
                fontWeight="700"
                variant="h5"
                textAlign="start"
                sx={{ paddingTop: "60px", marginTop: "-60px" }}
              >
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
          ))}
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
