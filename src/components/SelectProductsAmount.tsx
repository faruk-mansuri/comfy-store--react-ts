import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export enum Mode {
  SingleProduct,
  CartItem,
}

interface SelectProductsAmountProps {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}
interface SelectCartItemAmountProps {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => void;
}

const SelectProductsAmount = ({
  mode,
  amount,
  setAmount,
}: SelectProductsAmountProps | SelectCartItemAmountProps) => {
  const cartItem = mode === Mode.CartItem;

  return (
    <>
      <h4 className='font-medium mb-2'>Amount : </h4>
      <Select
        defaultValue={amount.toString()}
        onValueChange={(value) => setAmount(Number(value))}
      >
        <SelectTrigger className={cartItem ? 'w-[75px]' : 'w-[150px]'}>
          <SelectValue />
          {/* <SelectValue placeholder={amount} /> */}
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
            const selectedValue = (index + 1).toString();
            return (
              <SelectItem key={selectedValue} value={selectedValue}>
                {selectedValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectProductsAmount;
