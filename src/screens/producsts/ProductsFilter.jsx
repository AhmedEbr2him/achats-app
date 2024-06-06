import { useState } from "react";
import {
	ColorsFilter,
	FilterTitle,
	FilterWrap,
	PriceFilter,
	ProductCategoryFilter,
	SizesFilter,
	StyleFilter,
} from "../../style/filter";
import { ProductFilterList, StyleFilterList } from "../../data/data";
import { staticImages } from "../../utils/images";

const ProductsFilter = () => {
	const [isProductFilterOpen, setIsProductFilterOpen] = useState(false);
	const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
	const [isColorFilterOpen, setIsColorFilterOpen] = useState(false);
	const [isSizeFilterOpen, setisSizeFilterOpen] = useState(false);
	const [isStyleFilterOpen, setIsStyleFilterOpen] = useState(false);

	const toggleFilter = (filter) => {
		switch (filter) {
			case "product":
				setIsProductFilterOpen(!isProductFilterOpen);
				break;
			case "price":
				setIsPriceFilterOpen(!isPriceFilterOpen);
				break;
			case "color":
				setIsColorFilterOpen(!isColorFilterOpen);
				break;
			case "size":
				setisSizeFilterOpen(!isSizeFilterOpen);
				break;
			case "style":
				setIsStyleFilterOpen(!isStyleFilterOpen);
				break;
			default:
				break;
		}
	};

	const rangeMin = 0;
	const [minRange, setMinRange] = useState(150);
	const [maxRange, setMaxRange] = useState(1000);

	const handleInputChange = (e) => {
		const inputName = e.target.name;
		const inputValue = parseInt(e.target.value);

		if (inputName === "min") {
			setMinRange(inputValue);

			if (maxRange - inputValue < rangeMin) {
				setMaxRange(inputValue + rangeMin);
			}
		}
		///
		else if (inputName === "max") {
			setMaxRange(inputValue);

			if (inputValue - minRange < rangeMin) {
				setMinRange(inputValue - rangeMin);
			}
		}
	};

	const calculateRangePosition = (value, max) => {
		return (value / max) * 100 + "%";
	};
	return (
		<>
			<ProductCategoryFilter>
				<FilterTitle
					className="filter-title flex items-center justify-between"
					onClick={() => toggleFilter("product")}>
					<p className="filter-title-text text-gray text-base font-semibold text-lg">
						Filter
					</p>
					<span
						className={`text-gray text-xxl filter-title-icon ${
							isProductFilterOpen ? "rotate" : ""
						}`}>
						<i className="bi bi-filter"></i>
					</span>
				</FilterTitle>

				<FilterWrap className={!isProductFilterOpen ? "hide" : "show"}>
					{ProductFilterList?.map((productFilter) => {
						return (
							<div className="product-filter-item" key={productFilter.id}>
								<button
									type="button"
									className="filter-item-head w-full flex items-center justify-between">
									<span className="filter-head-title text-base text-gray font-semibold">
										{productFilter.title}
									</span>
									<span className="filter-head-icon text-gray">
										<i className="bi bi-chevron-right"></i>
									</span>
								</button>
							</div>
						);
					})}
				</FilterWrap>
			</ProductCategoryFilter>

			<PriceFilter>
				<FilterTitle
					className="filter-title flex items-center justify-between"
					onClick={() => toggleFilter("price")}>
					<p className="filter-title-text text-gray text-base font-semibold text-lg">
						Price
					</p>
					<span
						className={`text-gray text-xl filter-title-icon ${
							!isPriceFilterOpen ? "rotate" : ""
						}`}>
						<i className="bi bi-chevron-up"></i>
					</span>
				</FilterTitle>

				<FilterWrap
					className={`range filter-wrap ${!isPriceFilterOpen ? "hide" : "show"}`}>
					<div className="range-slider">
						<span
							className="range-selected h-full bg-sea-green"
							style={{
								left: calculateRangePosition(minRange, 1000),
								right: calculateRangePosition(1000 - maxRange, 1000),
							}}></span>
					</div>
					<div className="range-input">
						<input
							type="range"
							className="min w-full"
							min={0}
							max={1000}
							value={minRange}
							step={10}
							name="min"
							onChange={handleInputChange}
						/>
						<input
							type="range"
							className="min w-full"
							min={0}
							max={1000}
							value={maxRange}
							step={10}
							name="max"
							onChange={handleInputChange}
						/>
					</div>

					<div className="range-price w-full flex items-center">
						<input
							type="number"
							name="min"
							value={minRange}
							className="text-center"
							onChange={handleInputChange}
						/>
						<input
							type="number"
							name="max"
							value={maxRange}
							className="text-center"
							onChange={handleInputChange}
						/>
					</div>
				</FilterWrap>
			</PriceFilter>

			<ColorsFilter>
				<FilterTitle
					className="flex items-center justify-between"
					onClick={() => toggleFilter("color")}>
					<p className="filter-title-text text-gray text-base font-semibold text-lg">
						Colors
					</p>
					<span
						className={`text-gray text-xl filter-title-icon ${
							!isColorFilterOpen ? "rotate" : ""
						}`}>
						<i className="bi bi-chevron-up"></i>
					</span>
				</FilterTitle>

				<FilterWrap className={`${!isColorFilterOpen ? "hide" : "show"}`}>
					<div className="colors-list grid">
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color1} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color2} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color3} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color4} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color5} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color6} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color7} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color8} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color9} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color10} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color11} alt="Color Icon" />
						</div>
						<div className="colors-item text-center flex flex-col justify-center items-center">
							<input type="checkbox" />
							<img src={staticImages.color12} alt="Color Icon" />
						</div>
					</div>
				</FilterWrap>
			</ColorsFilter>

			<SizesFilter>
				<FilterTitle
					className="flex items-center justify-between"
					onClick={() => toggleFilter("size")}>
					<p className="filter-title-text text-gray text-base font-semibold text-lg">
						Sizes
					</p>
					<span
						className={`text-gray text-xl filter-title-icon ${
							!isSizeFilterOpen ? "rotate" : ""
						}`}>
						<i className="bi bi-chevron-up"></i>
					</span>
				</FilterTitle>

				<FilterWrap className={`${!isSizeFilterOpen ? "hide" : "show"}`}>
					<div className="sizes-list grid text-center justify-center">
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">xxs</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">xs</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">s</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">m</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">l</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">xl</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">xxl</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">3xl</span>
						</div>
						<div className="sizes-item text-sm font-semibold text-outerspace w-full">
							<input type="checkbox" />
							<span className="flex items-center justify-center uppercase">4xl</span>
						</div>
					</div>
				</FilterWrap>
			</SizesFilter>

			<StyleFilter>
				<FilterTitle
					className="flex items-center justify-between"
					onClick={() => toggleFilter("style")}>
					<p className="filter-title-text text-gray text-base font-semibold text-lg">
						Dress Style
					</p>
					<span
						className={`text-gray text-xl filter-title-icon ${
							isStyleFilterOpen ? "rotate" : ""
						}`}>
						<i className="bi bi-chevron-up"></i>
					</span>
				</FilterTitle>

				<FilterWrap className={`${isStyleFilterOpen ? "hide" : "show"}`}>
					{StyleFilterList?.map((styleFilter) => {
						return (
							<div className="style-filter-item" key={styleFilter.id}>
								<button
									type="button"
									className="filter-item-head w-full flex flex-items-center justify-between">
									<span className="filter-head-title text-base text-gray font-semibold">
										{styleFilter.title}
									</span>
									<span className="filter-head-icon text-gray">
										<i className="bi bi-chevron-right"></i>
									</span>
								</button>
							</div>
						);
					})}
				</FilterWrap>
			</StyleFilter>
		</>
	);
};

export default ProductsFilter;
