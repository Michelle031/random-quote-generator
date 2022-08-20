import React from 'react';

function Quote({quote, font}) {

  return (
    <div className="border-[#F7DF94] border-l-8 pl-24 text-black my-auto">
        <p className={`max-w-lg text-${font ? font : "3xl"}`}>{`"${quote?.quoteText}"`}</p>
    </div>
  )
}

export default Quote