import { useState } from "react";
import styled from "styled-components";
import { FormElement, Input } from "../../style/form";
import { PropTypes } from "prop-types";
import { ImEye } from "react-icons/im";
import { ImEyeBlocked } from "react-icons/im";

const PasswordToggleButton = styled.button`
	position: absolute;
	bottom: 100%;
	right: 0;

	.pwd-value-toggle {
		padding-left: 5px;
	}
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12px;
	}
`;

const PasswordInput = ({ filedName, name, errorMsg = "" }) => {
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<FormElement>
			<label htmlFor="" className="form-element-label">
				{filedName}
			</label>
			<div className="form-element-block">
				<Input
					type={showPassword ? "text" : "password"}
					placeholder=""
					name={name}
					className="form-element-control"
				/>

				<PasswordToggleButton
					type="button"
					className="pwd-value-toggle flex items-center"
					onClick={togglePassword}>
					{showPassword ? (
						<span>
							<ImEyeBlocked />
							Hide
						</span>
					) : (
						<span>
							<ImEye />
							Show
						</span>
					)}
				</PasswordToggleButton>
				<span className="form-element-error text-end font-medium">{errorMsg}</span>
			</div>
		</FormElement>
	);
};

PasswordInput.propTypes = {
	filedName: PropTypes.string,
	name: PropTypes.string,
	errorMsg: PropTypes.string,
};
export default PasswordInput;
