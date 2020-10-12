export type ButtonProps = {
  btnClass: string;
  text: string;
  value: string;
  disabled: boolean;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};