import { Grid, List, ListItem } from "@mui/material";
import React from "react";

const provinces = [
  "Herat",
  "Kabul",
  "M.Sharif",
  "Nangarhar",
  "Khoust",
  "Ghazni",
  "Farah",
  "Panjshir",
  "Parwan",
  "Tekhar",
  "Badekhshan",
  "Ghor",
  "Sarpull",
  "Paktiya",
  "Paktika",
  "Jousjan",
  "Kapisa",
  "Helmand",
  "Bahdqis",
];

const LeftSidebar = () => {
  return (
    <Grid>
      <List>
        {provinces.map((province, index) => (
          <ListItem
          key={index}
            sx={{
              mt: "1px",
              borderRadius: "10px",
              color: "text.secondary",
              fontSize: "20px",
            }}
          >
            {province}
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default LeftSidebar;
