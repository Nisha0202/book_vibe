import React, { useEffect, useState } from 'react';
import { useLoaderData, Route, Routes } from 'react-router-dom';
import { getStoredData } from '../components/utility/saveDataLocal';
import { getWishlistStoredData } from '../components/utility/saveWishlistDataLocal';
import { NavLink, Link } from 'react-router-dom';
import Read from '../components/Read';
import { IoMdArrowDropdown } from "react-icons/io";

import Wishlist from '../components/Wishlist';

export default function Bookmark() {
  const [fav, setFav] = useState([]);
  const [wish, setWish] = useState([]);

  const data = useLoaderData();
  // 'books' is a property of 'data'
  const { books } = data;
  useEffect(() => {
    const storedFav = getStoredData();
    const storedFavIds = storedFav.map(id => parseInt(id, 10));
    const applied = books.filter(book => storedFavIds.includes(book.bookId));
    setFav(applied);

  }, [books]);

  useEffect(() => {
    const storedFav = getWishlistStoredData();
    const storedFavIds = storedFav.map(id => parseInt(id, 10));
    const applied = books.filter(book => storedFavIds.includes(book.bookId));
    setWish(applied);
  }, [books]);

  // filter
  const handleFilter = filter => {

    let sortedFav = [...fav]; // Create a copy of the fav array

    if (filter === 'year') {
      sortedFav = sortedFav.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } else if (filter === 'rating') {
      sortedFav = sortedFav.sort((a, b) => b.rating - a.rating);
    } else if (filter === 'page') {
      sortedFav = sortedFav.sort((a, b) => b.totalPages - a.totalPages);
    }

    setFav(sortedFav); // Update the state with the sorted array



    let sortedWish= [...wish]; // Create a copy of the fav array

    if (filter === 'year') {
      sortedWish = sortedWish.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    } else if (filter === 'rating') {
      sortedFav = sortedWish.sort((a, b) => b.rating - a.rating);
    } else if (filter === 'page') {
      sortedWish = sortedWish.sort((a, b) => b.totalPages - a.totalPages);
    }

    setWish(sortedWish); 
 

  };

  return (

    <div className='lg:px-0 px-2 my-6' >

      <div className=' grid place-items-center'>
        <div className='bg-gray-200 w-full h-full md:rounded-2xl  p-4'>
          <div className='lg:text-3xl/snug font-bold  text-xl/snug w-full grid place-items-center text-center '> Books</div>
        </div>
        <div className="dropdown dropdown-end my-4">
          <div tabIndex={0} role="button" className="btn btn-md text-white m-1 bg-emerald-500">Sort By<IoMdArrowDropdown />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li ><button onClick={() => handleFilter('rating')}>Rating</button></li>
            <li ><button onClick={() => handleFilter('year')} >Publisher year</button></li>
            <li ><button onClick={() => handleFilter('page')} >Number of pages</button></li>
          </ul>
        </div>
      </div>

      <div className='navbar px-0'>
        <ul className="menu menu-horizontal gap-4 *:p-2 px-0">
          <NavLink className={({ isActive }) => (isActive ? "link2-active" : "link")} to={'/bookmark/read'} style={{ textDecoration: 'none' }} >Read Books</NavLink>
          <NavLink className={({ isActive }) => (isActive ? "link2-active" : "link")} to={'/bookmark/wishlist'} style={{ textDecoration: 'none' }}>Wishlist Books</NavLink>
        </ul>
      </div>

      {/* view read or wishlist */}
      <div className='view'>
        <Routes>
          <Route path="read" element={<Read fav={fav} />} />
          <Route path="wishlist" element={<Wishlist wish={wish} />} />
        </Routes>
      </div>

    </div >);
}
