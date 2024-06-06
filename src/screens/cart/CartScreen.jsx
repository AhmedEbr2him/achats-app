import styled from 'styled-components';
import { Container } from '../../style/style';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import { cartItems } from '../../data/data';
import CartTable from '../../components/cart/CartTable';
import { breakpoints } from '../../style/themes/default';
import CartDiscount from '../../components/cart/CartDiscount';
import CartSummary from '../../components/cart/CartSummary';
const CartScreenWrapper = styled.main`
  padding: 48px 0;
  .breadcrumb-nav {
    margin-bottom: 20px;
  }
`;
const CartContent = styled.div`
  margin-top: 40px;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  @media only screen and (max-width: ${breakpoints.xl}) {
    grid-template-columns: 100%;
  }
  @media only screen and (max-width: ${breakpoints.sm}) {
    margin-top: 24px;
  }

  .cart-content-right {
    gap: 24px;

    @media only screen and (max-width: ${breakpoints.xl}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: ${breakpoints.md}) {
      grid-template-columns: 100%;
    }
  }
`;
const CartScreen = () => {
  const breadcrumbItems = [
    {
      label: 'Home',
      link: '/cart',
    },
    {
      label: 'Add To Cart',
      link: '',
    },
  ];
  return (
    <div>
      <CartScreenWrapper>
        <Container>
          <Breadcrumb items={breadcrumbItems} />

          <div className='cart-head'>
            <p className='text-base text-gray'>
              Please fill in the fields below and click place order to complete your
              purchase!
            </p>
            <p className='text-gray text-base'>
              Already registered?&nbsp;
              <Link to='/sign_in' className='text-sea-green font-medium text-underline'>
                Please login here
              </Link>
            </p>
          </div>

          <CartContent className='grid items-start'>
            <div className='grid cart-content-left'>
              <CartTable cartItems={cartItems} />
            </div>
            <div className='grid cart-content-right items-center'>
              <CartDiscount />
              <CartSummary />
            </div>
          </CartContent>
        </Container>
      </CartScreenWrapper>
    </div>
  );
};

export default CartScreen;
