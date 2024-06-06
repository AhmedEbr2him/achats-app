import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { breakpoints, defaultTheme } from "../../style/themes/default";
const ProductPreviewWrapper = styled.div`
	grid-template-columns: 72px auto;
	gap: 74px;

	@media only screen and (max-width: ${breakpoints.xl}) {
		gap: 16px;
	}

	@media only screen and (max-width: ${breakpoints.sm}) {
		grid-template-columns: 42px auto;
		gap: 12px;
	}
	@media only screen and (max-width: ${breakpoints.xs}) {
		grid-template-columns: 100%;
	}

	.preview-items {
		@media only screen and (max-width: ${breakpoints.xs}) {
			width: 80%;
			margin-inline: auto;
			order: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 10px;
		}
	}

	.preview-item {
		width: 70px;
		height: 70px;
		overflow: hidden;
		border-radius: 8px;
		cursor: pointer;
		transition: ${defaultTheme.default_transition}l;
		@media only screen and (max-width: ${breakpoints.sm}) {
			width: 40px;
			height: 40px;
		}

		&:hover {
			opacity: 0.9;
			outline: 1px solid ${defaultTheme.color_gray};
		}
		&-wrapper {
			padding-block: 4px;

			@media only screen and (max-width: ${breakpoints.xs}) {
				display: flex;
				justify-content: center;
			}
		}
	}

	.preview-display {
		height: 600px;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}

		@media only screen and (max-width: ${breakpoints.md}) {
			height: 520px;
		}
		@media only screen and (max-width: ${breakpoints.sm}) {
			height: 400px;
		}
		@media only screen and (max-width: ${breakpoints.xs}) {
			height: 320px;
		}
	}
`;

const ProductPreview = ({ previewImages }) => {
	const [activePreviewImage, setActivePreviewImage] = useState(
		previewImages[0].imgSource
	);

	const handlePreviewImage = (previewImage) => {
		setActivePreviewImage(previewImage);
	};
	return (
		<ProductPreviewWrapper className="grid items-center">
			<div className="preview-items w-full">
				{previewImages.map((previewImage) => {
					return (
						<div
							className="preview-item-wrapper"
							key={previewImage.id}
							onClick={() => handlePreviewImage(previewImage.imgSource)}>
							<div className="preview-item">
								<img
									src={previewImage.imgSource}
									alt={previewImage.title}
									className="object-fit-cover"
								/>
							</div>
						</div>
					);
				})}
			</div>
			<div className="preview-display">
				<img src={activePreviewImage} alt="Image Preview" />
			</div>
		</ProductPreviewWrapper>
	);
};

export default ProductPreview;

ProductPreview.propTypes = {
	previewImages: PropTypes.array,
};
