import React from 'react';

export type ButtonVariant =
  | 'primary-pink'
  | 'primary-blue'
  | 'secondary-light'
  | 'secondary-dark'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidthOnMobile?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary-pink',
  size = 'md',
  children,
  className = '',
  fullWidthOnMobile = false,
  type = 'button',
  ...props
}) => {
  const outerBaseClasses =
    'group relative inline-flex items-center justify-center rounded-[26px] border-[3px] border-[#EC4689] bg-white p-[3px] shadow-sm hover:shadow-md transition-all duration-200 ease-out whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4689] focus-visible:ring-offset-2 active:scale-[0.99]';

  const innerVariantClasses: Record<ButtonVariant, string> = {
    'primary-pink':
      'bg-white text-[#233975] group-hover:bg-[#EC4689]/10 group-hover:text-[#EC4689]',
    'primary-blue':
      'bg-white text-[#233975] group-hover:bg-[#233975]/10 group-hover:text-[#EC4689]',
    'secondary-light':
      'bg-white text-[#233975] group-hover:bg-[#F8F7FC] group-hover:text-[#EC4689]',
    'secondary-dark':
      'bg-white text-[#233975] group-hover:bg-[#F8F7FC] group-hover:text-[#EC4689]',
    ghost:
      'bg-white text-[#233975] group-hover:bg-[#F8F7FC] group-hover:text-[#EC4689]',
  };

  const innerSizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-1.5 text-xs min-h-[36px]',
    md: 'px-6 py-2.5 text-sm min-h-[42px]',
    lg: 'px-8 py-3 text-base min-h-[46px]',
  };

  const mobileWidthClass = fullWidthOnMobile ? 'w-full sm:w-auto' : '';

  return (
    <button
      type={type}
      className={`${outerBaseClasses} ${mobileWidthClass} ${className}`}
      {...props}
    >
      {/* Inner Royal Blue Window Frame ("Ventanita" PMP-Símbolo-01) */}
      <span
        className={`w-full h-full inline-flex flex-col items-center justify-center rounded-[21px] border-[2px] border-[#233975] font-semibold tracking-wide transition-colors duration-200 ${innerVariantClasses[variant]} ${innerSizeClasses[size]}`}
      >
        <span className="inline-flex items-center justify-center gap-2">
          {children}
        </span>
        {/* Subtle horizontal window-sill line inspired by Marca gráfica PMP-Símbolo-01 */}
        <span
          className="mt-1 w-7 h-[2px] rounded-full bg-[#233975] group-hover:bg-[#EC4689] transition-colors duration-200"
          aria-hidden="true"
        />
      </span>
    </button>
  );
};
