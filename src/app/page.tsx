import Board from "@/components/Board";
import { fetchCards } from "@/utils/api";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
      <ToastContainer position="top-center" autoClose={3000} rtl={true} />
      <div className="grid grid-cols-3 gap-8 w-full h-screen  px-8 py-16">
        {fetchCards()}
        <Board type={'done'}/>
        <Board type={'inwork'}/>
        <Board type={'todo'}/>
      </div>
    </section>
  );
}
