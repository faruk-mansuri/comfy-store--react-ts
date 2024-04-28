import { useAppSelector } from '@/hooks';
import { Card } from './ui/card';
import {
  FirstColumn,
  FourthColumn,
  SecondColumn,
  ThirdColumn,
} from './CartItemColumn';

const CartItemsList = () => {
  const { cartItems } = useAppSelector((store) => store.cartState);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartID, price, title, image, amount, company, productColor } =
          cartItem;
        return (
          <Card
            className='flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8'
            key={cartItem.cartID}
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;
