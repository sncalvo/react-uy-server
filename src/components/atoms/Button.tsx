import clsx from 'clsx';

type Props = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'none';
  outline?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  square?: boolean;
  onClick?: () => void;
};

const Button = ({
  variant = 'primary',
  outline = false,
  children,
  type,
  square = false,
  onClick,
}: Props) => (
  <button
    onClick={onClick}
    className={clsx('rounded-md text-lg transition-all delay-100 hover:scale-105', {
      'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary' && !outline,
      'border border-blue-500 text-blue-500': variant === 'primary' && outline,
      'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary' && !outline,
      'border border-gray-500 text-gray-500': variant === 'secondary' && outline,
      'bg-gray-300 text-gray-700 hover:bg-gray-500': variant === 'tertiary' && !outline,
      'border border-gray-300 bg-white text-gray-700': variant === 'tertiary' && outline,
      'bg-red-500 text-white hover:bg-red-300': variant === 'danger' && !outline,
      'border border-red-500 bg-white text-red-500': variant === 'danger' && outline,
      'bg-green-500 text-white hover:bg-green-300': variant === 'success' && !outline,
      'border border-green-500 bg-white text-green-500': variant === 'success' && outline,
      'text-gray-800 dark:text-gray-200': variant === 'none' && !outline,
      'px-7 py-3': !square,
      'px-2 py-2': square,
    })}
    type={type}
  >
    {children}
  </button>
);

export default Button;
