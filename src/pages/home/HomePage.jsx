import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import PocketBase from "pocketbase";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import productcard from "./productcard";
import Productcard from "./productcard";
const HomePage = () => {
  const [loading, setLoading] = useState();
  const [open, setOpen] = useState();
  const [error, setError] = useState();
  const [books, setBooks] = useState([]);

  const pb = new PocketBase("https://restaurant-menu.fly.dev");

  const getBooks = async () => {
    try {
      const resultList = await pb.collection("Batman_products").getList(1, 50, {
        $autoCancel: false,
      });
      setBooks(resultList);
    } catch (e) {
      console.log(e);
      setError(e);
      handleClick();
    }
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Container sx={{ paddingTop: 5 }}>
      {console.log(books)}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />

      <Grid container spacing={2}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          books?.items?.map((batman_products) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={batman_products.id}>
              <Productcard
                {...batman_products}
                img={`https://restaurant-menu.fly.dev/api/files/batman_products/${batman_products.id}/${batman_products.images[0]}`}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default HomePage;
