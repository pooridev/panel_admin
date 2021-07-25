import BrandName from '../BrandName';
import Category from '../Category';
import Colors from '../Colors';
import Price from '../Price';
import Quantity from '../Quantity';
import Rating from '../Rating';
import Name from './../Name/index';

const Content = ({ category, name, rating, price, quantity, brandName }) => (
  <div className='flex-auto justify-evenly'>
    <div className='flex items-start flex-wrap gap-y-2 justify-between'>
      <Rating rating={rating} />
      <div className='flex items-center flex-wrap w-full justify-between'>
        <Name name={name} />
        <Category category={category} />
      </div>
      <BrandName brandName={brandName} />
      <Quantity quantity={quantity} />
    </div>
    <Colors />
    <div className='flex space-x-2 text-sm font-medium justify-between'>
      <button className='transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-indigo-600 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-indigo-700 '>
        <span>Add Cart</span>
      </button>
      <Price price={price} />
    </div>
  </div>
);

export default Content;
