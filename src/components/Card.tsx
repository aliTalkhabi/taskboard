import { DeleteIcon, EditIcon } from "@/utils/icons";

const Card = () => {
  return (
    <div className="border-2 border-slate-500 rounded-2xl mx-auto my-2 p-2 flex flex-wrap ">
      <div className="w-full">
        <div className="flex justify-between items-center my-2">
          <p className="text-base">نام تسک</p>
          <span className="text-xs">وضعیت </span>
        </div>
        <p className="h-10 border-gray-100 bg-gray-200 rounded text-xs p-2">
          اندک توضیحات
        </p>
      </div>
      <div className="w-full text-left">
        <EditIcon className="mx-2 my-1 text-yellow-800" />
        <DeleteIcon className="mx-2 my-1 text-red-800" />
      </div>
    </div>
  );
};
export default Card;
