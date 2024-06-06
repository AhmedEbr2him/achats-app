import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { commonCardStyles } from "../../style/card";
import { breakpoints, defaultTheme } from "../../style/themes/default";

const ProductCardWrapper = styled(Link)`
	${commonCardStyles};
	@media only screen and (max-width: ${breakpoints.sm}) {
		padding-inline: 0;
	}

	.product-img {
		height: 393px;
		position: relative;

		@media only screen and (max-width: ${breakpoints.sm}) {
			height: 320px;
		}

		.product-wishlist-icon {
			position: absolute;
			top: 16px;
			right: 16px;
			width: 32px;
			height: 32px;
			font-size: 15px;
			border-radius: 100%;

			&:hover {
				background-color: ${defaultTheme.color_yellow};
				color: ${defaultTheme.color_white};
			}
		}
	}
`;
const ProductItem = ({ product }) => {
	return (
		<ProductCardWrapper key={product.id} to="/product/details">
			<div className="product-img">
				<img src={product.imgSource} alt={product.title} className="object-fit-cover" />

				<button
					type="button"
					className="product-wishlist-icon flex items-center justify-center bg-white"
					title="Add to favorite">
					<i className="bi bi-heart"></i>
				</button>
			</div>

			<div className="product-info">
				<p className="font-bold">{product.title}</p>

				<div className="flex items-center justify-between text-sm font-medium">
					<span className="text-gray">{product.brand}</span>
					<span className="text-outerspace font-bold">{product.price}$</span>
				</div>
			</div>
		</ProductCardWrapper>
	);
};

ProductItem.propTypes = {
	product: PropTypes.object,
};
export default ProductItem;
