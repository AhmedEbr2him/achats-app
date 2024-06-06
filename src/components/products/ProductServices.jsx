import styled from "styled-components";
import { servicesData } from "../../data/data";
import { breakpoints, defaultTheme } from "../../style/themes/default";

const ProductServicesWrapper = styled.div`
	margin-top: 40px;
	border-top: 1px solid ${defaultTheme.color_silver};
	padding-top: 40px;

	@media only screen and (max-width: ${breakpoints.sm}) {
		margin-top: 32px;
		padding-top: 24px;
	}
	.product-services-list {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;

		@media only screen and (max-width: ${breakpoints.sm}) {
			gap: 12px;
		}
		@media only screen and (max-width: ${breakpoints.xs}) {
			grid-template-columns: 100%;
		}
	}

	.product-service-item {
		column-gap: 12px;

		&-icon {
			background: ${defaultTheme.color_flash_white};
			border-radius: 50%;
			width: 44px;
			height: 44px;
			flex-basis: 44px;

			@media only screen and (max-width: ${breakpoints.sm}) {
				width: 32px;
				height: 32px;
				flex-basis: 32;
			}
		}
	}
`;

const ProductServices = () => {
	return (
		<ProductServicesWrapper>
			<div className="product-services-list grid">
				{servicesData?.map((service) => {
					return (
						<div className="product-service-item flex items-center" key={service.id}>
							<span className="product-service-item-icon flex items-center justify-center">
								<img src={service.icon} alt="Service Icon" />
							</span>

							<span className="product-service-item-text font-medium text-outerspace text-lg">
								{service.text}
							</span>
						</div>
					);
				})}
			</div>
		</ProductServicesWrapper>
	);
};

export default ProductServices;
