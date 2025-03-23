import { data } from '../data';
// Componente ProductList que recibe varias propiedades relacionadas con el estado del carrito
export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	// Función que maneja la adición de productos al carrito
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			// Actualizamos el total y la cantidad de productos en el carrito
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}
			// Si el producto no está en el carrito, lo añadimos
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};
	// Mostramos en consola los productos que están en el carrito (para depuración)
	console.log(allProducts);

	return (
		<div className='container-items'>
			{/* Mapea la lista de productos y renderiza cada uno con su imagen, nombre, precio y botón para agregar al carrito */}
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-product'>
						<h2>{product.nameProduct}</h2>
						<p className='price'>${product.price}</p>
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};