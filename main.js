const urlBase = 'https://pokeapi.co/api/v2/pokemon/'
const myCarts = [];
const cartObj = {};


const getinfo = async(url)=>{
    const rawInfo = await fetch (url);
    const formatInfo = await rawInfo.json();
    setInfo(formatInfo);
}

for(i=1; i<5; i++){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    getinfo(url);
 }

const setInfo = (cards)=>{
          cartObj.imgage = cards.sprites.other.dream_world.front_default;
          cartObj.name = cards.name;
          cartObj.order = cards.order;
          cartObj.height = (cards.height)/10;
          cartObj.weight = (cards.weight)/10;
          myCarts.push(cartObj)
          console.log(myCarts)  
}



