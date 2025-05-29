import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const FormPreview = () => {
  const form = useSelector((state) => state.form);
  const [responses, setResponses] = useState({});

  const handleInputChange = (index, value) => {
    setResponses((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Submitted Responses:', responses);
    // Here you can send `responses` to a backend if needed
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{form.title}</h1>
      <p className="text-gray-600 mb-6">{form.desc}</p>

      {form.questions.map((q, i) => (
        <div key={i} className="mb-6">
          <label className="block text-lg font-medium mb-2">
            {i + 1}. {q.title}
          </label>

          {q.type === 'Short Answer' && (
            <input
              type="text"
              placeholder="Short Answer"
              onChange={(e) => handleInputChange(i, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          )}

          {q.type === 'Paragraph' && (
            <textarea
              rows={4}
              placeholder="Your answer"
              onChange={(e) => handleInputChange(i, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          )}

          {q.type === 'Multiple Choice' && (
            <div className="space-y-2">
              {q.choices?.map((choice, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value={choice}
                    onChange={(e) => handleInputChange(i, e.target.value)}
                    className="accent-[#29A0B1]"
                  />
                  <span>{choice}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded cursor-pointer"
      >
        Submit (Log to Console)
      </button>
    </div>
  );
};

export default FormPreview;
