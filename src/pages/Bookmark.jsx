import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../components/utility/saveDataLocal';

export default function Bookmark() {
    const [fav, setFav] = useState([]);
    const [display, setDisplay] = useState([]);
    const genres = useLoaderData();
    let applied = [];


    const handleFilter = filter => {
        if(filter === 'all'){
          setDisplay(fav);
        } else if(filter === 'romance'){
          const romance = fav.filter(genre => genre.name === 'Romance');
          setDisplay(romance);
        }
      }
      

    useEffect(() => {
        const storedFav = getStoredData();
        if (genres.length > 0) {
          const storedFavIds = storedFav.map(id => parseInt(id, 10));
          const applied = genres.filter(genre => storedFavIds.includes(genre.id));
          setFav(applied);
          setDisplay(applied);
        }
      }, [genres]);
      

    return (

        <div className='px-2' style={{ height: 'calc(100vh - 310px)' }} >
            <div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-bold text-2xl'>Bookmark: {fav.length}</h1>
                    </div>
                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn btn-sm m-1">Filter</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li ><a onClick={()=>handleFilter('romance')}>Romance</a></li>
                            <li ><a onClick={()=>handleFilter('all')} >All</a></li>
                        </ul>
                    </div>


                </div>

                <div> <ul>
                    {
                        display.map(fav => <li className='mt-2' key={fav.id}>{fav.name}</li>)
                    }

                </ul></div>

            </div>

        </div>);
}
