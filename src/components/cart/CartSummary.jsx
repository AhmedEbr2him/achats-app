import styled from 'styled-components';
import { BaseButtonGreen } from '../../style/button';
import { breakpoints, defaultTheme } from '../../style/themes/default';

const CartSummaryWrapper = styled.div`
  background-color: ${defaultTheme.color_flash_white};
  padding: 16px;
  .summary-list {
    padding: 20px;

    @media only screen and (max-width: ${breakpoints.xs}) {
      padding-top: 0;
      padding-inline: 0;
    }

    .summary-item {
      margin-block: 6px 0;

      &:last-child {
        margin-top: 20px;
        padding-top: 10px;
        border-top: 1px dashed ${defaultTheme.color_sea_green};
      }
    }
  }
  .checkout-btn {
    min-width: 100%;
  }
`;
const CartSummary = () => {
  return (
    <CartSummaryWrapper>
      <ul className='summary-list'>
        <li className='summary-item flex justify-between'>
          <span className='font-medium text-outerspace'>Sub Total</span>
          <span className='font-medium text-outerspace'>$513.00</span>
        </li>
        <li className='summary-item flex justify-between'>
          <span className='font-medium text-outerspace'>Shipping</span>
          <span className='font-medium text-outerspace'>$5.00</span>
        </li>
        <li className='summary-item flex justify-between'>
          <span className='font-medium text-outerspace'>Grand Total</span>
          <span className='summary-item-value font-bold text-outerspace'>$518.00</span>
        </li>
      </ul>
      <BaseButtonGreen type='submit' className='checkout-btn'>
        Proceed To Checkout
      </BaseButtonGreen>
    </CartSummaryWrapper>
  );
};

export default CartSummary;
