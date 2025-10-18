import Link from "next/link";

 const AboutPage = () => {
  return (
    <section className="min-h-screen min-w-screen bg-gradient-to-br from-blue-100 via-white to-green-100 p-6">
        <h1> با سلام راهنمای پروژه TaskBoard آ.تلخابی</h1>
        <br />
        <br />
        <p>اول از همه با دستور npm install تمامی پکیج های مورد نیاز را نصب کنید</p>
        <p>بعد از نصب پکیج ها و کتابخانه ها با دستور npm run server سرور را فعال کنید</p>
        <p>سپس با دستور npm run dev پروژه را اجرا کنید</p>
        <p>برای تعریف کردن تسک های جدید دکمه ی افزودن کار جدید را بزنید و در فرم وارد شده تسک مورد نظر خود را به همراه جزییات ثبت کنید</p>
        <p>برای مدیریت کارت ها شامل عملیات CRUD روی دکمه مشاهده جزییات کلیک کنید و هر گونه تغییرات را در آنجا ثبت کنید تا در سرور ذخیره شود </p>
        <p>در نظر داشته باشید که اطلاعات روی فایل tasks.json ذخیره میگردد</p>
        <br />
        <br />
        <Link href="/" className="px-4 py-2 rounded bg-sky-600 text-white text-sm">بازگشت به تابلو</Link>

    </section>
  );
}
export default AboutPage