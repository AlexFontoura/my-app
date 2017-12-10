import React from "react";
import CardProducts from "./Components/CardProduct/CardProduct";
import Camisa from "./img/manto.jpg";

var image={
    src: Camisa,
    alt: "Camisa do SP"
};

export default ()=>(
  <CardProducts name="Camisa do São Paulo" price="149,90" image={image} />
);

