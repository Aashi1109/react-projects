import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { v4 as uuidv4 } from "uuid";
const DUMMY_ITEMS = [
    {
      id: uuidv4(),
      name: "Test",
      price: 6,
      description: "This is a first product - amazing",
    },
    {
      id: uuidv4(),
      name: "Amazing",
      price: 16,
      description: "This is a product far more better",
    },
    {
      id: uuidv4(),
      name: "Ultra Pro max",
      price: 23,
      description: "This is product which is best of best",
    },
  ];

const Products = (props) => {
  
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
