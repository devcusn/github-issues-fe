export type SelectOption = Array<{
  title: string | React.ReactElement;
  value: string;
}>;
export type SelectProps = {
  title: string;
  subTitle?: string;
  options?: SelectOption;
};
export type SelectPopperProps = {
  toggleHandler: () => void;
  title: string;
  options?: SelectOption;
};
