import { Link } from "react-router-dom";
import styled from "styled-components";
import { staticImages } from "../../utils/images";
import { defaultTheme } from "../../style/themes/default";

const SignOptions = styled.div`
	row-gap: 12px;

	.sign-option {
		column-gap: 12px;
		height: 40px;
		border-radius: 5px;
		border: 1px solid ${defaultTheme.color_platinum};
		transition: ${defaultTheme.default_transition};

		&:hover {
			/* transform: translateY(2px); */
			border-color: ${defaultTheme.color_black};
		}
		.sign-option-icon {
			img {
				width: 18px;
			}
		}
	}
`;
const AuthOption = () => {
	return (
		<SignOptions className="grid">
			<Link to={"/"} className="sign-option flex items-center justify-center">
				<span className="sign-option-icon flex items-center justify-center">
					<img src={staticImages.google} />
				</span>
				<span className="sign-option-text font-medium">Continue With Google</span>
			</Link>
			<Link to={"/"} className="sign-option flex items-center justify-center">
				<span className="sign-option-icon flex items-center justify-center">
					<img src={staticImages.twitter} />
				</span>
				<span className="sign-option-text font-medium">Continue With Twitter</span>
			</Link>
		</SignOptions>
	);
};

export default AuthOption;
