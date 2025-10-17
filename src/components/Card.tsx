"use client";
import { DeleteIcon, EditIcon } from "@/utils/icons";
import { Card as CardTypes } from "@/types";
import Link from "next/link";

type Props = {
  card: CardTypes;
};

const Card = ({ card }: Props) => {
  const { title, description, id } = card;
  return (
    <div className="border-2 border-slate-500 rounded mx-auto my-2 p-2 flex flex-wrap ">
      <div className="w-full">
        <div className="flex justify-between items-center my-2">
          <p className="text-base">{title ?? ""}</p>
          <span className="text-xs">وضعیت </span>
        </div>
        <p className="h-10 border-gray-100 bg-gray-200 rounded text-xs p-2">
          {description ?? "فاقد توضیحات"}
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <Link
          href={`/cards/${encodeURIComponent(id)}`}
          className="text-xs px-2 py-1 rounded bg-green-300"
        >
          مشاهده جزییات
        </Link>
        <span>
          <EditIcon className="mx-2 my-1 text-yellow-800" />
          <DeleteIcon className="mx-2 my-1 text-red-800" />
        </span>
      </div>
    </div>
  );
};
export default Card;
