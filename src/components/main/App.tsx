import React, { useState } from 'react';
import './App.css';
import Fact from '../fact/Fact';
import Button from '../../components/button/Button';
const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [key, setKey] = useState(0);
  const clickedButton = () => {
    setClicked(true);
    return true;
  };
  const clickedMore = () => {
    setKey(Math.random() + 100);
  };
  return (
    <div className='center'>
      <h1>Show me a random cat fact!</h1>
      {!clicked && <Button text={'Show me!'} clicked={clickedButton} />}
      {clicked && <Button text={'Another one'} clicked={clickedMore} />}
      {clicked && <Fact key={key} />}
    </div>
  );
};

export default App;
