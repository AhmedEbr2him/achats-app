import { Container, Section } from "../../style/style";
import Title from "../common/Title";
import ProductsList from "../products/ProductsList";
import PropTypes from "prop-types";

const Cataloge = ({ catalogeTitle, products }) => {
	return (
		<Section>
			<Container>
				<div className="cataloge-content">
					<Title titleText={catalogeTitle} />
					<ProductsList products={products} />
				</div>
			</Container>
		</Section>
	);
};

Cataloge.propType = {
	catalogeTitle: PropTypes.string,
	products: PropTypes.array,
};

export default Cataloge;
