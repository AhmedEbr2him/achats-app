import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../style/form_grid";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../style/form";
import { BaseButtonBlack } from "../../style/button";
import { Link } from "react-router-dom";

const CheckMailScreenWrapper = styled.section``;
const CheckMaliScreen = () => {
	return (
		<CheckMailScreenWrapper>
			<FormGridWrapper>
				<Container>
					<div className="form-grid-content">
						<div className="form-grid-left">
							<img
								src={staticImages.form_img1}
								className="object-fit-cover"
								alt="Check Mail Image"
							/>
						</div>

						<div className="form-grid-right">
							<FormTitle>
								<h3>Check Email</h3>
								<p>
									Please check your email indox and click on the provided link to reset
									your password. If don&apos;t recive email.
								</p>
							</FormTitle>

							<form>
								<FormElement>
									<label htmlFor="" className="form-element-label">
										Email
									</label>
									<Input
										type="text"
										placeholder="Enter your email address"
										name=""
										className="form-element-control"
									/>
									<span className="form-element-error">
										We can&apos;t find your email.
									</span>
								</FormElement>

								<BaseButtonBlack type="submit" className="form-submit-btn">
									Send
								</BaseButtonBlack>
							</form>

							<p className="flex flex-wrap account-rel-text">
								<Link to="/sign_in" className="font-medium">
									<span className="text-underline">Back to Login</span>
								</Link>
							</p>
						</div>
					</div>
				</Container>
			</FormGridWrapper>
		</CheckMailScreenWrapper>
	);
};

export default CheckMaliScreen;
