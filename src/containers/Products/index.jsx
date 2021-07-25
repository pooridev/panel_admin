import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Product from './../../components/Product';
import styles from './Products.module.css';
import Header from './Header';

const Products = () => {
  const [fetchedProducts, setFetchedProducts] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/products');
      const data = await res.json();
      setFetchedProducts(data.products || data.product.products);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => fetchProducts(), []);

  let products = null;
  if (fetchedProducts) {
    products = fetchedProducts.map(product => (
      <Product key={product.id} product={product} />
    ));
  }

  // Will redirect user to the login page if he/she was not logged in
  const loggedInUser = localStorage.getItem('user');
  if (!loggedInUser) return <Redirect to='/login' />;

  return (
    <div className='max-w-screen-2xl mx-auto px-4 sm:px-6'>
      <Header />
      <main className={styles.Products}>{products}</main>
    </div>
  );
};

export default Products;
