import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestionTitle, updateQuestionType } from "../redux/formSlice";
import ShortAnswer from "./qtypes/ShortAnswer";
import Paragraph from "./qtypes/Paragraph";
import MultipleChoice from "./qtypes/MultipleChoice";
import Edit from "./Edit";

// const data = [
//   {
//     title: "Short Answer",
//     file: <ShortAnswer />,
//   },
//   {
//     title: "Paragraph",
//     file: <Paragraph />,
//   },
//   {
//     title: "Multiple Choice",
//     file: <MultipleChoice />,
//   },
// ];

const Question = ({
  index,
  value,
  addQuestion,
  handleDelete,
  isActiveQuestion,
  onclick,
}) => {
  const dispatch = useDispatch();
  const { title, type } = value; // Assuming value contains title and type

  const handleChange = (newValue) => {
    dispatch(updateQuestionTitle({ index, title: newValue }));
  };

  const handleTypeChange = (value) => {
    dispatch(updateQuestionType({ index, type: value }));
  };
  const activeQuestionIndex = useSelector(
    (state) => state.form.activeQuestionIndex
  );
  let qTypeFile;
  if (type === 'Short Answer') qTypeFile = <ShortAnswer />;
  else if (type === 'Paragraph') qTypeFile = <Paragraph />;
  else if (type === 'Multiple Choice')
    qTypeFile = <MultipleChoice index={index} initialChoices={value.choices || []} />;

  return (
    <div
      onClick={onclick}
      className="flex md:flex-row flex-col justify-center items-center w-full max-w-3xl mx-auto "
    >
      <div
        className={` rounded-md my-6 ${activeQuestionIndex === index
            ? "border-l-4 border-violet-500"
            : "border border-gray-300"
          }  bg-white shadow w-full grid place-items-center lg:place-items-start mx-auto`}
      >
        <div className="w-full md:px-6 px-2 flex md:flex-row flex-col md:justify-between justify-center items-center gap-8 py-6">
          <input
            type="text"
            value={title}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Question"
            required
            className="text-base px-4 outline-none capitalize border-b bg-gray-100 focus:border-b-2 border-gray-400 pt-3 pb-2 w-full focus:border-violet-500"
          />
          <Select
            placeholder="Select Question Type"
            style={{ width: 300 }}
            onChange={handleTypeChange}
            value={type}
            options={[
              { value: "Short Answer", label: "Short Answer" },
              { value: "Paragraph", label: "Paragraph" },
              { value: "Multiple Choice", label: "Multiple Choice" },
            ]}
          />
        </div>
        <div className="w-full">{qTypeFile}</div>
      </div>
      {isActiveQuestion && (
        <Edit handleAdd={addQuestion} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default Question;
