import styled from "styled-components";
import { Container, Section, TitleWrapper } from "../../style/style";
import { brandsData } from "../../data/data";
import { breakpoints, defaultTheme } from "../../style/themes/default";

const StyledSectionWrapper = styled(TitleWrapper)`
	padding-left: 0;
	&::after {
		display: none;
	}

	@media only screen and (max-width: ${breakpoints.sm}) {
		margin-bottom: 20px;
	}
`;

const BrandContent = styled.div`
	border-radius: 12px;
	padding-block: 40px;

	@media only screen and (max-width: ${breakpoints.sm}) {
		padding-block: 24px;
	}
`;

const BrandListWrapper = styled.div`
	padding: 12px;
	margin-top: 40px;
	gap: 24px;

	@media only screen and (max-width: ${breakpoints.sm}) {
		gap: 12px;
		margin-top: 20px;
	}
`;

const BrandItemWrapper = styled.div`
	width: 178px;
	height: 80px;
	border-radius: 12px;
	background-color: ${defaultTheme.color_white};
	padding: 16px;

	img {
		width: max-content;
	}

	@media only screen and (max-width: ${breakpoints.sm}) {
		width: 120px;
		border-radius: 8px;
	}
	@media only screen and (max-width: ${breakpoints.xs}) {
		width: 80px;
		height: 50px;
		border-radius: 4px;
	}
`;

const Brands = () => {
	return (
		<Section>
			<Container>
				<BrandContent className="bg-outerspace">
					<StyledSectionWrapper className="text-white text-center justify-center flex-col">
						<h3>Top Brands Deal.</h3>
						<p className="text-xxl text-white">
							Up to <span className="text-yellow">60%</span> off on brands.
						</p>
					</StyledSectionWrapper>

					<BrandListWrapper className="flex items-center flex-wrap justify-center">
						{brandsData?.map((brand) => {
							return (
								<BrandItemWrapper
									className="flex items-center justify-center"
									key={brand.id}>
									<img src={brand.imgSource} alt={brand.name} />
								</BrandItemWrapper>
							);
						})}
					</BrandListWrapper>
				</BrandContent>
			</Container>
		</Section>
	);
};

export default Brands;
