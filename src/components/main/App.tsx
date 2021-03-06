import React, { useState } from 'react';
import './App.css';
import Fact from '../fact/Fact';
import Button from '../../components/button/Button';
import { fetchFact } from '../../api';
const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [fact, setFact] = useState('');
  const clickedButton = async () => {
    const { fact } = await fetchFact();
    setFact(fact);
    setClicked(true);
    return true;
  };

  return (
    <div className='center'>
      <h1>Show me a random cat fact!</h1>
      <Button text={!clicked ? 'Show me!' : 'Another one'} clicked={clickedButton} />
      <Fact factText={fact} />
    </div>
  );
};

export default App;
