import React from 'react';
import { Text } from './components';

function Emphasis({ children } : { children: React.ReactText }) {
  return <em style={{ background: 'yellow', color: 'black', fontSize: '20px' }}>{children}</em>
}

function App() {
  return (
    <>
      <Text as='h1' color='indigo' style={{ background: 'black' }}>HEllo</Text>
      <Text as='button'>Hello</Text>
      <br/>

      <Text as={Emphasis}>Awsome</Text>
    </>
  );
}

export default App;
