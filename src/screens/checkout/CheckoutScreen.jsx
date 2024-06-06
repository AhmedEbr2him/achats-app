import styled from 'styled-components';
import { Container } from '../../style/style';
import Title from '../../components/common/Title';
import Billing from '../../components/checkout/Billing';
import ShippingPayment from '../../components/checkout/ShippingPayment';
import { breakpoints, defaultTheme } from '../../style/themes/default';
const CheckoutScreenWrapper = styled.main`
  padding: 48px 0;

  .horiz-line-seperator {
    height: 1px;
    background-color: ${defaultTheme.color_anti_flash_white};
    max-width: 818px;
    margin-block: 30px;

    @media only screen and (max-width: ${breakpoints.sm}) {
      margin-block: 20px;
    }
  }
`;
const CheckoutScreen = () => {
  return (
    <CheckoutScreenWrapper>
      <Container>
        <Title titleText={'Check Out'} />
        <Billing />
        <div className='horiz-line-seperator w-full'></div>
        <ShippingPayment />
      </Container>
    </CheckoutScreenWrapper>
  );
};

export default CheckoutScreen;
