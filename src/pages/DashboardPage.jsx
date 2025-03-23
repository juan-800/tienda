import { Header } from "../components/Header";
import { ProductList } from "../components/ProductListTemp";
import { useState } from "react";
//  Página principal que gestiona el estado del carrito y la lista de productos
export const DashboardPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [countProducts, setCountProducts] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
    {/* Componente Header que muestra información del carrito */}
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />
      {/* Componente ProductList que muestra la lista de productos disponibles */}
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        total={total}
        setTotal={setTotal}
      />
    </>
  );
};


