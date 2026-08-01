import { useState } from 'react';
import Cart from '@/components/Cart.jsx';
import Header from '@/components/Header.jsx';
import ProductList from '@/components/ProductList.jsx';

export default function App() {
  const [page, setPage] = useState('shop');

  return (
    <main className="container">
      <Header page={page} setPage={setPage} />
      {page === 'shop' ? <ProductList /> : <Cart />}
    </main>
  );
}
