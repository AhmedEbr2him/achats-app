import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../style/header";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import { navMenuData } from "../../data/data";
import { Link, useLocation } from "react-router-dom";
import { Input, InputGroupWrapper } from "../../style/form";
import { breakpoints, defaultTheme } from "../../style/themes/default";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const NavigationAndSearchWrapper = styled.div`
	column-gap: 20px;

	.search-form {
		@media only screen and (max-width: ${breakpoints.lg}) {
			width: 100%;
			min-width: 500px;
		}
		@media only screen and (max-width: ${breakpoints.sm}) {
			display: none;
		}
	}

	.input-group {
		min-width: 320px;

		.input-control {
			@media only screen and (max-width: ${breakpoints.sm}) {
				display: none;
			}
		}

		@media only screen and (max-width: ${breakpoints.xl}) {
			min-width: 160px;
		}

		@media only screen and (max-width: ${breakpoints.sm}) {
			min-width: auto;
			grid-template-columns: 100%;
		}
	}

	@media only screen and (max-width: ${breakpoints.lg}) {
		width: 100%;
		justify-content: flex-end;
	}
`;
const NavigationMenuWrapper = styled.nav`
	.nav-menu-list {
		margin-left: 20px;

		@media only screen and (max-width: ${breakpoints.lg}) {
			flex-direction: column;
		}
	}
	.nav-menu-item {
		margin-inline: 20px;

		@media only screen and (max-width: ${breakpoints.xl}) {
			margin-block: 16px;
		}
	}
	.nav-menu-link {
		&.active {
			color: ${defaultTheme.color_outerspace};
			font-weight: 700;
		}
		&:hover {
			color: ${defaultTheme.color_outerspace};
		}
	}

	@media only screen and (max-width: ${breakpoints.lg}) {
		position: absolute;
		top: 0;
		right: 0;
		width: 260px;
		background-color: ${defaultTheme.color_white};
		height: 100%;
		z-index: 999;
		display: none;
	}
	.header-wrap {
		column-gap: 20px;

		@media only screen and (max-width: ${breakpoints.sm}) {
			column-gap: 8px;
		}
	}
`;

const IconLinkWrapper = styled.div`
	column-gap: 18px;

	.icon-link {
		width: 36px;
		height: 36px;
		border-radius: 6px;

		&.active {
			background-color: ${defaultTheme.color_sea_green};

			img {
				filter: brightness(100);
			}
		}
		&:hover {
			background-color: ${defaultTheme.color_whitesmoke};
		}
	}

	@media only screen and (max-width: ${breakpoints.xl}) {
		column-gap: 8px;
	}
	@media only screen and (max-width: ${breakpoints.sm}) {
		column-gap: 6px;
	}
`;

const Header = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	return (
		<HeaderMainWrapper className="header flex items-center">
			<Container className="container">
				<div className="header-wrap flex items-center justify-between">
					<div className="flex items-center">
						<button
							type="button"
							className="sidebar-toggler"
							onClick={() => dispatch(toggleSidebar())}>
							<i className="bi bi-list"></i>
						</button>

						<SiteBrandWrapper to={"/"} className="inline-flex">
							<div className="brand-img-wrap flex items-center justify-center">
								<img
									src={staticImages.logo}
									className="site-brand-img"
									alt="Site Brand Logo Image"
								/>
							</div>

							<span className="site-brand-text">achats.</span>
						</SiteBrandWrapper>
					</div>

					<NavigationAndSearchWrapper className="flex items-center">
						<NavigationMenuWrapper>
							<ul className="nav-menu-list flex items-center">
								{navMenuData?.map((menu) => {
									return (
										<li className="nav-menu-item" key={menu.id}>
											<Link
												to={menu.menuLink}
												className="nav-menu-link text-base font-medium text-gray">
												{menu.menuText}
											</Link>
										</li>
									);
								})}
							</ul>
						</NavigationMenuWrapper>

						<form className="search-form">
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
					</NavigationAndSearchWrapper>

					<IconLinkWrapper className="flex items-center">
						<Link
							to={"/wishlist"}
							title="Wishlist"
							className={`icon-link ${
								location.pathname === "/wishlist" ? "active" : ""
							} inline-flex items-center justify-center`}>
							<img src={staticImages.heart} alt="Wishlist Icon" />
						</Link>

						<Link
							to={"/account"}
							title="Account"
							className={`icon-link ${
								location.pathname === "/account" || location.pathname === "/account/add"
									? "active"
									: ""
							} inline-flex items-center justify-center`}>
							<img src={staticImages.user} alt="User Icon" />
						</Link>

						<Link
							to={"/cart"}
							title="Cart"
							className={`icon-link ${
								location.pathname === "/cart" ? "active" : ""
							} inline-flex items-center justify-center`}>
							<img src={staticImages.cart} alt="Cart Icon" />
						</Link>
					</IconLinkWrapper>
				</div>
			</Container>
		</HeaderMainWrapper>
	);
};

export default Header;
