import React, { useState } from 'react'
import { authorState, loadingAuthor } from '../atoms/quoteAtom';
import { useRecoilState,useRecoilValue } from "recoil";
import { useEffect } from 'react';
import Quote from './Quote';
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router';

function Author() {

  const author = useRecoilValue(authorState);
  const [loading, setloading] = useRecoilState(loadingAuthor);
  const [quotes, setQuotes] = useState([]);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  }

  useEffect(() => {
    const fetchAuthor = async (author) => {
        setloading(true);
        const res = await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`).then(data =>data.json());
        setQuotes(res?.data);
        setloading(false);
    }
    fetchAuthor(author);
  }, [author,setloading]);
  

  return (
    <div className='text-[#33333] w-auto py-8 h-screen flex flex-col justify-center'>
        {loading? (<p className="text-[#333333] text-3xl">Loading ...</p>) : (
            <>
            <button className=" absolute left-12 top-5 text-[#333333] p-2 hover:bg-gray-50" onClick={goBack}><ArrowNarrowLeftIcon className='h-5 inline-flex' /></button>
            <h2 className="font-bold text-3xl  mb-8">{author}</h2>
            <div className="overflow-y-scroll space-y-14 mt-8 text-2xl max-h-[450px] pr-6">
                {quotes?.map(quote => (
                    <Quote key={quote.id} quote={quote} font={"2xl"} />
                ))}
            </div>
            </>
        )}
    </div>
  )
}

export default Author