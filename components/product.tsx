import { NextPage } from "next";

interface Props {
    item: {

        id: number;
        name: string;
        brand: string;
        description: string;
        photo: string;
        price: string;
        createdAt: string;
        updatedAt: string;
    }
}


const HomePage: NextPage<Props> = ({ item }) => {
	return (
		<div>
			<h1>{item.name} {item.brand}</h1>
            <h2>{item.description}</h2>
            <img src={item.photo} alt={item.name} />
            <p>{item.price}</p>
		</div>
	);
}

export default HomePage;
