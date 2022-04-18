# Polymorphic Component

- 너무어렵다
- 시간나면 한번 더 보기
- 제네릭 지옥..

- 저 컴포넌트 부분이 실제 Tag가되어 렌더링 된다는거 -> 신기
```tsx
export const Text: TextComponent = React.forwardRef(
  <C extends ElementType = 'span'>({
    as,
    color,
    style,
    children,
    ...restProps
  }: PolymorphicComponentPropsWithRef<C, TextProps>, ref?: PolymorphicRef<C>) => {
    const Component = as || 'span';

    const internalStyles = color ? { style: { ...style, color }} : {}
    return <Component {...restProps}  {...internalStyles}>{children}</Component>;
  }
)
```


## Reference

- https://www.udemy.com/course/build-polymorphic-components-with-react-and-typescript/
- https://ko.reactjs.org/docs/jsx-in-depth.html
- https://evan-moon.github.io/2020/11/28/making-your-components-extensible-with-typescript/
- https://joshua1988.github.io/ts/guide/generics.html#%EC%A0%9C%EB%84%A4%EB%A6%AD%EC%9D%98-%ED%95%9C-%EC%A4%84-%EC%A0%95%EC%9D%98%EC%99%80-%EC%98%88%EC%8B%9C