import BookTable from "@/components/BookTable";

export default function Home() {
  return (
    <div>
      <div className="container max-w-700px min-h-full  justify-center items-center mx-auto">
        <div className="flex justify-center font:bold m-2 text-2xl">
          Cafe Andaluz Website
        </div>
        <div className="flex justify-center font:bold m-2 text-xl">
          <BookTable siteurl="http://localhost:3000/CafeAndaluz" />
        </div>

        <div className="flex justify-center font:bold m-2 text-2xl">
          DiMaggios Website
        </div>
        <div className="flex justify-center font:bold m-2 text-xl">
          <BookTable siteurl="http://localhost:3000/DiMaggios" />
        </div>
      </div>
    </div>
  );
}
