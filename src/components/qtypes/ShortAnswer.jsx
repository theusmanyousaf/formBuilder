import React, { useState } from 'react';

const ShortAnswer = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value.length);
    
    const input = e.target.value;
    if (input.length > 255) {
      setError('Character limit exceeded');
    } else {
      setError('')
    }

    setValue(input);
  };

  return (
    <div className="w-full px-6 py-1 mb-6">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Short Answer"
        className={`text-base outline-none font-medium capitalize border-b
          focus:border-b-2 py-1 w-full
          ${error ? 'border-red-500' : 'border-gray-200 focus:border-[#29A0B1]'}`}
      />
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
};

export default ShortAnswer;
