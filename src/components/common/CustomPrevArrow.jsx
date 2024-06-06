import { CustomPrevArrowWrapper } from "../../style/slider";
import { PropTypes } from "prop-types";
import { BsChevronLeft } from "react-icons/bs";
const CustomPrevArrow = ({ onClick }) => {
	return (
		<CustomPrevArrowWrapper className="custom-prev-arrow" onClick={onClick}>
			<BsChevronLeft />
		</CustomPrevArrowWrapper>
	);
};

CustomPrevArrow.propTypes = {
	onclick: PropTypes.func,
};
export default CustomPrevArrow;
