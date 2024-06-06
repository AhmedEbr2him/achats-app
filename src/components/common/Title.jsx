import PropTypes from "prop-types";
import { TitleWrapper } from "../../style/style";

const Title = ({ titleText }) => {
	return (
		<TitleWrapper>
			<h3>{titleText}</h3>
		</TitleWrapper>
	);
};

export default Title;

Title.propTypes = {
	titleText: PropTypes.string,
};
