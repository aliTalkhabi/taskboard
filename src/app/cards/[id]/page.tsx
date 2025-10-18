"use client"
import { Card as CardType } from "@/types";
import { deleteCard, fetchCards, updateCard } from "@/utils/api";
import { useParams , useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CardDetailPage = () => {
  const [card, setCard] = useState<CardType | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<CardType["status"]>("todo");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const router = useRouter();
  const id = params.id;

  useEffect(() => {
    let mounted = true;
    async function loadData() {
      setLoading(true);
      try {
        const allData = await fetchCards();
        const foundCard = allData.find((card) => card.id === id);
        if (!mounted) return;
        if (!foundCard) {
          setCard(null);
          setLoading(false);
          return;
        }
        setCard(foundCard);
        setTitle(foundCard.title);
        setDescription(foundCard.description ?? "");
        setStatus(foundCard.status);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
    return () => {
      mounted = false;
    };
  }, [id]);

  async function onSave() {
    try {
      await updateCard(id, { title, description, status });
      window.dispatchEvent(new Event("cards-updated"));
      toast.success('تغییرات با موفقیت دخیره شد')
      router.back();
    } catch (err) {
      toast.error('خطا در اعمال تغییرات')
      console.error(err);
    }
  }

  async function onDelete() {
    if (!confirm("آیا از حذف این تسک اطمینان دارید؟")) return;
    try {
      await deleteCard(id);
      toast.success('تسک مورد نظر حذف شد')
      window.dispatchEvent(new Event("cards-updated"));
      router.push("/");
    } catch (err) {
      toast.error('خطا در حذف تسک')
      console.error(err);
    }
  }

  if (loading) return <div className="p-6">در حال بارگذاری...</div>;
  if (!card) return <div className="p-6">تسک پیدا نشد</div>;

  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex justify-center items-center">
      <div className="border-2 border-green-100 p-6 pt-2 rounded-2xl">
        <h1 className="bg-green-200 w-full text-center text-2xl px-5 mb-2 rounded-t-md">
          صفحه جزئیات کار
        </h1>
        <div>
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
          <div className="flex gap-3">
            <button
              onClick={onSave}
              className="px-4 py-2 rounded bg-green-600 text-white"
            >
              ذخیره
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 rounded bg-red-600 text-white"
            >
              حذف
            </button>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 rounded border"
            >
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetailPage;
