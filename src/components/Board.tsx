"use client";
import { BoardProps, Card as CardType } from "@/types";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import AddCard from "./AddCard";
import { fetchCards } from "@/utils/api";
import { Skeleton } from "@mui/material";

const Board: React.FC<BoardProps> = ({ type }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadData(signal?: AbortSignal) {
    setLoading(true);
    try {
      const data = await fetchCards();
      if (signal?.aborted) return;
      const filtered = data.filter((c) => c.status === type);
      setCards(filtered);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") return;
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const control = new AbortController();
    loadData(control.signal);

    function onUpdate() {
      control.abort();
      const newControl = new AbortController();
      loadData(newControl.signal);
    }

    window.addEventListener("cards-updated", onUpdate);
    return () => {
      control.abort();
      window.removeEventListener("cards-updated", onUpdate);
    };
  }, [type]);

  return type === "todo" ? (
    <div className="border-2 border-red-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden p-2">
      <h1 className="w-full h-10 text-center bg-red-200 flex justify-center items-center rounded">
        تسک های تعریف شده
      </h1>
      <AddCard />
      {loading && <Skeleton className="w-full h-full" variant="rectangular" />}
      <div>
        {!loading && cards.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            تسکی در این ستون وجود ندارد
          </div>
        )}
        {cards.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </div>
    </div>
  ) : type === "inwork" ? (
    <div className="border-2 border-yellow-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden p-2">
      <h1 className="w-full h-10 text-center bg-yellow-200 flex justify-center items-center rounded">
        تسک های درحال انجام
      </h1>{" "}
      {loading && <Skeleton className="w-full h-full" variant="rectangular" />}
      <div>
        {!loading && cards.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            تسکی در این ستون وجود ندارد
          </div>
        )}
        {cards.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </div>
    </div>
  ) : type === "done" ? (
    <div className="border-2 border-green-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden p-2">
      <h1 className="w-full h-10  text-center bg-green-200 flex justify-center items-center rounded">
        تسک های انجام شده
      </h1>{" "}
      {loading && <Skeleton className="w-full h-full" variant="rectangular" />}
      <div>
        {!loading && cards.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            تسکی در این ستون وجود ندارد
          </div>
        )}
        {cards.map((c) => (
          <Card key={c.id} card={c} />
        ))}
      </div>
    </div>
  ) : null;
};

export default Board;
