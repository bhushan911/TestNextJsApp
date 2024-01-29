"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BookTable = () => {
  const router = useRouter();
  const formData = {
    restaurantName: "The Anchor Line",
    micrositeName: "DiMaggiosCITYCENTRE",
  };

  const handleBookTable = async (e) => {
    e.preventDefault();
    try {
      // Assuming you want to do something with the response here

      // Redirect or further actions
      router.push(`http://localhost:3000/DiMaggios`);
    } catch (error) {
      console.error("Error fetching microsite name:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleBookTable}>
        <button
          type="submit"
          className="rounded-md p-2 bg-indigo-500 hover:bg-indigo-700 transition delay-100"
        >
          Book a Table
        </button>
      </form>
    </div>
  );
};

export default BookTable;
