import { CustomNextArrowWrapper } from "../../style/slider";
import { PropTypes } from "prop-types";
import { BsChevronRight } from "react-icons/bs";

const CustomNextArrow = ({ onClick }) => {
	return (
		<CustomNextArrowWrapper className="custom-next-arrow" onClick={onClick}>
			<BsChevronRight />
		</CustomNextArrowWrapper>
	);
};

CustomNextArrow.propTypes = {
	onclick: PropTypes.func,
};
export default CustomNextArrow;
