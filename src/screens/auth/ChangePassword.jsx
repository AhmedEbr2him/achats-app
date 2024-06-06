import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../style/form_grid";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import PasswordInput from "../../components/auth/PasswordInput";
import { BaseButtonBlack } from "../../style/button";

const ChangePwdScreenWrapper = styled.section``;
const ChangePassword = () => {
	return (
		<ChangePwdScreenWrapper>
			<FormGridWrapper>
				<Container>
					<div className="form-grid-content">
						<div className="form-grid-left">
							<img
								src={staticImages.form_img4}
								className="object-fit-cover"
								alt="Change Password Image Form"
							/>
						</div>

						<div className="form-grid-right">
							<FormTitle>
								<h3>Create New Password</h3>
								<p>Your new password must be diffrent from previous used password.</p>
							</FormTitle>
							<form>
								<PasswordInput filedName="New Password" name="password" />
								<PasswordInput
									filedName="Confirm Password"
									name="password"
									errorMsg="New password and confirm password do not match."
								/>

								<BaseButtonBlack type="submit" className="form-submit-btn">
									Reset Password
								</BaseButtonBlack>
							</form>
						</div>
					</div>
				</Container>
			</FormGridWrapper>
		</ChangePwdScreenWrapper>
	);
};

export default ChangePassword;
