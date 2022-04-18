import React, { useRef } from 'react';
import { Text } from './components';

function Emphasis({ children } : { children: React.ReactText }) {
  return <em style={{ background: 'yellow', color: 'black', fontSize: '20px' }}>{children}</em>
}

function App() {
  const ref = useRef<HTMLHeadingElement | null>(null)
  
  return (
    <>
      <Text as='h1' ref={ref} color='indigo' style={{ background: 'black' }}>HEllo</Text>
      <Text as='button'>Hello</Text>
      <br/>

      <Text as={Emphasis} ref={ref}>Awsome</Text>
    </>
  );
}

export default App;
