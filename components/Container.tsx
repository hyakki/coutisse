import React from 'react';
import classNames from 'classnames';

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  const elementClass = classNames([
    'absolute',
    'top-0 left-0',
    'w-full h-screen',
    className,
  ]);

  return (
    <div className={elementClass}>
      <div className="absolute inset-0 flex justify-center items-center">
        {/* <div className="relative portrait:w-4/5 landscape:h-1/2 aspect-square"> */}
        <div className="relative portrait:container-portrait-size landscape:container-landscape-size aspect-square">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
