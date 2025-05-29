import React, { useState } from 'react';

const Paragraph = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const charLimit = 200;

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length > charLimit) {
      setError(`Character limit exceeded (max ${charLimit} characters)`);
    } else {
      setError('');
    }
    setValue(input);
  };

  return (
    <div className="w-full px-6 py-1 mb-6">
      <textarea
        rows={3}
        value={value}
        onChange={handleChange}
        placeholder="Paragraph"
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

export default Paragraph;
