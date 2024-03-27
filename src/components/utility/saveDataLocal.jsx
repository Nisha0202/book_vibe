

const getStoredData = () => {
    const saveDataLocal=  localStorage.getItem('favorite');
    
    if (saveDataLocal) {
    
    return JSON.parse(saveDataLocal);
    
    }
    return [];
    }
   

const saveDataLocal = id =>{
    
    const saveDataLocal = getStoredData();
    const exists = saveDataLocal.find(genreId => genreId === id);
    if(!exists) {
    saveDataLocal.push(id);
    localStorage.setItem('favorite', JSON.stringify(saveDataLocal));
    // console.log(saveDataLocal);
}}

export {saveDataLocal, getStoredData}