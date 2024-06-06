import styled from 'styled-components';
import { Input } from '../../style/form';
import { breakpoints, defaultTheme } from '../../style/themes/default';
import { cardsData } from '../../data/data';
import { BaseButtonGreen } from '../../style/button';

const ShippingPaymentWrapper = styled.div`
  .shipping-address,
  .shipping-method,
  .payment-method {
    margin-block: 20px;
    &-title {
      margin-bottom: 8px;
    }
    .list-group {
      padding: 24px;
      background-color: ${defaultTheme.color_whitesmoke};
      max-width: 818px;
      margin-top: 24px;
      border-radius: 12px;

      @media only screen and (max-width: ${breakpoints.sm}) {
        padding: 16px;
        border-radius: 8px;
        margin-top: 16px;
      }
    }
    .list-group-item {
      column-gap: 20px;
    }
  }
  .horiz-line-seperator {
    margin-block: 30px;

    @media only screen and (max-width: ${breakpoints.sm}) {
      margin-block: 12px;
    }
  }

  .payment-method {
    .list-group-item {
      &-head {
        column-gap: 20px;
      }
    }
    .payment-cards {
      gap: 20px;
      margin: 24px 0 30px 34px;

      @media only screen and (max-width: ${breakpoints.lg}) {
        gap: 16px;
      }
      @media only screen and (max-width: ${breakpoints.sm}) {
        margin-block: 16px;
        gap: 10px;
        margin-left: 0;
      }

      .payment-card {
        position: relative;
        width: 80px;
        height: 46px;
        input {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 46px;
          z-index: 10;
          cursor: pointer;

          &:checked {
            & + .card-wrapper {
              .card-selected {
                display: inline-block;
                position: absolute;
                top: -8px;
                right: -5px;
                width: 14px;
                height: 14px;
              }
            }
          }
        }
        .card-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);

          .card-selected {
            display: none;
            transition: ${defaultTheme.default_transition};
          }
        }
      }
    }
    .payment-details {
      margin-left: 34px;
      display: grid;
      row-gap: 16px;

      @media only screen and (max-width: ${breakpoints.sm}) {
        margin-left: 0;
      }

      .form-element-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;

        @media only screen and (max-width: ${breakpoints.sm}) {
          grid-template-columns: 100%;
          gap: 0;
        }
      }
      .form-element {
        height: 40px;
        border: 1px solid ${defaultTheme.color_platinum};
        border-radius: 6px;
        padding: 16px;
        &:focus {
          border-color: ${defaultTheme.color_sea_green};
        }
        @media only screen and (max-width: ${breakpoints.sm}) {
          border-bottom: 10px;
          border-radius: 4px;
        }
      }
    }
  }
  .pay-now-btn {
    @media only screen and (max-width: ${breakpoints.sm}) {
      width: 100%;
    }
  }
`;
const ShippingPayment = () => {
  return (
    <ShippingPaymentWrapper>
      <div className='shipping-address'>
        <h3 className='text-xxl shipping-address-title'>Shipping Adress</h3>
        <p className='text-base text-outerspace'>
          Select the address that matches your card or payment method.
        </p>
        <div className='list-group'>
          <div className='list-group-item flex items-center'>
            <Input type='radio' name='shipping_address' />
            <span className='font-semibold text-lg'>Same as Billing address</span>
          </div>
          <div className='horiz-line-seperator'></div>
          <div className='list-group-item flex items-center'>
            <Input type='radio' name='shipping_address' />
            <span className='font-semibold text-lg'>Use a diffrent shipping address</span>
          </div>
        </div>
      </div>

      <div className='shipping-method'>
        <h3 className='text-xxl shipping-method-title'>Shipping Adress</h3>
        <p className='text-base text-outerspace'>
          Select the address that matches with your payment method.
        </p>
        <div className='list-group'>
          <div className='list-group-item flex items-center'>
            <div className='font-semibold text-lg'>Arrives by Monday, Jun 7</div>
          </div>
          <div className='horiz-line-seperator'></div>
          <div className='list-group-item flex items-start justify-between'>
            <p className='font-semibold text-lg'>
              Delivery Charges &nbsp;
              <span className='flex text-base font-medium'>
                Additional fees may apply
              </span>
            </p>
            <span className='font-semibold text-lg'>$5.00</span>
          </div>
        </div>
      </div>

      <div className='payment-method'>
        <h3 className='text-xxl payment-method-title'>Payment Method</h3>
        <p className='text-base text-outerspace'>
          All transactions are secure and encrypted.
        </p>

        <div className='list-group'>
          <div className='list-group-item'>
            <div className='flex items-center list-group-item-head'>
              <Input
                type='radio'
                name='payment_method'
                className='list-group-item-check'
              />
              <p className='font-semibold text-lg'>
                Credit Card
                <span className='flex text-base font-medium text-gray'>
                  We accept all major credit cards.
                </span>
              </p>
            </div>

            <div className='payment-cards flex flex-wrap'>
              {cardsData?.map(card => {
                return (
                  <div
                    className='payment-card flex items-center justify-center'
                    key={card.id}>
                    <Input type='radio' name='payment_cards' />
                    <div className='card-wrapper bg-white w-full h-full flex items-center justify-center'>
                      <img src={card.imgSource} alt='Payment_card' />
                      <div className='card-selected text-sea-green'>
                        <i className='bi bi-check-circle-fill'></i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='payment-details'>
              <div className='form-element-group'>
                <Input type='text' className='form-element' placeholder='Card number' />
                <Input type='text' className='form-element' placeholder='Name of card' />
              </div>
              <div className='form-element-group'>
                <Input
                  type='text'
                  className='form-element'
                  placeholder='Expiration data (MM/YY)'
                />
                <Input type='text' className='form-element' placeholder='Security Code' />
              </div>
            </div>
          </div>

          <div className='horiz-line-seperator'></div>
          <div className='list-group-item flex items-center'>
            <Input type='radio' name='payment_method' className='list-group-item-check' />
            <p className='font-semibold text-lg'>
              Cash on delivery
              <span className='flex text-base font-medium text-gray'>
                Pay with cash upon delivery.
              </span>
            </p>
          </div>
          <div className='horiz-line-seperator'></div>
          <div className='list-group-item flex items-center'>
            <Input type='radio' name='payment_method' className='list-group-item-check' />
            <p className='font-semibold text-lg'>Paypal</p>
          </div>
        </div>
      </div>

      <BaseButtonGreen type='submit' className='pay-now-btn'>
        Pay Now
      </BaseButtonGreen>
    </ShippingPaymentWrapper>
  );
};

export default ShippingPayment;
