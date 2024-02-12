import { format } from 'date-fns';

type InputProps = { disabled?: boolean; class?: string };

const inputClassNameMaker = (baseClass: string) => {
  return ({ disabled, class: class_ }: InputProps) => {
    const classes = [baseClass];
    if (class_) {
      classes.push(class_);
    }
    if (disabled) {
      classes.push('disabled');
    }
    return classes.join(' ');
  };
};

export const inputClass = inputClassNameMaker('tui-input');
export const checkboxClass = inputClassNameMaker('tui-checkbox');
export const radioClass = inputClassNameMaker('tui-radio');
export const optionSpanClass = inputClassNameMaker('tui-option-span');
export const fieldsetClass = inputClassNameMaker('tui-fieldset');
export const selectClass = inputClassNameMaker('tui-input');

let id = 0;

export const getId = () => {
  id += 1;
  return id;
};
export type ValueFunction = (value: number) => string;
export const defaultScaler: ValueFunction = (value: number) => `${value}%`;

export const dateString = (formatString: string) => {
  return format(new Date(), formatString);
};
