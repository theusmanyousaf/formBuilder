import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestionValue } from '../../redux/formSlice';
import { BsXCircle } from 'react-icons/bs';

const MultipleChoice = ({
  index,
  initialChoices = [],
}) => {
  const dispatch = useDispatch();
  const [choices, setChoices] = useState(initialChoices);

  useEffect(() => {
    dispatch(updateQuestionValue({ index, value: choices }));
  }, [choices, dispatch, index]);

  const handleChange = (i, value) => {
    const updated = [...choices];
    updated[i] = value;
    setChoices(updated);
  };

  const addChoice = () => {
    setChoices([...choices, '']);
  };

  const removeChoice = (i) => {
    const updated = choices.filter((_, idx) => idx !== i);
    setChoices(updated);
  };

  return (
    <div className="w-full px-6 py-1 mb-6 space-y-3">
      {choices.map((choice, i) => (
        <div key={i} className="flex items-center space-x-3">
          <input
            type="radio"
            name={`radio-${index}`}
            disabled
            className="accent-violet-50bg-violet-500"
          />
          <input
            type="text"
            value={choice}
            onChange={(e) => handleChange(i, e.target.value)}
            placeholder={`Option ${i + 1}`}
            className="text-base outline-none font-medium capitalize border-b focus:border-b-2 border-gray-200 focus:border-violet-500 py-1 w-full"
          />
          <BsXCircle onClick={() => removeChoice(i)} className="text-red-500 cursor-pointer size-5" />
        </div>
      ))}
      <button
        onClick={addChoice}
        type="button"
        className="mt-2 text-sm px-4 py-1 rounded bg-violet-500 text-white hover:bg-violet-600"
      >
        Add Option
      </button>
    </div>
  );
};

export default MultipleChoice;
