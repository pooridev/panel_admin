const Colors = () => (
  <div className='lg:flex  py-4  text-sm text-gray-600'>
    <div className='flex-1 inline-flex items-center  mb-3'>
      <div className='w-full flex-none text-sm flex items-center text-gray-600'>
        <ul className='flex flex-row justify-center items-center space-x-2'>
          <li>
            <span className='block p-1 border-2 border-gray-50 hover:border-blue-600 rounded-full transition ease-in duration-300'>
              <span className='block w-3 h-3 bg-blue-600 rounded-full'></span>
            </span>
          </li>
          <li>
            <span className='block p-1 border-2 border-gray-50 hover:border-yellow-400 rounded-full transition ease-in duration-300'>
              <span className='block w-3 h-3  bg-yellow-400 rounded-full'></span>
            </span>
          </li>
          <li>
            <span className='block p-1 border-2 border-gray-50 hover:border-red-500 rounded-full transition ease-in duration-300'>
              <span className='block w-3 h-3  bg-red-500 rounded-full'></span>
            </span>
          </li>
          <li>
            <span className='block p-1 border-2 border-gray-50 hover:border-green-500 rounded-full transition ease-in duration-300'>
              <span className='block w-3 h-3  bg-green-500 rounded-full'></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Colors;
