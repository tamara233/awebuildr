import React, { useState } from 'react';
import './index.module.scss';

const TextBlock: React.FC = () => {
  const [text, setText] = useState('Editable Text');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="block">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className="block-input"
      />
    </div>
  );
};

export default TextBlock;
