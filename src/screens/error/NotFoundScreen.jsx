import styled from "styled-components";
import { Container } from "../../style/style";
import { staticImages } from "../../utils/images";
import { BaseLinkGreen } from "../../style/button";

const NotFoundScreenWrapper = styled.main`
	margin: 24px 0;

	.page_not_found-img {
		width: 240px;
		overflow: hidden;
	}
	.page_not_found-msg {
		max-width: 400px;
		padding-block: 24px;
		margin-top: 16px;
		gap: 12px;
		border-radius: 6px;
	}
`;

const NotFoundScreen = () => {
	return (
		<NotFoundScreenWrapper className="page-py-spacing">
			<Container>
				<div className="flex items-center justify-center flex-col">
					<div className="page_not_found-img flex items-center">
						<img
							src={staticImages.page_not_found}
							className="object-fit-cover"
							alt="Not Found Image Screen"
						/>
					</div>
					<div className="page_not_found-msg w-full flex flex-col justify-center items-center">
						<p className="text-4xl font-semibold text-outerspace">
							!Oops Page not found.
						</p>
						<p className="text-gray text-center">
							The page you are looking for might have been removed or or temporarily
							unavilable.
						</p>

						<BaseLinkGreen to="/">Back to Home Page</BaseLinkGreen>
					</div>
				</div>
			</Container>
		</NotFoundScreenWrapper>
	);
};

export default NotFoundScreen;
