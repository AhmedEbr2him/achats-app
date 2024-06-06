import styled from "styled-components";
import { Link } from "react-router-dom";
import { CheckBoxGroup, FormGridWrapper, FormTitle } from "../../style/form_grid";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import AuthOption from "../../components/auth/AuthOption";
import { FormElement, Input } from "../../style/form";
import PasswordInput from "../../components/auth/PasswordInput";
import { BaseButtonBlack } from "../../style/button";
const SignUpScreenWrapper = styled.section`
	form {
		margin-top: 40px;

		.form-element-text {
			/* margin-top: 16px; */
			display: block;
		}
	}
	.text-space {
		margin: 0 5px;
	}
`;

const SignUpScreen = () => {
	return (
		<SignUpScreenWrapper>
			<FormGridWrapper>
				<Container>
					<div className="form-grid-content">
						<div className="form-grid-left">
							<img
								src={staticImages.form_img2}
								className="object-fit-cover"
								alt="Sign Up Image"
							/>
						</div>

						<div className="form-grid-right">
							<FormTitle>
								<h3>Sign Up</h3>
								<p className="text-base">
									Sign up for free to access in any type of our products.
								</p>
							</FormTitle>

							<AuthOption />

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

									<span className="form-element-error">
										*Please enter valid email address.
									</span>
								</FormElement>

								<PasswordInput filedName="Passwrod" name="password" />
								<span className="form-element-text font-medium">
									Use 8 or more characters with a mix of letters, numbers & symbols.
								</span>

								<CheckBoxGroup>
									<li className="flex items-center">
										<input type="checkbox" />
										<span className="text-sm">
											Agree to our&nbsp;
											<Link to="/" className="text-underline">
												Terms of use
											</Link>
											<span className="text-space">and</span>
											<Link to="/" className="text-underline">
												Privacy policy
											</Link>
										</span>
									</li>

									<li className="flex items-center">
										<input type="checkbox" />
										<span className="text-sm">Subscribe to our monthly newsletter </span>
									</li>
								</CheckBoxGroup>

								<BaseButtonBlack type="submit" className="form-submit-btn">
									Sign Up
								</BaseButtonBlack>
							</form>

							<p className="flex flex-wrap account-rel-text">
								Already have an account ?{" "}
								<Link to={"/sign_in"} className="font-medium">
									Login
								</Link>
							</p>
						</div>
					</div>
				</Container>
			</FormGridWrapper>
		</SignUpScreenWrapper>
	);
};

export default SignUpScreen;
