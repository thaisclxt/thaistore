import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { apiURL } from "../api";
import Product from "../components/product";
import { increment, selectValue } from "../slices/counterSlice";

interface Props {
  title: string;
}

const Header: NextPage<Props> = ({ title }) => {
	return <h1>{title ? title : "Default title"}</h1>;
}

const HomePage: NextPage = () => {
	const page: Number = 1
	const rows: Number = 5
	const sortBy: String = "name"
	const orderBy: String = "DESC"

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
			<Header title="MKS Sistemas" />

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
