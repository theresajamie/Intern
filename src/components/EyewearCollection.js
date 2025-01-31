import React from "react";

const EyewearCollection = () => {
  return (
    <section className="text-center py-12 bg-gray-100">
      <h2 className="text-4xl font-bold">
        NEW <span className="text-gray-500">PROMAX</span> EYEWEAR COLLECTION
      </h2>
      <div className="flex justify-center gap-8 mt-6">
        <span className="text-lg font-semibold">POLICE</span>
        <span className="text-lg font-semibold">Ray-Ban</span>
        <span className="text-lg font-semibold">GUCCI</span>
      </div>
      <button className="mt-6 px-6 py-2 bg-black text-white text-lg rounded">
        DISCOVER THE COLLECTION →
      </button>
    </section>
  );
};

export default EyewearCollection;
