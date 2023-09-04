import React from "react";
import Cards from "../layout/Cards";
import { Typography } from "@mui/material";

const data = [
  {
    title: "ghor",
    description: "something",
    address: "ghor",
    url: "https://www.malgari.com/upload/photos/2022/07/25Xl1sxZwFhuk6X7xdl8_31_c4839dff847e2887e3c0058cf3d34888_image.jpg",
  },
  {
    title: "kabul",
    description: "something",
    address: "kabul",
    url: "https://peakvisor.com/photo/Kabul-Afghanistan-Sakhi-Shrine.jpg",
  },
  {
    title: "Kandahar",
    description: "something",
    address: "kabul",
    url: "https://peakvisor.com/photo/Kabul-Afghanistan-Sakhi-Shrine.jpg",
  },
];

const HistoricalPlaces = () => {
  return <Cards data={data} category='Historical Places' />;
};

export default HistoricalPlaces;
