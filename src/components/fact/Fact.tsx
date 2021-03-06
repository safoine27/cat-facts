import React from 'react';

interface IProps {
  factText: string;
}

const Fact: React.FC<IProps> = ({ factText }: IProps) => {
  return (
    <div>
      <p>{factText}</p>
    </div>
  );
};

export default Fact;
