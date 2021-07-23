import { useAuth } from './../../providers/auth-context';

const Products = () => {
  const { userData } = useAuth();
  return (
    <main>
      <header>Hello {userData.email}</header>
    </main>
  );
};

export default Products;
