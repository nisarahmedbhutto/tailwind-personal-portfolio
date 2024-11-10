import Link from "next/link";



export default function About() {
  return (
    <>
      <div className="bg-gray-900 w-72  h-[400px] flex justify-center rounded-lg items-center gap-5 mx-auto my-auto mb-16 mt-24 ">
        <ol className="flex justify-center items-center gap-10 flex-col  ">
          <li>
            <span>Name :</span> Nisar Ahmed Bhutto
          </li>
          <li>
            <span>Phone :</span> +923492029262
          </li>
          <li>
            <span>Email :</span>{" "}
            <Link href={"mailto://www.bhuttonisar@gmail.com"}>Email</Link>
          </li>
          <li>
            <span>Address :</span> Karachi Malir Landhi
          </li>
        </ol>
      </div>
    </>
  );
}
