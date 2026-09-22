import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Component = 'div',
  id,
}) => {
  return (
    <Component
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full ${className}`}
    >
      {children}
    </Component>
  );
};
