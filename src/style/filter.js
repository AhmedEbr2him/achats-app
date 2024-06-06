import styled from "styled-components";
import { breakpoints, defaultTheme } from "./themes/default";

export const FilterTitle = styled.div`
	border-block: 1px solid rgba(190, 188, 189, 0.4);
	padding: 16px 20px;
	cursor: pointer;
	transition: ${defaultTheme.default_transition};

	&:hover {
		background-color: ${defaultTheme.color_whitesmoke};
	}
	.filter-title-icon {
		transition: ${defaultTheme.default_transition};

		&.rotate {
			transform: rotate(180deg);
		}
	}

	@media only screen and (max-width: ${breakpoints.lg}) {
		padding-block: 10px;
	}
`;

export const FilterWrap = styled.div`
	padding: 20px;
	transition: ${defaultTheme.default_transition};

	@media only screen and (max-width: ${breakpoints.lg}) {
		display: none;
		padding-block: 10px;

		&.show {
			display: block;
		}
	}

	&.hide {
		display: none;
	}
`;

export const ProductCategoryFilter = styled.div`
	.product-filter-item {
		padding-block: 4px;
		margin-block: 12px;

		&:hover {
			.filter-head-title {
				transition: ${defaultTheme.default_transition};
				color: ${defaultTheme.color_sea_green};
			}
		}

		@media only screen and (max-width: ${breakpoints.lg}) {
			padding-block: 2px;
		}
	}
	.filter-title {
		border-top: 0;
	}
`;

export const PriceFilter = styled.div`
	.filter-wrap {
		max-width: 400px;
		margin-inline: auto;
	}
	.range-slider {
		height: 5px;
		position: relative;
		background-color: rgba(128, 125, 126, 0.3);
		border-radius: 2px;
		margin-top: 10px;
		overflow: hidden;
	}
	.range-selected {
		position: absolute;
		left: 30%;
		right: 30%;
		border-radius: 5px;
	}
	.range-input {
		position: relative;
	}
	.range-input input {
		position: absolute;
		height: 5px;
		top: -6px;
		background: none;
		pointer-events: none;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	.range-input input::-webkit-slider-thumb {
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background-color: ${defaultTheme.color_sea_green};
		pointer-events: auto;
		-webkit-appearance: none;
	}
	.range-input input::-moz-slider-thumb {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		background-color: ${defaultTheme.color_white};
		pointer-events: auto;
		-moz-appearance: none;
	}

	.range-price {
		margin-block: 20px;
		column-gap: 30px;
	}
	.range-price input {
		width: 50%;
		padding: 5px;
		height: 32px;
		border-radius: 4px;
		border: 1px solid rgba(190, 188, 189, 0.8);

		&:focus {
			outline: none;
		}
	}
`;

export const ColorsFilter = styled.div`
	.colors-list {
		grid-template-columns: repeat(auto-fit, minmax(36px, 1fr));
		gap: 16px;

		@media only screen and (max-width: ${breakpoints.lg}) {
			grid-template-columns: repeat(auto-fit, minmax(24px, 1fr));
			gap: 8px;
		}
	}
	.colors-item {
		row-gap: 4px;
		width: 36px;
		height: 36px;
		cursor: pointer;
		position: relative;

		@media only screen and (max-width: ${breakpoints.lg}) {
			width: 26px;
			height: 26px;
		}

		input {
			position: absolute;
			top: 0;
			left: 0;
			width: 34px;
			height: 34px;
			opacity: 0;
			z-index: 5;
			cursor: pointer;

			@media only screen and (max-width: ${breakpoints.lg}) {
				width: 26px;
				height: 26px;
			}

			&:checked {
				& + img {
					outline: 1px solid ${defaultTheme.color_platinum};
					outline-offset: 4px;
					border-radius: 12px;
					scale: 0.8;

					@media only screen and (max-width: maxwidthpx) {
						border-radius: 6px;
					}
				}
			}
		}

		img {
			border-radius: 12px;
			transition: ${defaultTheme.default_transition};

			&:hover {
				scale: 0.9;
			}

			@media only screen and (max-width: ${breakpoints.lg}) {
				width: 24px;
				height: 24px;
			}
		}
	}
`;

export const SizesFilter = styled.div`
	.sizes-list {
		grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
		gap: 12px;

		@media only screen and (max-width: ${breakpoints.lg}) {
			grid-template-columns: repeat(auto-fit, minmax(40px 40px));
			gap: 6px;
		}
	}
	.sizes-item {
		height: 28px;
		position: relative;

		input {
			opacity: 0;
			position: absolute;
			top: 0;
			left: 0;
			width: 60px;
			height: 28px;
			z-index: 5;
			cursor: pointer;

			@media only screen and (max-width: ${breakpoints.lg}) {
				width: 40px;
			}
			&:checked {
				& + span {
					background-color: ${defaultTheme.color_sea_green};
					color: ${defaultTheme.color_white};
					border-color: ${defaultTheme.color_sea_green};
				}
			}
		}

		span {
			position: absolute;
			top: 0;
			left: 0;
			width: 60px;
			height: 28px;
			border: 1px solid rgba(190, 189, 189, 0.8);
			border-radius: 4px;
			text-transform: uppercase;
			transition: ${defaultTheme.default_transition};
			@media only screen and (max-width: ${breakpoints.lg}) {
				width: 40px;
			}
		}
	}
`;

export const StyleFilter = styled.div`
	.style-filter-item {
		padding-block: 4px;
		margin-block: 12px;

		&:hover {
			button {
				transition: ${defaultTheme.default_transition};

				span {
					color: ${defaultTheme.color_sea_green};
					transition: ${defaultTheme.default_transition};
				}
			}
		}
	}
`;
