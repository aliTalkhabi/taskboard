"use client";
import { createCard } from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewCardPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"todo" | "inwork" | "done">("todo");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await createCard({ title, description, status });
      window.dispatchEvent(new Event("cards-updated"));
      router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex justify-center items-center">
      <div className="border-2 border-green-100 p-6 pt-2 rounded-2xl">
        <h1 className="bg-green-200 w-full text-center text-2xl px-5 mb-2 rounded-t-md">
          ایجاد تسک جدید
        </h1>
        <form onSubmit={handleSubmit} className="bg-green-50 p-4 rounded-2xl">
          <div className="w-full">
            <label className="w-full">عنوان مورد نظر را وارد کنید</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="عنوان"
              className="w-full bg-slate-100 my-2 p-2"
            />
          </div>
          <div className="w-full">
            <label>توضیحات را وارد کنید</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols={30}
              rows={10}
              placeholder="توضیحات"
              className="w-full bg-slate-100 my-2 p-2"
            ></textarea>
          </div>
          <div className="w-full flex justify-between items-center">
            <label>وضعیت را مشخص کنید :</label>
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "todo" | "inwork" | "done")
              }
              className="bg-slate-100 p-2"
            >
              <option value="todo">تعریف شده</option>
              <option value="inwork">درحال انجام</option>
              <option value="done">انجام شده</option>
            </select>
          </div>
          <div className="mx-auto w-fit">
            <button
              disabled={loading}
              type="submit"
              className="px-6 py-1 rounded bg-green-900 text-white"
            >
              {loading ? "در حال ارسال..." : "ایجاد"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewCardPage;
