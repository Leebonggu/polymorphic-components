import type { ElementType, ComponentPropsWithoutRef, PropsWithChildren } from 'react';

type Rainbow = 'red' | 'oragne' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

type AsProp<C extends ElementType> = {
  as?: C
}

// React.PropsWithChidlren<{}>
type PropsToOmit<C extends ElementType, P>=  keyof (AsProp<C> & P)

type PolymorphicComponentProps<C extends ElementType, Props = {}> = PropsWithChildren<Props & AsProp<C>> & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type TextProps = { color?: Rainbow | 'black' }

export function Text<C extends ElementType = 'span'>({ as, color, style, children, ...restProps }: PolymorphicComponentProps<C, TextProps>) {
  const Component = as || 'span';

  const internalStyles = color ? { style: { ...style, color }} : {}
  return <Component {...restProps}  {...internalStyles}>{children}</Component>;
}
