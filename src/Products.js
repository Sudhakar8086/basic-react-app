import React from 'react';
import Product from './Product';
import phone from './images/iphone_pro.jpg';

const ProductsList = [
  {
    name: 'Mobile Phone',
    image: { phone },
    price: '70000',
    description: 'Newly Launched IPhones available at your local store',
    quantity: 12,
  },
  {
    name: 'Mobile Phone',
    image: { phone },
    price: '70000',
    description: 'Newly Launched IPhones available at your local store',
    quantity: 12,
  },
  {
    name: 'Mobile Phone',
    image: { phone },
    price: '70000',
    description: 'Newly Launched IPhones available at your local store',
    quantity: 12,
  },
  {
    name: 'Mobile Phone',
    image: { phone },
    price: '70000',
    description: 'Newly Launched IPhones available at your local store',
    quantity: 12,
  },
  {
    name: 'Mobile Phone',
    image: { phone },
    price: '70000',
    description: 'Newly Launched IPhones available at your local store',
    quantity: 12,
  },
  {
    name: 'Mobile Phone',
    image: { phone },
    price: '70000',
    description: 'Newly Launched IPhones available at your local store',
    quantity: 12,
  },
];
const Products = () => {
  return (
    <div className='main'>
      <ul>
        {ProductsList.map((product, key) => (
          <li key={key}>
            <Product
              id={key}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
