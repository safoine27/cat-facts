import React, { useEffect, useState } from 'react';
import { fetchFact } from '../../api/index';

const Fact: React.FC = () => {
  const [fact, setFact] = useState('');
  useEffect(() => {
    fetchFact().then(({ fact }) => {
      setFact(fact);
    });
  }, []);
  return (
    <div>
      <p>{fact}</p>
    </div>
  );
};

export default Fact;
