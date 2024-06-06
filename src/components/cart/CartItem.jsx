import PropTypes from 'prop-types';
import styled from 'styled-components';
import { currencyFormate } from '../../utils/helper';
import { Link } from 'react-router-dom';
import { breakpoints, defaultTheme } from '../../style/themes/default';

const CartTableRowWrapper = styled.tr`
  .cart-table {
    &-product {
      display: grid;
      grid-template-columns: 80px auto;
      gap: 12px;
      @media only screen and (max-width: ${breakpoints.lg}) {
        grid-template-columns: 60px auto;
      }
    }
    &-qty {
      .qty-inc-btn,
      .qty-dec-btn {
        width: 24px;
        height: 24px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 2px;

        &:hover {
          border-color: ${defaultTheme.color_sea_green};
          background-color: ${defaultTheme.color_sea_green};
          color: ${defaultTheme.color_white};
        }
      }
      .qty-value {
        width: 40px;
        height: 24px;
      }
    }
  }
  .cart-product-info {
    p {
      margin-right: 8px;
      span {
        margin-right: 4px;
      }
    }
  }
  .cart-product-img {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 8px;

    @media only screen and (max-width: ${breakpoints.xl}) {
      width: 60px;
      height: 60px;
    }
  }
`;

const CartItem = ({ cartItem }) => {
  return (
    <CartTableRowWrapper key={cartItem.id}>
      <td>
        <div className='cart-table-product grid'>
          <div className='cart-product-img'>
            <img
              src={cartItem.imgSource}
              alt={cartItem.title}
              className='object-fit-cover'
            />
          </div>

          <div className='cart-product-info'>
            <h4 className='text-base'>{cartItem.title}</h4>
            <p className='text-sm text-gray inline-flex'>
              <span className='font-semibold'>Color:&nbsp;{cartItem.color}</span>
            </p>
            <p className='text-sm text-gray inline-flex'>
              <span className='font-semibold'>Size:&nbsp;{cartItem.size}</span>
            </p>
          </div>
        </div>
      </td>

      <td>
        <span className='text-lg font-bold text-outerspace'>
          {currencyFormate(cartItem.price)}
        </span>
      </td>

      <td>
        <div className='cart-table-qty flex items-center'>
          <button className='qty-dec-btn'>
            <i className='bi bi-dash-lg'></i>
          </button>
          <span className='qty-value inline-flex items-center justify-center font-medium text-outerspace'>
            {cartItem.quantity}
          </span>
          <button className='qty-inc-btn'>
            <i className='bi bi-plus-lg'></i>
          </button>
        </div>
      </td>

      <td>
        <span className='cart-table-shipping uppercase text-silver font-bold'>
          {cartItem.shipping === 0 ? 'Free' : currencyFormate(cartItem.shipping)}
        </span>
      </td>

      <td>
        <span className='text-lg font-bold text-outerspace'>
          {currencyFormate(cartItem.price * cartItem.quantity)}
        </span>
      </td>

      <td>
        <div className='cart-table-actions flex justify-center'>
          <Link to='/' className='table-delete-action text-red'>
            <i className='bi bi-trash'></i>
          </Link>
        </div>
      </td>
    </CartTableRowWrapper>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};
export default CartItem;
