import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from './ui/label';

interface FormSelectInputProps {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
}
const FormSelect = ({
  label,
  name,
  defaultValue,
  options,
}: FormSelectInputProps) => {
  return (
    <div className='mb-2'>
      <Label className='capitalize' htmlFor={name}>
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
