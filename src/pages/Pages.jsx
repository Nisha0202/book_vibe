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
      <div className='flex flex-row flex-wrap gap-3'>
        {fav.map(book => (
          <div className='text-sm' key={book.bookId}>
            {book.bookName}
          </div>
        ))}
        <More fav={fav}></More>
      </div>

   
    </div>
  );
}

