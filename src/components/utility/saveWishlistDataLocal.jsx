
const getWishlistStoredData = () => {
    const saveWishlistDataLocal=  localStorage.getItem('wishlist');
    
    if (saveWishlistDataLocal) {
    
    return JSON.parse(saveWishlistDataLocal);
    
    }
    return [];
    }
   

const saveWishlistDataLocal = id =>{
    
    const saveWishlistDataLocal = getWishlistStoredData();
    const exists = saveWishlistDataLocal.find(genreId => genreId === id);
    if(!exists) {
    saveWishlistDataLocal.push(id);
    localStorage.setItem('wishlist', JSON.stringify(saveWishlistDataLocal));
    // console.log(saveWishlistDataLocal);
}}

export {saveWishlistDataLocal, getWishlistStoredData}