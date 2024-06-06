import { css } from "styled-components";
import { breakpoints, defaultTheme } from "./themes/default";

export const commonCardStyles = css`
	padding-inline: 12px;
	border-radius: 12px;
	cursor: pointer;

	.product-img {
		border-radius: 12px;
		overflow: hidden;
		margin-bottom: 20px;

		img {
			transition: ${defaultTheme.default_transition};
		}

		&:hover {
			img {
				scale: 1.1;
			}
		}

		@media only screen and (max-width: ${breakpoints.lg}) {
			margin-bottom: 12px;
		}
	}
`;
