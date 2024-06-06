import styled from "styled-components";
import { Container, Section, TitleWrapper } from "../../style/style";
import Title from "../common/Title";
import Slider from "react-slick";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
import { newArrivalData } from "../../data/data";
import { commonCardStyles } from "../../style/card";
import { breakpoints } from "../../style/themes/default";

const ProductCardBoxWrapper = styled.div`
	${commonCardStyles},
	.product-img {
		height: 262px;
		width: 262px;
	}
	@media only screen and (max-width: ${breakpoints.sm}) {
		padding-inline: 6px;
	}
`;

const ArrivalSliderWrapper = styled.div`
	.custom-prev-arrow {
		top: 43%;
		left: -18px;

		@media only screen and (max-width: ${breakpoints.xxl}) {
			left: 24px;
		}
		@media only screen and (max-width: ${breakpoints.xs}) {
			left: 4px;
		}
	}
	.custom-next-arrow {
		top: 43%;
		right: -18px;

		@media only screen and (max-width: ${breakpoints.xxl}) {
			right: 24px;
		}
		@media only screen and (max-width: ${breakpoints.xs}) {
			right: 4px;
		}
	}
`;
const NewArrival = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
	};
	return (
		<Section>
			<Container>
				<Title titleText={"New Arrival"} />
				<ArrivalSliderWrapper>
					<Slider
						nextArrow={<CustomNextArrow />}
						prevArrow={<CustomPrevArrow />}
						{...settings}>
						{newArrivalData?.map((newArrival) => {
							return (
								<ProductCardBoxWrapper key={newArrival.id}>
									<div className="product-img">
										<img
											src={newArrival.imgSource}
											alt={newArrival.title}
											className="object-fit-cover"
										/>
									</div>

									<div className="product-info">
										<p className="font-semibold text-xl">{newArrival.title}</p>
									</div>
								</ProductCardBoxWrapper>
							);
						})}
					</Slider>
				</ArrivalSliderWrapper>
			</Container>
		</Section>
	);
};

export default NewArrival;
