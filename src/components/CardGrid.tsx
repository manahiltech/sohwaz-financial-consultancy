import React from 'react';

type CardGridProps = {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
};

type ChildWithClassName = React.ReactElement<{ className?: string }>;

// Each item gets a fixed share of the row (gap-6 = 1.5rem), so a last row with
// fewer items stays centred instead of stretching or sticking to the left.
// Full class strings are listed so Tailwind can see them.
const ITEM_WIDTH: Record<2 | 3 | 4, string> = {
  2: 'w-full md:w-[calc((100%_-_1.5rem)/2)]',
  3: 'w-full md:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_3rem)/3)]',
  4: 'w-full sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_4.5rem)/4)]',
};

export function CardGrid({ children, columns = 3, className = '' }: CardGridProps) {
  return (
    <div className={`flex flex-wrap items-stretch justify-center gap-6 ${className}`.trim()}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        const childElement = child as ChildWithClassName;
        return (
          // The wrapper is a flex item that stretches to the tallest card in its row.
          <div className={`flex ${ITEM_WIDTH[columns]}`}>
            {React.cloneElement(childElement, {
              className: `${childElement.props.className || ''} h-full w-full min-w-0 flex flex-col`.trim(),
            })}
          </div>
        );
      })}
    </div>
  );
}