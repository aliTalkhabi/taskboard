"use client";
import { DeleteIcon, EditIcon } from "@/utils/icons";
import { Card as CardTypes } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import { deleteCard, updateCard } from "@/utils/api";

type Props = {
  card: CardTypes;
};

const Card = ({ card }: Props) => {
  const { title, description, id, status } = card;
  const [changestatus, setChangeStatus] = useState<CardTypes["status"]>(
    status ?? undefined
  );

  async function onStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value as CardTypes["status"];
    setChangeStatus(newStatus);
    try {
      await updateCard(id, { status: newStatus });
      window.dispatchEvent(new Event("cards-updated"));
    } catch (err) {
      console.error(err);
    }
  }

  async function onDelete() {
    if (!confirm("آیا از حذف این تسک مطمئن هستید؟")) return;
    try {
      await deleteCard(id);
      window.dispatchEvent(new Event("cards-updated"));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="border-2 border-slate-500 rounded mx-auto my-2 p-2 flex flex-wrap ">
      <div className="w-full">
        <div className="flex justify-between items-center my-2">
          <p className="text-base">{title ?? ""}</p>
          <div>
            <span className="text-xs">وضعیت: </span>
            <select
              value={changestatus ?? ""}
              onChange={onStatusChange}
              className="text-sm p-1 border rounded "
            >
              <option value="todo">تعریف شده</option>
              <option value="inwork">درحال انجام</option>
              <option value="done">انجام شده</option>
            </select>
          </div>
        </div>
        <p className="h-10 border-gray-100 bg-gray-200 rounded text-xs p-2 line-clamp-2 break-words my-4">
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
          <button onClick={onDelete} aria-label="delete">
            <DeleteIcon className="mx-2 my-1 text-red-800" />
          </button>
        </span>
      </div>
    </div>
  );
};
export default Card;
