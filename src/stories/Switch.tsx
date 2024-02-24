import SwitchCustom from "@/components/ui/Switch";

export interface SwitchProps {
  iconSize?: string;
  label?: string;
  onClick?: () => void;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
}

/**
 * Primary UI component for user interaction
 */
export const Switch = ({
  iconSize,
  onClick,
  leftIcon,
  label,
  rightIcon,
  ...props
}: SwitchProps) => {
  return <SwitchCustom size="small" onClick={() => {}} {...props} />;
};
