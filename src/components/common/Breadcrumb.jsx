import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { defaultTheme } from "../../style/themes/default";

const BreadcrumbWrapper = styled.nav`
	margin-bottom: 24px;

	.breadcrumb-item {
		transition: ${defaultTheme.default_transition};
		&:hover {
			color: ${defaultTheme.color_outerspace};
		}
	}
	.breadcrumb-separator {
		margin-inline: 8px;
	}
`;

const Breadcrumb = ({ items }) => {
	return (
		<BreadcrumbWrapper className="flex items-center flex-wrap">
			{items?.map((item, index) => {
				return (
					<BreadcrumbItem key={index} item={item} isLast={items.length - 1 === index} />
				);
			})}
		</BreadcrumbWrapper>
	);
};

const BreadcrumbItem = ({ item, isLast }) => {
	return (
		<>
			<Link
				to={item.link}
				className={`breadcrumb-item text-base ${
					isLast ? "text-outerspace font-semibold" : "text-gray font-medium"
				}`}>
				{item.label}
			</Link>

			{!isLast && (
				<span className="breadcrumb-separator inline-flex text-xs">
					<i className="bi bi-chevron-right"></i>
				</span>
			)}
		</>
	);
};

Breadcrumb.propTypes = {
	items: PropTypes.array,
};

Breadcrumb.propTypes = {
	item: PropTypes.object,
	isLast: PropTypes.bool,
};
export default Breadcrumb;
