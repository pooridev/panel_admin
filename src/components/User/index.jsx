const User = ({ fName, lName, email, avatar }) => (
  <article className='bg-gray-50 mx-auto w-full rounded-xl shadow-md'>
    <div className='flex align-items-center p-2'>
      <img
        className='rounded-full h-12 w-12  object-cover'
        src={avatar}
        alt={`${fName} ${lName}`}
      />
      <div className='ml-3'>
        <div className='text-gray-800 font-medium'>{`${fName} ${lName}`}</div>
        <div className='text-gray-800 text-base'>{email}</div>
      </div>
    </div>
  </article>
);

export default User;
