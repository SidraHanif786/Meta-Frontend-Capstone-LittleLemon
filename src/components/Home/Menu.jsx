import React from "react";
import bolognese from "../../images/bolognese.jpeg";
import bruchetta from "../../images/bruchetta.jpeg";
import cheese from "../../images/cheese.jpg";
import salad from "../../images/greeksalad.jpg";
import lasagna from "../../images/lasagna.png";
import dessert from "../../images/lemondessert.jpg";
import Container from "../common/Container";
import Button from "../common/Button";
import Card from "../common/Card";

const Menu = () => {
  const menu = [
    {
      img: bolognese,
      name: "Bolognese",
      price: "$20.55",
      des: "Savory meat sauce simmered with aromatic herbs and vegetables, served over al dente pasta for a comforting and classic Italian dish.",
    },
    {
      img: bruchetta,
      name: "Bruschetta",
      price: "$15.49",
      des: "Toasted baguette slices topped with fresh diced tomatoes, basil, garlic, and drizzled with extra virgin olive oil, offering a delightful burst of flavors and textures.",
    },
    {
      img: cheese,
      name: "Cheese",
      price: "$20.00",
      des: "A delectable assortment of artisanal cheeses, carefully selected for their distinct flavors and textures, perfect for indulging in a delightful cheese tasting experience.",
    },
    {
      img: salad,
      name: "Greek Salad",
      price: "$12.40",
      des: "A refreshing medley of crisp lettuce, juicy tomatoes, cucumbers, tangy Kalamata olives, and creamy feta cheese, dressed with zesty lemon vinaigrette, capturing the essence of Mediterranean flavors.",
    },
    {
      img: lasagna,
      name: "Lasagna",
      price: "$22.23",
      des: "Layers of tender pasta sheets, rich Bolognese sauce, creamy béchamel, and a blend of cheeses, baked to perfection for a hearty and satisfying Italian comfort food.",
    },
    {
      img: dessert,
      name: "Lemon Dessert",
      price: "$4.25",
      des: "A luscious lemon-infused dessert featuring a delicate balance of sweet and tangy flavors, complemented by a buttery crust or velvety mousse, providing a refreshing and zesty finale to any meal.",
    },
  ];
  return (
    <>
      <Container className={"mt-[40px]"}>
        <div className="flex justify-between mb-[20px] ">
          <h1 className="font-bold font-markazi text-[27px] ">Specials</h1>
          <Button
            name={"Online Menu"}
            className={
              "bg-black hover:bg-yellow text-t-white hover:text-black "
            }
          />
        </div>
        <div className="flex flex-wrap gap-[20px] sm: justify-center md:gap-[10%] lg:gap-0 lg:justify-between ">
          {menu.map((item) => (
            <Card
              key={item.name}
              img={item.img}
              name={item.name}
              price={item.price}
              des={item.des}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Menu;
