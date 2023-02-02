import { NextPage } from "next";
import { GlobalStyle } from "../public/globalStyle";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, selectValue } from "../slices/counterSlice";
import { apiURL } from "../api";
import Product from "../components/product";
import Header from "../components/header";

const HomePage: NextPage = () => {
	const page: number = 1
	const rows: number = 5
	const sortBy: string = "name"
	const orderBy: string = "DESC"

	const [data, setData] = useState<Array<any>>([])

	useEffect(() => {
		fetch(`${apiURL}/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`)
			.then(response => response.json())
			.then(data => setData(data.products));
	}, [])

	const count = useSelector(selectValue);
	const dispatch = useDispatch();

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
