import styled from 'styled-components';
import { orderData } from '../../data/data';
import { currencyFormate } from '../../utils/helper';
import { breakpoints, defaultTheme } from '../../style/themes/default';

const CheckoutSummaryWrapper = styled.div`
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05), -2px -2px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 40px;

  @media only screen and (max-width: ${breakpoints.xl}) {
    padding: 24px;
  }
  @media only screen and (max-width: ${breakpoints.sm}) {
    padding: 16px;
  }
  @media only screen and (max-width: ${breakpoints.xs}) {
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }

  .order-list {
    row-gap: 24px;

    @media only screen and (max-width: ${breakpoints.xs}) {
      row-gap: 16px;
    }
  }
  .order-item {
    grid-template-columns: 60px auto;
    gap: 16px;

    @media only screen and (max-width: ${breakpoints.xs}) {
      align-items: center;
    }
    &-img {
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 4px;
    }
    &-info {
      gap: 16px;

      @media only screen and (max-width: ${breakpoints.xs}) {
        flex-direction: column;
        gap: 6px;
      }
    }
  }
  .order-info {
    margin-top: 30px;
    @media only screen and (max-width: ${breakpoints.sm}) {
      margin-top: 20px;
    }
    li {
      margin-block: 6px;
    }
    .list-separator {
      display: block;
      height: 1px;
      background-color: ${defaultTheme.color_anti_flash_white};
      margin-block: 12px;
    }
  }
`;

const CheckoutSummary = () => {
  return (
    <CheckoutSummaryWrapper>
      <h4 className='text-xxl font-bold text-outerspace'>Check Order Summary</h4>
      <div className='order-list grid'>
        {orderData[0]?.items?.map(order => {
          return (
            <div className='order-item grid' key={order.id}>
              <div className='order-item-img'>
                <img
                  src={order.imgSource}
                  alt={order.name}
                  className='object-fit-cover'
                />
              </div>

              <div className='order-item-info flex justify-between'>
                <div className='order-item-info-l'>
                  <p className='text-base font-bold text-outerspace'>
                    {order.name}
                    <span className='text-gray'>{order.quantity}</span>
                  </p>
                  <p className='text-base font-bold text-outerspace'>
                    Color:&nbsp;
                    <span className='text-gray font-normal'>{order.color}</span>
                  </p>
                </div>

                <div className='order-item-info-r text-gray font-bold text-base'>
                  {currencyFormate(order.price)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ul className='order-info'>
        <li className='flex items-center justify-between'>
          <span className='text-outerspace font-bold text-lg'>
            Subtotal <span className='text-gray font-semiblod'>(3 Items)</span>
          </span>
          <span className='text-outerspace font-bold text-lg'>$513.00</span>
        </li>
        <li className='flex items-center justify-between'>
          <span className='text-outerspace font-bold text-lg'>Savings</span>
          <span className='text-outerspace font-bold text-lg'>-$30.00</span>
        </li>
        <li className='flex items-center justify-between'>
          <span className='text-outerspace font-bold text-lg'>Shipping</span>
          <span className='text-outerspace font-bold text-lg'>$5.00</span>
        </li>
        <span className='span list-separator'></span>
        <li className='flex items-center justify-between'>
          <span className='text-outerspace font-bold text-lg'>Total</span>
          <span className='text-outerspace font-bold text-lg'>$478.00</span>
        </li>
      </ul>
    </CheckoutSummaryWrapper>
  );
};

export default CheckoutSummary;
