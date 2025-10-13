import { DeleteIcon, EditIcon } from "@/utils/icons";

const Card = () => {
  return (
    <div className="border-2 border-black rounded-2xl mx-auto my-2 w-11/12 flex flex-wrap p-2">
      <div className="border-2 border-blue-400 w-full p-2">
        <div className="flex justify-between items-center">
          <p className="text-base">نام تسک</p>
          <span className="text-xs">وضعیت </span>
        </div>
        <p className="h-10 border-gray-100 bg-gray-200 rounded text-xs p-2">
          اندک توضیحات
        </p>
      </div>
      <div className="border-2 border-red-400 w-full text-left">
        <EditIcon className="mx-2 my-1 text-yellow-800" />
        <DeleteIcon className="mx-2 my-1 text-red-800" />
      </div>
    </div>
  );
};
export default Card;
