import Board from "@/components/Board";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="grid grid-cols-3 gap-8 w-full h-screen  px-8 py-16">
        <Board type={'done'}/>
        <Board type={'inwork'}/>
        <Board type={'todo'}/>
        <div className="absolute top-2 right-2 bg-cyan-500 text-xl text-white px-4 py-2 rounded-3xl" >
          <Link href={'/about'}>راهنمای پروژه</Link>
        </div>
      </div>
    </section>
  );
}
