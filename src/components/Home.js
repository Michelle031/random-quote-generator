import React from 'react'
import { authorState, loadingRandom, randomQuote } from '../atoms/quoteAtom';
import Quote from './Quote'
import { useRecoilState, useRecoilValue } from "recoil";
import { ArrowNarrowRightIcon} from "@heroicons/react/solid"
import { useNavigate } from 'react-router';

function Home() {

  const quote = useRecoilValue(randomQuote);
  const [author, setAuthorState] = useRecoilState(authorState);
  const loading = useRecoilValue(loadingRandom);
  const navigate = useNavigate();

  const setAuthor = () => {
    setAuthorState(quote?.quoteAuthor);
    navigate("/author");
  }

  return (
    <div>
        {loading ? (<p className="text-[#333333] text-3xl">Loading ...</p>) : (
          <>
          <Quote quote={quote}/>
          <div className='flex justify-between items-center px-5 py-8 max-w-lg hover:bg-[#333333] mt-10 group ml-auto cursor-pointer' onClick={setAuthor}>
              <div className='flex flex-col space-y-2'>
                  <h3 className='font-bold text-[#4F4F4F] text-2xl group-hover:text-[#F2F2F2]'>{quote?.quoteAuthor}</h3>
                  <p className='text-[#828282] text-sm font-medium'>{quote?.quoteGenre}</p>
              </div>
              <ArrowNarrowRightIcon className='hidden group-hover:inline-flex h-7 text-[#F2F2F2] '/>
          </div>
          </>
        )}
    </div>
  )
}

export default Home;