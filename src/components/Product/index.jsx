import { useEffect, useRef } from 'react';
import Content from './content/inde';
import styles from './Product.module.css';

const Product = ({ product }) => {
  const checkboxRef = useRef(null);

  const switchLikeHandler = async productId => {
    try {
      await fetch(`/products/${productId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    product.isLiked && (checkboxRef.current.checked = true);
  }, [product.isLiked]);

  return (
    <article className='relative flex flex-col items-center justify-center '>
      <div className='max-w-xs w-full bg-gray-50 shadow-lg rounded-xl p-6'>
        <div className='flex flex-col '>
          <div className='relative h-62 w-full mb-3'>
            <div className='absolute flex flex-col top-0 right-0 p-3'>
              <input
                ref={checkboxRef}
                onChange={() => switchLikeHandler(product.id)}
                type='checkbox'
                className={styles.HeartCheckbox}
              />
            </div>
            <img
              src={product.image}
              alt='Just a flower'
              className=' w-full object-cover rounded-2xl'
            />
          </div>
          <Content
            category={product.category}
            name={product.name}
            price={product.price}
            rating={product.rating}
            quantity={product.quantity}
            brandName={product.brandName}
          />
        </div>
      </div>
    </article>
  );
};

export default Product;
