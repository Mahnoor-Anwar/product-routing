import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import Cards from '../Cards/Cards';
import { ProductData } from "../ProductData";

const Home = () => {
  return (
    <div>
      <h1>Product List</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
        m={3}
      >
        {ProductData.map((e, i) => {
          return (
            <Cards
              id={e.id}
              title={e.title}
              image={e.image}
              desc={e.description}
              sx={{ marginBottom: "20px" }}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Home;
