import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white p-8">
      <div className="max-w-md text-center bg-white/90 rounded-2xl p-8 shadow">
        <h1 className="text-4xl font-extrabold mb-4">۴۰۴</h1>
        <p className="text-sm text-gray-700 mb-6">
          صفحه‌ای که دنبال می‌کنی وجود نداره یا حذف شده.
        </p>

        <div className="flex justify-center gap-3">
          <Link href="/" className="px-4 py-2 rounded bg-sky-600 text-white">
            بازگشت به تابلو
          </Link>
          <Link href="/about" className="px-4 py-2 rounded border">
            دربارهٔ پروژه
          </Link>
        </div>
      </div>
    </main>
  );
}
