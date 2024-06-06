import { useState } from "react";
import styled from "styled-components";
import { productDescriptionTabHeads } from "../../data/data";
import Title from "../common/Title";
import { ContentStylings } from "../../style/style";
import { breakpoints, defaultTheme } from "../../style/themes/default";
import ProductDescriptionMedia from "./ProductDescriptionMedia";

const DetailsContent = styled.div`
	margin-top: 60px;

	@media only screen and (max-width: ${breakpoints.lg}) {
		margin-top: 40px;
	}
	.details-content-wrapper {
		grid-template-columns: auto 500px;
		gap: 40px;

		@media only screen and (max-width: ${breakpoints.xl}) {
			grid-template-columns: auto 400px;
		}
		@media only screen and (max-width: ${breakpoints.lg}) {
			grid-template-columns: 100%;
			gap: 24px;
		}
	}
`;

const DescriptionTabWrapper = styled.div`
	.tabs-heads {
		column-gap: 20px;
		row-gap: 16px;
		margin-bottom: 24px;

		@media only screen and (max-width: ${breakpoints.sm}) {
			flex-wrap: wrap;
			margin-bottom: 16px;
		}
		@media only screen and (max-width: ${breakpoints.xs}) {
			gap: 12px;
		}
	}
	.tabs-head {
		padding-bottom: 16px;
		position: relative;
		&-active {
			color: ${defaultTheme.color_outerspace};

			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 100%;
				width: 40px;
				height: 1px;
				background-color: ${defaultTheme.color_outerspace};
			}
		}

		@media only screen and (max-width: ${breakpoints.sm}) {
			padding-bottom: 12px;
		}
	}
	.tabs-badge {
		width: 20px;
		height: 20px;
		border-radius: 4px;
		font-size: 10px;
		margin-left: 6px;

		&-purple {
			background-color: ${defaultTheme.color_purple};
		}
		&-outerspace {
			background-color: ${defaultTheme.color_outerspace};
		}
	}

	.tabs-contents {
		max-height: 400px;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			width: 6px;
		}
		&::-webkit-scrollbar-track {
			box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
		}
		&::-webkit-scrollbar-thumb {
			background-color: ${defaultTheme.color_platinum};
			border-radius: 12px;
		}
	}
	.tabs-content {
		display: none;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.02);

		&.show {
			display: block;
		}

		@media only screen and (max-width: ${breakpoints.sm}) {
			padding: 12px;
		}
	}
`;

const ProductDescriptionTab = () => {
	const [activeDesTab, setActiveDesTab] = useState(productDescriptionTabHeads[0].tabHead);

	const handleTabChange = (tabHead) => {
		setActiveDesTab(tabHead);
	};

	return (
		<DetailsContent>
			<Title titleText={"Product Description"} />

			<div className="details-content-wrapper grid">
				<DescriptionTabWrapper>
					<div className="tabs-heads flex items-center flex-wrap">
						{productDescriptionTabHeads.map((tab) => {
							return (
								<button
									type="button"
									key={tab.id}
									className="tabs-head text-gray font-medium text-lg flex items-center"
									onClick={() => handleTabChange(tab.tabHead)}>
									<span
										className={`${tab.tabHead === activeDesTab ? "text-sea-green" : ""}`}>
										{tab.tabText}
									</span>

									{tab.badgeValue && (
										<span
											className={`tabs-badge inline-flex items-center justify-center text-white tabs-badge-${tab.badgeColor}`}>
											{tab.badgeValue}
										</span>
									)}
								</button>
							);
						})}
					</div>

					<div className="tabs-contents">
						<div
							className={`tabs-content ${
								activeDesTab === "tabDescription" ? "show" : ""
							}`}>
							<ContentStylings>
								<p>
									100% Bio-washed Cotton makes the fabric extra soft & skily. Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Dicta, repudiandae.
									Infinite range of matte-finish HD prints.
								</p>
								<h4>Specification:</h4>
								<ul>
									<li>Fabric: Bio-washed Cotton</li>
									<li>Pattern: Printed</li>
									<li>Fit: Regular-Fit</li>
									<li>Necl: Rounded Neck</li>
									<li>Sleeve: Half sleeves</li>
									<li>Style: Casual Wear</li>
								</ul>
								<p>
									*Important: Please make sure that the mobile number is filled Lorem
									ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sed.
								</p>
								<h4>Why should you shop at Outfit store?</h4>
								<ul>
									<li>Guranteed good matrial at quality</li>
									<li>Rate convection stitsching.</li>
								</ul>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste et
									repellendus, quo facilis deserunt reprehenderit magnam est sint voluptas
									quas eveniet excepturi voluptate nobis qui minima nulla totam reiciendis
									eligendi non vero animi. Ducimus expedita dolorem reprehenderit atque
									facere! Debitis eaque quia unde, ipsam explicabo quas maxime. Eaque,
									ipsam.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
									reprehenderit provident suscipit rem quod inventore?
								</p>
							</ContentStylings>
						</div>

						<div
							className={`tabs-content content-stylings ${
								activeDesTab === "tabComments" ? "show" : ""
							}`}>
							User Comment Here.
						</div>

						<div
							className={`tabs-content content-stylings ${
								activeDesTab === "tabQNA" ? "show" : ""
							}`}>
							Question & Answers.
						</div>
					</div>
				</DescriptionTabWrapper>

				<ProductDescriptionMedia />
			</div>
		</DetailsContent>
	);
};

export default ProductDescriptionTab;
