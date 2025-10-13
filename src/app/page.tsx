
export default function Home() {
  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
    <div className="grid grid-cols-3 gap-8 w-full h-screen  px-8 py-16">
      <div className="border-2 border-red-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden">
        <h1 className="w-full h-10 absolute top-0 text-center bg-red-200 flex justify-center items-center">
          تسک های تعریف شده
        </h1>
      </div>
      <div className="border-2 border-yellow-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden">
<h1 className="w-full h-10 absolute top-0 text-center bg-yellow-200 flex justify-center items-center">
          تسک های درحال انجام
        </h1>      </div>
      <div className="border-2 border-green-400 rounded-2xl bg-white/50 shadow-md relative overflow-hidden">
<h1 className="w-full h-10 absolute top-0 text-center bg-green-200 flex justify-center items-center">
          تسک های انجام شده
        </h1>      </div>
    </div>
    </section >
  );
}
