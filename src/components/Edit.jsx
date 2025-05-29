import { BsPlusCircle } from "react-icons/bs"
import { MdDelete } from "react-icons/md"

const Edit = ({ handleAdd, handleDelete, show }) => {
  return (
    <div className="bg-gray-50/80 shadow p-4 md:p-2 ml-2 rounded-md flex md:flex-col gap-2 justify-center items-center">
      <div
        onClick={handleAdd}
        className="md:border-b-2 md:border-r-0 border-r pr-4 md:px-0 py-2 border-gray-400 cursor-pointer hover:text-violet-500"
      >
        <BsPlusCircle className="size-6" />
      </div>
      {!show && (
        <div
          onClick={handleDelete}
          className="cursor-pointer hover:text-red-500"
        >
          <MdDelete className="size-6" />
        </div>
      )}
    </div>
  )
}

export default Edit
