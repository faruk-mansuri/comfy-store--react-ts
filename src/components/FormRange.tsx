import { formatAsDollars } from '@/utils';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { useState } from 'react';

interface FormRangeProps {
  name: string;
  label?: string;
  defaultValue?: string;
}

const FormRange = ({ name, label, defaultValue }: FormRangeProps) => {
  const step = 10 * 100;
  const maxPrice = 1000 * 100;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize flex justify-between'>
        {label || name}
        <span>{formatAsDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={([value]) => setSelectedPrice(value)}
        className='mt-4'
      />
    </div>
  );
};

export default FormRange;
