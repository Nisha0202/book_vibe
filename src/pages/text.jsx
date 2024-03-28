 {/* <div>
        <div className='flex justify-between'>
          <div>
            <h1 className='font-bold text-2xl'>Bookmark: {fav.length}</h1>
          </div>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-sm m-1">Filter</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li ><a onClick={() => handleFilter('romance')}>Romance</a></li>
              <li ><a onClick={() => handleFilter('all')} >All</a></li>
            </ul>
          </div>


        </div>

        <div> <ul>
          {
            display.map(fav => <li className='mt-2' key={fav.id}>{fav.name}</li>)
          }

        </ul></div>

      </div> */}

      
  // filter
  // const handleFilter = filter => {
  //     if(filter === 'all'){
  //       setDisplay(fav);
  //     } else if(filter === 'romance'){
  //       const romance = fav.filter(genre => genre.name === 'Romance');
  //       setDisplay(romance);
  //     }
  //   }

  
  // useEffect(() => {
  //   const storedFav = getStoredData();
  //   if (book) {
  //     const storedFavIds = storedFav.map(id => parseInt(id, 10));
  //     const applied = book.filter(book => storedFavIds.includes(book.id));
  //     setFav(applied);
  //     setDisplay(applied);
  //   }
  // }, [book]);

   // const book = books.find(book => book.bookId === parseInt(id));

  // useEffect(() => {
  //   const storedFav = getStoredData();
  //   if (book) {
  //     const storedFavIds = storedFav.map(id => parseInt(id, 10));
  //     if (storedFavIds.includes(book.id)) {
  //       setFav([book]);
  //       setDisplay([book]);
  //     }
  //   }
  // }, [book]);

  // console.log(book);