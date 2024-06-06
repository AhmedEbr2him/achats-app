import styled from 'styled-components';
import { Container } from '../../style/style';
import Breadcrumb from '../../components/common/Breadcrumb';
import { product_one } from '../../data/data';
import ProductPreview from '../../components/products/ProductPreview';
import { Link } from 'react-router-dom';
import { BaseLinkGreen } from '../../style/button';
import { currencyFormate } from '../../utils/helper';
import { breakpoints, defaultTheme } from '../../style/themes/default';
import ProductDescriptionTab from '../../components/products/ProductDescriptionTab';
import ProductSimilar from '../../components/products/ProductSimilar';
import ProductServices from '../../components/products/ProductServices';

const DetailsScreenWrapper = styled.main`
  margin-block: 40px;
`;

const DetailsContent = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media only screen and (max-width: ${breakpoints.xl}) {
    grid-template-columns: 3fr 2fr;
    gap: 24px;
  }
  @media only screen and (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
  }
`;

const ProductDetailsWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media only screen and (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
  @media only screen and (max-width: ${breakpoints.xs}) {
    padding: 12px;
  }

  .product-title {
    margin-bottom: 10px;
  }
  .rating-and-comments {
    column-gap: 16px;
    margin-bottom: 20px;
  }
  .product-rating {
    column-gap: 10px;
  }
  .product-comments {
    column-gap: 10px;
  }
  .btn-and-price {
    margin-top: 36px;
    column-gap: 16px;
    row-gap: 10px;
  }
  .product-add-btn {
    min-width: 160px;
    column-gap: 8px;
    &-text {
      margin-top: 2px;
    }

    @media only screen and (max-width: ${breakpoints.sm}) {
      margin-top: 24px;
    }
  }
`;

const ProductsSizeWrapper = styled.div`
  .product-size-top {
    gap: 20px;
  }
  .product-size-list {
    gap: 12px;
    margin-top: 16px;
    @media only screen and (max-width: ${breakpoints.sm}) {
      gap: 8px;
    }
  }
  .product-size-item {
    position: relative;
    height: 38px;
    width: 38px;
    cursor: pointer;

    @media only screen and (max-width: ${breakpoints.sm}) {
      height: 32px;
      width: 32px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      cursor: inherit;
      opacity: 0;

      @media only screen and (max-width: ${breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }

      &:checked + span {
        color: ${defaultTheme.color_white};
        background-color: ${defaultTheme.color_outerspace};
        border-color: ${defaultTheme.color_outerspace};
      }
    }
    span {
      width: inherit;
      height: inherit;
      border-radius: 8px;
      border: 1px solid ${defaultTheme.color_silver};
      text-transform: uppercase;

      @media only screen and (max-width: ${breakpoints.sm}) {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

const ProductColorWrapper = styled.div`
  margin-top: 32px;

  @media only screen and (max-width: ${breakpoints.sm}) {
    margin-top: 24px;
  }

  .product-color-top {
    margin-bottom: 16px;
  }
  .product-colors-list {
    column-gap: 12px;
  }
  .product-colors-item {
    position: relative;
    width: 22px;
    height: 22px;
    transition: ${defaultTheme.default_transition};

    &:hover {
      scale: 0.9;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      opacity: 0;
      cursor: pointer;

      &:checked + span {
        outline: 1px solid ${defaultTheme.color_gray};
        outline-offset: 3px;
      }
    }

    .product-colorbox {
      border-radius: 100%;
      width: inherit;
      height: inherit;
      display: inline-block;
    }
  }
`;

const ProductDetails = () => {
  const breadcrumb = [
    {
      label: 'Shop',
      link: '',
    },
    {
      label: 'Women',
      link: '',
    },
    {
      label: 'Top',
      link: '',
    },
  ];

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`text-yellow ${
        index < Math.floor(product_one.rating)
          ? 'bi bi-star-fill'
          : index + 0.5 === product_one.rating
          ? 'bi bi-star-half'
          : 'bi bi-star'
      }`}></span>
  ));

  return (
    <DetailsScreenWrapper>
      <Container>
        <Breadcrumb items={breadcrumb} />

        <DetailsContent className='grid'>
          <ProductPreview previewImages={product_one.previewImages} />

          <ProductDetailsWrapper>
            <h2 className='product-title'>{product_one.title}</h2>
            <div className='rating-and-comments flex items-center flex-wrap'>
              <div className=' product-rating flex items-center'>
                {stars}
                <span className='text-gray text-xs'>{product_one.rating}</span>
              </div>

              <div className='product-comments flex items-center'>
                <span className='product-comment-icon text-gray'>
                  <i className='bi bi-chat-left-text'></i>
                </span>

                <button className='product-comment-text text-underline text-sm text-gray'>
                  {product_one.comments_count} comment(s)
                </button>
              </div>
            </div>

            <ProductsSizeWrapper>
              <div className='product-size-top flex items-center flex-wrap'>
                <p className='text-lg font-semibold text-outerspace'>Select size</p>

                <Link to='/' className='text-lg text-gray font-medium'>
                  Size Guide &nbsp; <i className='bi bi-arrow-right'></i>
                </Link>
              </div>

              <div className='product-size-list flex items-center'>
                {product_one.sizes.map((size, index) => {
                  return (
                    <div className='product-size-item' key={index}>
                      <input type='radio' name='size' />
                      <span className='flex items-center justify-center font-medium text-outerspace text-sm'>
                        {size}
                      </span>
                    </div>
                  );
                })}
              </div>
            </ProductsSizeWrapper>

            <ProductColorWrapper>
              <div className='product-color-top flex items-center flex-wrap'>
                <p className='text-lg font-semibold text-outerspace'>Colors Available</p>
              </div>

              <div className='product-colors-list flex items-center'>
                {product_one?.colors?.map((color, index) => {
                  return (
                    <div className='product-colors-item' key={index}>
                      <input type='radio' name='color' />
                      <span
                        className='product-colorbox'
                        style={{ background: `${color}` }}></span>
                    </div>
                  );
                })}
              </div>
            </ProductColorWrapper>

            <div className='btn-and-price flex items-center flex-wrap'>
              <BaseLinkGreen to='/cart' as={BaseLinkGreen} className='product-add-btn'>
                <span className='product-add-btn-icon'>
                  <i className='bi bi-cart2'></i>
                </span>

                <span className='product-add-btn-text'>Add to cart</span>
              </BaseLinkGreen>

              <span className='product-price text-xl font-bold text-outerspace'>
                {currencyFormate(product_one.price)}
              </span>
            </div>

            <ProductServices />
          </ProductDetailsWrapper>
        </DetailsContent>

        <ProductDescriptionTab />

        <ProductSimilar />
      </Container>
    </DetailsScreenWrapper>
  );
};

export default ProductDetails;
