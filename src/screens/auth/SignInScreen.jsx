import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints, defaultTheme } from "../../style/themes/default";
import { FormGridWrapper, FormTitle } from "../../style/form_grid";
import { FormElement, Input } from "../../style/form";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import AuthOption from "../../components/auth/AuthOption";
import PasswordInput from "../../components/auth/PasswordInput";
import { BaseButtonBlack } from "../../style/button";

// style section
const SignInScreenWrapper = styled.section`
	.form-seperator {
		margin: 32px 0;
		column-gap: 18px;
		@media (max-width: ${breakpoints.lg}) {
			margin: 24px 0;
		}

		.seperator-text {
			min-width: 36px;
			height: 36px;
			background-color: ${defaultTheme.color_purple};
			border-radius: 50%;
			position: relative;
		}
		.seperator-line {
			width: 100%;
			height: 1px;
			background-color: ${defaultTheme.color_platinum};
		}
	}
	.form-element-text {
		margin-top: -16px;
		display: block;
	}
`;

const SignInScreen = () => {
	return (
		<SignInScreenWrapper>
			<FormGridWrapper>
				<Container>
					<div className="form-grid-content">
						<div className="form-grid-left">
							<img
								src={staticImages.form_img1}
								alt="sign in left image"
								className="object-fit-cover"
							/>
						</div>

						<div className="form-grid-right">
							<FormTitle>
								<h3>Sign In</h3>
							</FormTitle>

							<AuthOption />

							<div className="form-seperator flex items-center justify-center">
								<span className="seperator-line"></span>
								<span className="seperator-text inline-flex items-center justify-center text-white">
									OR
								</span>
								<span className="seperator-line"></span>
							</div>

							<form>
								<FormElement>
									<label htmlFor="" className="form-element-label">
										User name or email address
									</label>

									<Input
										type="text"
										placeholder=""
										name=""
										className="form-element-control"
									/>
								</FormElement>
								<PasswordInput filedName="Password" name="password" />

								<Link to={"/reset"} className="form-element-text text-end font-medium">
									Forget your password ?
								</Link>

								<BaseButtonBlack type="submit" className="form-submit-btn">
									Sing In
								</BaseButtonBlack>
							</form>

							<p className="account-rel-text flex flex-wrap ">
								Done&apos;t have account?
								<Link to={"/sign_up"} className="font-medium">
									Sign up
								</Link>
							</p>
						</div>
					</div>
				</Container>
			</FormGridWrapper>
		</SignInScreenWrapper>
	);
};

export default SignInScreen;
