import { NextPage } from "next";
import { GlobalStyle } from "../public/globalStyle";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectValue } from "../store/reducers/counterSlice";
import { apiURL } from "../api";
import Product from "../components/product";
import Header from "../components/header";
import React from "react";
import { fetchProducts, selectProduct } from "../store/reducers/productsSlice";

const HomePage: NextPage = () => {
	const page: number = 1
	const rows: number = 5
	const sortBy: string = "name"
	const orderBy: string = "DESC"

	const dispatch = useDispatch();

	const count = useSelector(selectValue);
	const data = useSelector(selectProduct);

	useEffect(() => {
		fetch(`${apiURL}/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)
			.then(response => response.json())
			.then(a => dispatch(fetchProducts(a.products)))
	}, []);

	const handleClick = () => dispatch(increment())

	return (
		<div>
			<GlobalStyle />
			<Header title="MKS" subtitle="Sistemas" count={count}/>

			<div>
				{data.map((item) => (
					<Product item={item} />
				))}
			</div>

			<button onClick={handleClick}>Carrinho ({count})</button>
		</div>
	);
}

export default HomePage;
