import styled from 'styled-components';
import { Container } from '../../style/style';
import { staticImages } from '../../utils/images';
import { BaseLinkGreen } from '../../style/button';
const CartEmptyScreenWrapper = styled.main`
  margin: 24px 0;
  .empty-cart-img {
    width: 240px;
    overflow: hidden;
  }
  .empty-cart-msg {
    border-radius: 6px;
    padding-block: 24px;
    margin-top: 16px;
    max-width: 400px;
    gap: 12px;
  }
`;

const CartEmptyScreen = () => {
  return (
    <CartEmptyScreenWrapper>
      <Container>
        <div className='flex items-center justify-center flex-col'>
          <div className='empty-cart-img'>
            <img
              src={staticImages.empty_cart_img}
              alt='Empty_Cart'
              className='object-fit-cover'
            />
          </div>
          <div className='empty-cart-msg w-full flex flex-col justify-center items-center'>
            <p className='text-4xl text-center font-semibold text-outerspace'>
              Your cart is empty and sad :(
            </p>
            <p className='text-gray italic'>Add something to fill it!</p>

            <BaseLinkGreen to={'/'}>Continue Shopping</BaseLinkGreen>
          </div>
        </div>
      </Container>
    </CartEmptyScreenWrapper>
  );
};

export default CartEmptyScreen;
