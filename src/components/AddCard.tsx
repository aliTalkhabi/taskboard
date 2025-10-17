"use client"
import Link from "next/link";
import { AddIcon } from "@/utils/icons";


const AddCard = () => {
  return (
    <>
      <Link href={'/cards/new'} className="w-full  flex justify-center items-center my-2 rounded bg-lime-100 p-2 cursor-pointer">
        <AddIcon className="text-3xl" />
      </Link>
    </>
  );
};
export default AddCard;
