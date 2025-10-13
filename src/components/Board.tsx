import { BoardProps } from "@/types";
import React from "react";

const Board: React.FC<BoardProps> = ({ type }) => {
  return type === "todo" ? (
    <div className="border-2 border-red-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden">
      <h1 className="w-full h-10 absolute top-0 text-center bg-red-200 flex justify-center items-center">
        تسک های تعریف شده
      </h1>
    </div>
  ) : type === "inwork" ? (
    <div className="border-2 border-yellow-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden">
      <h1 className="w-full h-10 absolute top-0 text-center bg-yellow-200 flex justify-center items-center">
        تسک های درحال انجام
      </h1>{" "}
    </div>
  ) : type === "done" ? (
    <div className="border-2 border-green-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden">
      <h1 className="w-full h-10 absolute top-0 text-center bg-green-200 flex justify-center items-center">
        تسک های انجام شده
      </h1>{" "}
    </div>
  ) : null;
};

export default Board;
