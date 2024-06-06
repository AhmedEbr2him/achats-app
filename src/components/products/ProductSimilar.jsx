import { products } from "../../data/data";
import { Section } from "../../style/style";
import Title from "../common/Title";
import ProductsList from "./ProductsList";

const ProductSimilar = () => {
	return (
		<div>
			<Section>
				<Title titleText={"Similar Products"} />
				<ProductsList products={products.slice(0, 4)} />
			</Section>
		</div>
	);
};

export default ProductSimilar;
