import React, { useState } from "react";
import CustomButton from "../Button";
import {
  Grid,
  Typography,
  Box,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
const GridStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  margin: "10px",
  height: '40px',
}));

const Header = () => {
  const [language, setlanguage] = useState("");
  const handleChange = (event) => {
    setlanguage(event.target.value);
  };
  return (
    <Grid container position="static">
      <GridStyle>
        <Typography variant="h6" color="primary">
          Afghan Turest
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            width: "70%",
          }}
        >
          <FormControl
            sx={{ minWidth: 120, mr: "2%" }}
            size="small"
            color="secondary"
          >
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              id="demo-simple-select"
              value={language}
              onChange={handleChange}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"دری"}>دری</MenuItem>
              <MenuItem value={"پشتو"}>پشتو</MenuItem>
            </Select>
          </FormControl>
          <CustomButton title="Login" variant="outlined" color="secondary" />
        </Box>
      </GridStyle>
    </Grid>
  );
};

export default Header;
