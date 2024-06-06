import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { SiteBrandWrapper } from "../../style/header";
import { staticImages } from "../../utils/images";
import { Input, InputGroupWrapper } from "../../style/form";
import { sideMenuData } from "../../data/data";
import { breakpoints, defaultTheme } from "../../style/themes/default";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const SideNavigationWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0%;
	width: 355px;
	z-index: 999;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
	padding: 8px;
	transform: translateX(-100%);
	transition: ${defaultTheme.default_transition};

	&.show {
		transform: translateX(0);
	}

	.sidebar-head {
		padding-inline: 8px;
		padding-top: 8px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.sidebar-close-btn {
		&:hover {
			color: ${defaultTheme.color_sea_green};
		}
	}

	.sidenav-search-form {
		margin-inline: 8px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		margin-top: 20px;

		.input-group {
			min-width: 100%;
			column-gap: 0;
		}
	}
	.sidenav-menu-list {
		gap: 20px;
		margin-block: 20px;
		padding-block: 24px;
		padding-inline: 8px;
		border-top: 1px solid rgba(0, 0, 0, 0.05);
		li {
			padding-block: 5px;
			padding-inline: 8px;
			border-radius: 4px;
			transition: ${defaultTheme.default_transition};
			&:hover {
				background-color: rgba(0, 0, 0, 0.05);

				a {
					span {
						color: ${defaultTheme.color_sea_green};
						transition: ${defaultTheme.default_transition};
					}
				}
			}
		}
		a {
			column-gap: 12px;
			span {
				transition: ${defaultTheme.default_transition};
			}
			&.active {
				color: ${defaultTheme.color_sea_green};
			}
		}
	}

	@media only screen and (max-width: ${breakpoints.xs}) {
		width: 100%;
	}
`;
const ScrimWrapper = styled.div`
	position: fixed;
	inset: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	transition: ${defaultTheme.default_transition};
	opacity: 0;
	visibility: hidden;
	z-index: 888;

	&.show {
		opacity: 1;
		visibility: visible;
	}
`;

const Sidebar = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { isSidbarOpen } = useSelector((state) => state.sidebar);

	return (
		<>
			<SideNavigationWrapper className={`bg-white h-full ${isSidbarOpen ? "show" : ""}`}>
				<div className="sidebar-head">
					<SiteBrandWrapper to={"/"} className="inline-flex">
						<div className="brand-img-wrap flex items-center justify-center">
							<img src={staticImages.logo} alt="Site Brand Logo Image" />
						</div>
						<span className="site-brand-text text-outerspace">achats.</span>
					</SiteBrandWrapper>

					<button
						className="sidebar-close-btn text-4xl"
						onClick={() => dispatch(toggleSidebar())}>
						<i className="bi bi-x-square-fill"></i>
					</button>
				</div>
				<div className="sidebar-content">
					<form className="sidenav-search-form">
						<InputGroupWrapper className="input-group">
							<span className="input-icon flex items-center justify-center text-xl text-gray">
								<i className="bi bi-search"></i>
							</span>
							<Input
								type="text"
								className="input-control w-full"
								placeholder="Search for any product..."
							/>
						</InputGroupWrapper>
					</form>

					<ul className="sidenav-menu-list grid">
						{sideMenuData?.map((menu) => (
							<li key={menu.id}>
								<Link
									to={menu.menuLink}
									className={`flex items-center ${
										location.pathname === menu.menuLink ? "active" : ""
									}`}>
									<span className="text-xxl">
										<i className={`bi bi-${menu.iconName}`}></i>
									</span>

									<span className="text-lg font-medium">{menu.menuText}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</SideNavigationWrapper>
			<ScrimWrapper
				className={isSidbarOpen ? "show" : ""}
				onClick={() => dispatch(toggleSidebar())}></ScrimWrapper>
		</>
	);
};

export default Sidebar;
