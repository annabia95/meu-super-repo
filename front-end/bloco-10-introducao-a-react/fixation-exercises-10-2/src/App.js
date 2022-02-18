import React from 'react';
import Image from './Image';
import img from './img.webp'

function App() {
  return (
    <div className="App">
      <Image source={img} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
