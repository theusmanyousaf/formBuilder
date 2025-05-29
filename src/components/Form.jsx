import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  setTitle,
  setDesc,
  setActiveQuestionIndex,
} from "../redux/formSlice";
import Question from "./Question";
import Edit from "./Edit";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const title = useSelector((state) => state.form.title);
  const description = useSelector((state) => state.form.desc);
  const questions = useSelector((state) => state.form.questions);
  const formData = useSelector(
    (state) => state.form
  )
  //console.log("ques", questions);
  const activeQuestionIndex = useSelector(
    (state) => state.form.activeQuestionIndex
  );
  const [loading, setLoading] = useState(false);
  const handleTitleChange = (e) => {
    e.preventDefault();
    dispatch(setTitle(e.target.value));
  };

  const handleDescChange = (e) => {
    e.preventDefault();
    dispatch(setDesc(e.target.value));
  };

  const handleAddQuestion = () => {
    dispatch(addQuestion());
  };

  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };
  const handleQuestionClick = (index) => {
    dispatch(setActiveQuestionIndex(index));
  };

  return (
    <div>
      <div className="px-10 pt-10 w-full">
        <button className="px-3 py-1.5 rounded-md bg-violet-500 hover:bg-violet-600 text-white cursor-pointer" onClick={() => navigate('/form-preview')}>
          Preview Form
        </button>
      </div>
      <div className="w-3xl mx-auto min-h-screen py-10">
        <form
          className="w-full block mx-auto h-full px-6 md:px-0 overflow-x-hidden"
        >
          <div className="flex md:flex-row flex-col justify-center items-center max-w-3xl mx-auto">
            <div className="border-t-8 rounded-md border-violet-500 bg-white shadow w-full mx-auto">
              <div className="w-full border border-gray-300">
                <div className="w-full px-6 py-2">
                  <input
                    type="text"
                    onChange={handleTitleChange}
                    value={title ?? ""}
                    required
                    className="text-3xl outline-none font-bold capitalize border-b 
                focus:border-b-2 border-gray-200 pt-3 pb-2 w-full focus:border-violet-500"
                  />
                </div>
                <div className="w-full px-6 py-1 mb-6">
                  <input
                    type="text"
                    onChange={handleDescChange}
                    value={description ?? ""}
                    required
                    placeholder="Form Description"
                    className="text-base outline-none font-medium capitalize border-b 
                focus:border-b-2 border-gray-200 focus:border-violet-500 py-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              {questions.length === 0 && (
                <Edit
                  handleAdd={handleAddQuestion}
                  show
                  handleDelete={() =>
                    handleDeleteQuestion(questions.length - 1)
                  }
                />
              )}
            </div>
          </div>
          <div className="relative">
            {questions.map((question, index) => (
              <Question
                onclick={() => handleQuestionClick(index)}
                key={index}
                index={index}
                value={question}
                addQuestion={handleAddQuestion}
                handleDelete={() => handleDeleteQuestion(index)}
                isActiveQuestion={index === activeQuestionIndex}
              />
            ))}
          </div>
          <div>
            {questions.length > 0 && (
              <div className="">
                <button
                  onClick={() => console.log(formData)}
                  type="button"
                  className="bg-violet-500 text-white px-6 py-3 rounded cursor-pointer"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
