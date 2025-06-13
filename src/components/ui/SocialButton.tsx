import React from 'react';
import Button from './Button'; // Adjust the import path as needed

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: string;
  icon: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  icon,
  onClick,
  ...props
}) => {
  return (
    <Button
      variant="secondary"
      className="flex items-center justify-center"
      onClick={onClick}
      {...props}
    >
      {icon}
      <span className="ml-2">{provider}</span>
    </Button>
  );
};

export default SocialButton;
