import SwitchCustom from "@/components/ui/Switch";
import { SwitchProps } from "@mui/material/Switch";
export interface SwitchCustomProps extends SwitchProps {
  /**
   * Icon size {string}
   */
  iconSize?: string;
  /**
   * Label to show on top {string}
   */
  label?: string;
  /**
   * Function to call on click {function}
   */
  onClick?: () => void;
  /**
   * Icon to show on left {React.ElementType}
   */
  leftIcon?: React.ElementType;
  /**
   * Icon to show on right {React.ElementType}
   */
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
  disabled,
  rightIcon,
  color,
  size,
  ...props
}: SwitchCustomProps) => {
  return (
    <SwitchCustom
      size={size}
      label={label}
      disabled={disabled}
      color={color}
      iconSize={iconSize}
      onClick={() => {}}
      {...props}
    />
  );
};
