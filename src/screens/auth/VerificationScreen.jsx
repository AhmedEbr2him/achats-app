import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../style/form_grid";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import { FormElement, Input } from "../../style/form";
import { BaseButtonGreen } from "../../style/button";
const VerificationScreenWrapper = styled.section``;

const Verification = () => {
	return (
		<VerificationScreenWrapper>
			<FormGridWrapper>
				<Container>
					<div className="form-grid-content">
						<div className="form-grid-left">
							<img
								src={staticImages.form_img4}
								className="object-fit-cover"
								alt="Verification Screen Image Form"
							/>
						</div>
						<div className="form-grid-right">
							<FormTitle>
								<h3>Verification</h3>
								<p>Verify your code.</p>
							</FormTitle>

							<form>
								<FormElement>
									<label htmlFor="" className="form-element-label">
										Verification Code
									</label>
									<Input
										type="text"
										placeholder="Enter your verification code"
										className="form-element-control"
									/>
								</FormElement>
								<BaseButtonGreen type="submit" className="form-submit-btn">
									Verify Code
								</BaseButtonGreen>
							</form>
						</div>
					</div>
				</Container>
			</FormGridWrapper>
		</VerificationScreenWrapper>
	);
};

export default Verification;
