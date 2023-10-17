import { useMemo } from 'react';

interface ArrowDivProps {
  className?: string;
  arrowColor?: string;
  type?: 'top' | 'bottom' | 'left' | 'right';
}

export function ArrowDiv(props: ArrowDivProps) {
  const { className, arrowColor = 'white', type } = props;

  const mergeClassName = useMemo(() => {
    switch (type) {
      case 'top':
        return `${className} rotate-135 translate-y-0.5 `;
      case 'bottom':
        return `${className} -rotate-45 -translate-y-0.5`;
      case 'left':
        return `${className} rotate-45 translate-x-1`;
      case 'right':
        return `${className} rotate-225 -translate-x-0.5`;
      default:
        return `${className} -rotate-45 -translate-y-0.5`;
    }
  }, [className, type]);
  return (
    <div>
      <div className={`w-10 h-10 border-l-2 border-b-2 border-solid border-x-${arrowColor} ${mergeClassName}`} />
    </div>
  );
}
