import type { ElementType, ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type Rainbow = 'red' | 'oragne' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

type TextProps<C extends ElementType> = {
  as?: C;
  color?: Rainbow | 'black'; 
}

// React.PropsWithChidlren<{}>
type Props<C extends ElementType> = PropsWithChildren<TextProps<C>> & Omit<ComponentPropsWithoutRef<C>, keyof TextProps<C>>

export function Text<C extends ElementType = 'span'>({ as, color, style, children, ...restProps }: Props<C>) {
  const Component = as || 'span';

  const internalStyles = color ? { style: { ...style, color }} : {}
  return <Component {...restProps}  {...internalStyles}>{children}</Component>;
}
