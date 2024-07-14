import React from "react";

export default function SevPara({ para }) {
  return (
    <>
      <div className="text-gray-500 text-base p-8">
        {/* <p className="text-center">{para}</p> */}
        <p className="text-start">{para}</p>
      </div>
    </>
  );
}
