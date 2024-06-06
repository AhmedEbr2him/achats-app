import styled from "styled-components";
import Hero from "../../components/home/Hero";
import Feature from "../../components/home/Feature";
import NewArrival from "../../components/home/NewArrival";
import SavingZone from "../../components/home/SavingZone";

import { limelightCatalog, mensCatalog, womensCatalog } from "../../data/data";
import Cataloge from "../../components/home/Cataloge";
import Brands from "../../components/home/Brands";
import Feedback from "../../components/home/Feedback";

const HomeScreenWrapper = styled.main``;

const HomeScreen = () => {
	return (
		<HomeScreenWrapper>
			<Hero />
			<Feature />
			<NewArrival />
			<SavingZone />

			<Cataloge catalogeTitle={"Categories For Men"} products={mensCatalog} />
			<Cataloge catalogeTitle={"Categories For Women"} products={womensCatalog} />
			<Brands />
			<Cataloge catalogeTitle={"In The LimeLight"} products={limelightCatalog} />
			<Feedback />
		</HomeScreenWrapper>
	);
};

export default HomeScreen;
