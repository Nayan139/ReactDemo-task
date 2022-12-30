import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box sx={{ margin: "20px", display: "flex", justifyContent: "center" }}>
        <Box sx={{ marginRight: "20px" }}>
          <Button variant="outlined" onClick={() => navigate("/movie/list")}>
            Movie Listing
          </Button>
        </Box>

        <Button variant="outlined" onClick={() => navigate("/add/user")}>
          Add User
        </Button>
      </Box>
    </Container>
  );
};
