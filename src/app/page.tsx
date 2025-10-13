import Board from "@/components/Board";

export default function Home() {
  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
      <div className="grid grid-cols-3 gap-8 w-full h-screen  px-8 py-16">
        <Board type={'todo'}/>
        <Board type={'inwork'}/>
        <Board type={'done'}/>
      </div>
    </section>
  );
}
