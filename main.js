const urlBase = 'https://pokeapi.co/api/v2/pokemon/'  // esta seria la url para todos, solo cambia el ultimo caracter que sera el nº de pokemon
const myCarts = [];                                   
const contain$$ = document.querySelector('[data-function = "contain"]')


// hacemos la peticion a la api 
const getinfo = async(url)=>{
    const rawInfo = await fetch (url);
    const formatInfo = await rawInfo.json();
    setInfo(formatInfo);//le pasamos la info a la funcion para generar nuestro objeto.
}
// iteramos por las 150 urls de cada poquemon y las pasamos a la funtion setInfo.
for(let i=1; i<151; i++){
    const url = 'https://pokeapi.co/api/v2/pokemon/'+i
    getinfo(url);
 }
//recogemos la informacion recibida y la guardamos en un objeto
const setInfo = (cards) => {
  const cartObj = {
    image: cards.sprites.other.dream_world.front_default,
    name: cards.name,
    order: cards.order,
    height: cards.height / 10,
    weight: cards.weight / 10,
  };
 
  const{image,name,order,height,weight} = cartObj; // hago el destructuring para ahorrarme alguna palabra de código
  const div$$ = document.createElement('div');        
  const h4$$ = document.createElement('h4');
  const img$$ = document.createElement('img');
  const order$$ = document.createElement('h5');
  const height$$ = document.createElement('h5');
  const weight$$ = document.createElement('h5');

  div$$.classList.add('card-contain')
  img$$.src = image;
  h4$$.innerHTML = name;
  order$$.innerHTML = '#'+order;
  height$$.innerHTML = height+' m.';
  weight$$.innerHTML = weight+' Kg.';

  div$$.appendChild(h4$$);
  div$$.appendChild(img$$);
  div$$.appendChild(order$$);
  div$$.appendChild(height$$);
  div$$.appendChild(weight$$);
  div$$.appendChild(h4$$);
  contain$$.appendChild(div$$);   

};
  
