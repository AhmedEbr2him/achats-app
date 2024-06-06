import styled from "styled-components";
import { products } from "../../data/data";
import ProductItem from "./ProductItem";
import PropTypes from "prop-types";
import { breakpoints } from "../../style/themes/default";

const ProductListWrapper = styled.div`
	column-gap: 20px;
	row-gap: 40px;
	grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

	@media only screen and (max-width: ${breakpoints.sm}) {
		gap: 12px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
`;

const ProductsList = () => {
	return (
		<ProductListWrapper className="grid">
			{products?.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</ProductListWrapper>
	);
};

ProductsList.propTypes = {
	products: PropTypes.array,
};
export default ProductsList;
