import React, { useEffect, useState } from 'react'; 
import { getStoredData } from '../components/utility/saveDataLocal';
import { useLoaderData} from 'react-router-dom';
import More from './More';

export default function Pages() {
  const [fav, setFav] = useState([]);

  const data = useLoaderData();

  const { books } = data;


  useEffect(() => {
    const storedFav = getStoredData();
    const storedFavIds = storedFav.map(id => parseInt(id, 10));
    const applied = books.filter(book => storedFavIds.includes(book.bookId));
    setFav(applied);
  }, [books]);

  return (
    <div>
      <div className='flex flex-col gap-4'>
        {fav.map(book => (
          <div className='mt-2 flex flex-col lg:flex-row gap-4 lg:gap-8 border-2 lg:p-6 p-4 rounded-2xl' key={book.bookId}>
            {book.bookName}
          </div>
        ))}
        <More fav={fav}></More>
      </div>

   
    </div>
  );
}

