import styled from 'styled-components';
import { Input } from '../../style/form';
import { BaseButtonGreen } from '../../style/button';
import { breakpoints, defaultTheme } from '../../style/themes/default';
import CheckoutSummary from './CheckoutSummary';

const BillingOrderWrapper = styled.div`
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  @media only screen and (max-width: ${breakpoints.xl}) {
    gap: 40px;
  }
  @media only screen and (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    gap: 30px;
  }
`;
const BillingDetailsWrapper = styled.div`
  @media only screen and (max-width: ${breakpoints.lg}) {
    order: 2;
  }
  .checkout-form {
    margin-top: 24px;
    .input-element {
      margin-bottom: 16px;
      @media only screen and (max-width: ${breakpoints.xs}) {
        margin-bottom: 10px;
      }
      label {
        display: block;
        margin-bottom: 8px;
      }
      input,
      select {
        height: 40px;
        border-radius: 4px;
        background-color: ${defaultTheme.color_whitesmoke};
        padding-inline: 12px;
        width: 100%;
        border: 1px solid ${defaultTheme.color_platinum};
        outline: none;

        &::placeholder {
          font-style: 12px;
        }
      }
    }

    .element-col-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;

      @media only screen and (max-width: ${breakpoints.lg}) {
        column-gap: 12px;
      }
      @media only screen and (max-width: ${breakpoints.md}) {
        grid-template-columns: 100%;
      }
    }
    .element-col-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 24px;

      @media only screen and (max-width: ${breakpoints.lg}) {
        column-gap: 12px;
      }
      @media only screen and (max-width: ${breakpoints.md}) {
        grid-template-columns: 100%;
      }
    }

    .input-check-group {
      column-gap: 10px;
      margin-top: 16px;
    }
    .contd-delivery-btn {
      margin-top: 10px;

      @media only screen and (max-width: ${breakpoints.sm}) {
        width: 100%;
      }
    }
  }
`;

const Billing = () => {
  return (
    <BillingOrderWrapper className='billing-and-order grid items-start'>
      <BillingDetailsWrapper>
        <h4 className='text-xxl font-bold text-outerspace'>Billing Details</h4>
        <form className='checkout-form'>
          <div className='input-element-group element-col-2'>
            <div className='input-element'>
              <label
                htmlFor='firstName'
                className='text-base text-outerspace font-semibold'>
                First Name*
              </label>
              <Input type='text' placeholder='First Name' id='firstName' />
            </div>
            <div className='input-element'>
              <label
                htmlFor='lastName'
                className='text-base text-outerspace font-semibold'>
                Last Name*
              </label>
              <Input type='text' placeholder='Last Name' id='lastName' />
            </div>
            <div className='input-element'>
              <label
                htmlFor='countryOrRegion'
                className='text-base text-outerspace font-semibold'>
                Country / Region*
              </label>
              <Input type='text' placeholder='Country / Region' id='countryOrRegion' />
            </div>
            <div className='input-element'>
              <label
                htmlFor='companyName'
                className='text-base text-outerspace font-semibold'>
                Company Name*
              </label>
              <Input type='text' placeholder='Company (optional)' id='companyName' />
            </div>
          </div>
          <div className='input-element-group element-col-2'>
            <div className='input-element'>
              <label
                htmlFor='streetAdress'
                className='text-base text-outerspace font-semibold'>
                Street Adress*
              </label>
              <Input
                type='text'
                placeholder='House number and street name'
                id='streetAdress'
              />
            </div>
            <div className='input-element'>
              <label
                htmlFor='aptOrSuitOrUnit'
                className='text-base text-outerspace font-semibold'>
                Apt, suite, unit*
              </label>
              <Input
                type='text'
                placeholder='apartment, suite, unit, etc. (optional)'
                id='aptOrSuitOrUnit'
              />
            </div>
          </div>
          <div className='input-element-group element-col-3'>
            <div className='input-element'>
              <label htmlFor='city' className='text-base text-outerspace font-semibold'>
                City*
              </label>
              <Input type='text' placeholder='Town / City' id='city' />
            </div>
            <div className='input-element'>
              <label htmlFor='states' className='text-base text-outerspace font-semibold'>
                State*
              </label>
              <select id='states'>
                <option value='' disabled>
                  state
                </option>
                <option value=''>state 1</option>
                <option value=''>state 2</option>
              </select>
            </div>

            <div className='input-element'>
              <label
                htmlFor='postalCode'
                className='text-base text-outerspace font-semibold'>
                Postal Code*
              </label>
              <Input type='text' placeholder='Postal Code' id='postalCode' />
            </div>
          </div>

          <div className='input-element-group element-col-2'>
            <div className='input-element'>
              <label htmlFor='phone' className='text-base text-outerspace font-semibold'>
                Phone*
              </label>
              <Input type='text' placeholder='Phone' id='phone' />
            </div>
          </div>

          <BaseButtonGreen type='submit' className='contd-delivery-btn'>
            Continue to delivery
          </BaseButtonGreen>
          <div className='input-check-group flex items-center flex-wrap'>
            <Input type='checkbox' />
            <p className='text-base'>Save my information for a faster checkout.</p>
          </div>
        </form>
      </BillingDetailsWrapper>
      <CheckoutSummary />
    </BillingOrderWrapper>
  );
};

export default Billing;
