import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "../../data/data";
import { Container } from "../../style/style";
import { BaseLinkWhite } from "../../style/button";
import { breakpoints, defaultTheme } from "../../style/themes/default";
import CustomNextArrow from "../common/CustomNextArrow";
import CustomPrevArrow from "../common/CustomPrevArrow";
const SectionHeroWrapper = styled.section`
	background-color: #f2f2f2;
`;
const HeroSliderWrapper = styled.div`
	.custom-prev-arrow {
		left: 30px !important;
		background-color: ${defaultTheme.color_white};
		svg {
			color: ${defaultTheme.color_outerspace};
		}

		@media only screen and (max-width: ${breakpoints.md}) {
			left: 16px !important;
		}
	}

	.custom-next-arrow {
		right: 30px !important;
		background-color: ${defaultTheme.color_white};
		svg {
			color: ${defaultTheme.color_outerspace};
		}

		@media only screen and (max-width: ${breakpoints.md}) {
			right: 16px !important;
		}
	}
	.slick-dots {
		bottom: 25px !important;
		li,
		li button,
		&::before {
			width: 20px;
			height: 20px;
		}
		button {
			&::before {
				font-size: 12px;
				color: ${defaultTheme.color_white};
			}
		}

		li {
			&.slick-active {
				button {
					&::before {
						font-size: 12px;
						color: ${defaultTheme.color_white};
					}
				}
			}
		}
	}
`;

const HeroSliderItemsWrapper = styled.div`
	position: relative;
	height: 716px;
	overflow: hidden;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: ${defaultTheme.color_black_04};
	}
	img {
		display: block;
	}
`;

const HeroSlideContent = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	max-width: 1100px;
	z-index: 10;

	.btn {
		height: 42px;
		min-width: 120px;
		margin-top: 20px;
		@media only screen and (max-width: ${breakpoints.md}) {
			margin-top: 12px;
		}
	}
	.container {
		max-width: 840px;
		margin-left: 0;

		@media only screen and (max-width: ${breakpoints.xxl}) {
			margin-left: 80px;
		}
		@media only screen and (max-width: ${breakpoints.md}) {
			margin-left: 16px;
			margin-right: 16px;
		}
		@media only screen and (max-width: ${breakpoints.sm}) {
			margin-left: 0;
			text-align: center;
		}
	}

	.hero-text-top {
		font-size: 32px;

		@media only screen and (max-width: ${breakpoints.lg}) {
			font-size: 26px;
		}
	}
	.hero-text-large {
		font-size: 78px;
		letter-spacing: 0.315px;
		line-height: 1.2;
		margin-bottom: 20px;

		@media only screen and (max-width: ${breakpoints.lg}) {
			font-size: 60px;
		}
		@media only screen and (max-width: ${breakpoints.md}) {
			font-size: 48px;
		}
		@media only screen and (max-width: ${breakpoints.sm}) {
			font-size: 36px;
		}
		@media only screen and (max-width: ${breakpoints.xs}) {
			font-size: 32px;
		}
	}

	.hero-text-bottom {
		font-size: 26px;
		margin-bottom: 24px;

		@media only screen and (max-width: ${breakpoints.lg}) {
			font-size: 20px;
		}
	}
	.hero-btn {
		font-size: 18px;
		height: 46px;
		min-width: 160px;
	}
`;

const Hero = () => {
	const settings = {
		infinity: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					arrows: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
				},
			},
		],
	};

	return (
		<SectionHeroWrapper>
			<HeroSliderWrapper>
				<Slider
					prevArrow={<CustomPrevArrow />} //custom-prev-arrow class
					nextArrow={<CustomNextArrow />}
					{...settings}>
					{bannerData?.map((banner) => {
						return (
							<HeroSliderItemsWrapper key={banner.id}>
								<img
									src={banner.imgSource}
									className="object-fit-cover"
									alt="Banner Hero Image"
								/>

								<HeroSlideContent className="flex items-center w-full h-full">
									<Container className="container text-white ">
										<p className="hero-text-top font-bold italic">{banner.topText}</p>
										<h2 className="hero-text-large font-extrabold">{banner.titleText}</h2>
										<p className="hero-text-bottom font-semibold uppercase">
											{banner.bottomText}
										</p>

										<BaseLinkWhite to={banner.buttonLink} className="btn hero-btn">
											{banner.buttonText}
										</BaseLinkWhite>
									</Container>
								</HeroSlideContent>
							</HeroSliderItemsWrapper>
						);
					})}
				</Slider>
			</HeroSliderWrapper>
		</SectionHeroWrapper>
	);
};

export default Hero;
