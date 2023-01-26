import { useState } from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
	return <h1>{title ? title : "Default title"}</h1>;
}

const HomePage: React.FC = () => {
	const products: Array<string> = ["Laptop", "Fone", "Celular"];

	const [cart, setCart] = useState(0);

	const handleClick = () => {
		setCart(cart + 1);
	}

	return (
		<div>
			<Header title="MKS Sistemas" />
			<ul>
				{products.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Carrinho ({cart})</button>
		</div>
	);
}

export default HomePage;