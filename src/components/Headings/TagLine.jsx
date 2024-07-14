import React from "react";

export default function TagLine({ tagline }) {
  return (
    <>
      <div className="text-3xl font-bold text-white mt-5 md:text-5xl md:mt-16">
        <h1>{tagline}</h1>
      </div>
    </>
  );
}
