import React from "react";

export default function ServiceTagLine({ title }) {
  return (
    <>
      <div className="flex justify-center mt-20">
        {/* <h1 className="text-2xl md:text-4xl text-black font-bold text-center md:text-3xl md:font-medium">
          {title}
        </h1> */}

        <h1 className="text-2xl md:text-4xl text-black font-bold text-start md:text-3xl md:font-medium">
          {title}
        </h1>
      </div>
    </>
  );
}
