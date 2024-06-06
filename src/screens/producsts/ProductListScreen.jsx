import styled from "styled-components";
import { Container, ContentStylings, Section } from "../../style/style";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Link } from "react-router-dom";
import ProductsList from "../../components/products/ProductsList";
import { products } from "../../data/data";
import Title from "../../components/common/Title";
import { breakpoints, defaultTheme } from "../../style/themes/default";
import ProductsFilter from "./ProductsFilter";

const ProductsContent = styled.div`
	grid-template-columns: 320px auto;
	margin-block: 20px;

	@media only screen and (max-width: ${breakpoints.xl}) {
		grid-template-columns: 260px auto;
	}
	@media only screen and (max-width: ${breakpoints.lg}) {
		grid-template-columns: 100%;
		row-gap: 24px;
	}
`;

const ProductsContentLeft = styled.div`
	border: 1px solid rgba(190, 188, 189, 0.4);
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.05) 0 10px 50px;
	overflow: hidden;

	@media only screen and (max-width: ${breakpoints.lg}) {
		display: grid;
	}
`;

const ProductsContentRight = styled.div`
	padding: 16px 40px;

	.products-right-top {
		margin-bottom: 40px;
		@media only screen and (max-width: ${breakpoints.lg}) {
			margin-bottom: 24px;
		}
		@media only screen and (max-width: ${breakpoints.sm}) {
			flex-direction: column;
			row-gap: 16px;
			align-items: flex-start;
		}
	}

	.products-right-nav {
		column-gap: 16px;
		li {
			a.active {
				color: ${defaultTheme.color_purple};
			}
		}
	}

	@media only screen and (max-width: ${breakpoints.lg}) {
		padding-inline: 12px;
	}
	@media only screen and (max-width: ${breakpoints.sm}) {
		padding-inline: 0;
	}

	.product-card-list {
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
	}
	.product-card {
		padding-inline: 0;
	}
`;

const DescriptionContent = styled.div`
	.content-stylings {
		margin-left: 32px;

		@media only screen and (max-width: ${breakpoints.sm}) {
			margin-left: 0;
		}
	}
`;

const ProductListScreen = () => {
	const breadcrumbItems = [
		{
			label: "Home",
			link: "/",
		},
		{
			label: "Products",
			link: "",
		},
	];

	return (
		<main className="page-py-spacing">
			<Container>
				<Breadcrumb items={breadcrumbItems} />

				<ProductsContent className="grid items-start">
					<ProductsContentLeft>
						<ProductsFilter />
					</ProductsContentLeft>

					<ProductsContentRight>
						<div className="products-right-top flex items-center justify-between">
							<h4 className="text-xxl">Women&apos;s Clothing</h4>

							<ul className="products-right-nav flex items-center justify-end flex-wrap">
								<li>
									<Link to={"/"} className="active text-lg font-semibold">
										New
									</Link>
								</li>
								<li>
									<Link to={"/"} className="text-lg font-semibold">
										Recommended
									</Link>
								</li>
							</ul>
						</div>

						<ProductsList products={products.slice(0, 12)} />
					</ProductsContentRight>
				</ProductsContent>
			</Container>

			<Section>
				<Container>
					<DescriptionContent>
						<Title titleText={"Clothing For Every One Online."} />

						<ContentStylings className="text-base content-stylings">
							<h4>Reexplore Clothing Collection Online at Achats. </h4>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam
								tenetur obcaecati sequi, exercitationem minima! Unde dignissimos, quidem
								illum iste dolore quaerat corporis obcaecati quasi labore hic optio ea
								nesciunt.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dicta odio
								molestiae quaerat ducimus aliquid repellat ut non numquam illum!
							</p>
							<h4>One-stop Destination Shop Every Clothing For Everyone: Achats.</h4>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde impedit ab
								debitis minima quasi quibusdam, rem distinctio quos deleniti velit,
								recusandae officiis nemo, architecto nulla libero cupiditate quia
								explicabo optio!
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque
								labore non dignissimos. Laudantium, nostrum.
							</p>
							<Link to="/">See More</Link>
						</ContentStylings>
					</DescriptionContent>
				</Container>
			</Section>
		</main>
	);
};

export default ProductListScreen;
