import { Container, Grid, Snackbar } from "@mui/material";
import { Container, Grid, Snackbar } from "@mui/material";
import { Container, Grid, Snackbar } from "@mui/material";
import { Container, Grid, Snackbar } from "@mui/material";
import { Container, Grid, Snackbar } from "@mui/material";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import React from "react";
import BookCard from "./BookCard";
import BookCard from "./BookCard";
import BookCard from "./BookCard";
import BookCard from "./BookCard";
import BookCard from "./BookCard";


return (
    <Container>
        {console.log(batman_products)}
        <h1>Меню</h1>
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="Note archived"
            action={action} />

        <Grid container spacing={2}>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                batman_products?.items?.map((batman_product) => (
                    <Grid key={book.id} item xs={6} sm={4} md={4} lg={3}>
                        <BookCard
                            id={batman_product.id}
                            title={batman_product.title}
                            img={`https://restaurant-menu.fly.dev/api/files/batman_products/${batman_products.id}/${batman_products.img}`} />
                    </Grid>
                ))
            )}
        </Grid>
    </Container>
);
