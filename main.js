const myCarts = [];
const contain$$ = document.querySelector('[data-function = "contain"]');
const inputFind$$ = document.querySelector('[data-function="input-find"]');
const btnFind$$ = document.querySelector('[data-function="btn-find"]');
const inputFindB$$ = document.querySelector('[data-function="input-findb"]');
const btnFindB$$ = document.querySelector('[data-function="btn-findb"]');

// hacemos la peticion a la api

const getinfo = async () => {
  for (let i = 1; i < 151; i++) {
    const rawInfo = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
    const formatInfo = await rawInfo.json();
    myCarts.push(formatInfo);
  }
  const cartObj = myCarts.map((param) => ({
    image: param.sprites.other.dream_world.front_default,
    name: param.name,
    order: param.order,
    height: param.height / 10,
    weight: param.weight / 10,
  }));
  setInfo(cartObj);
};
getinfo();

const setInfo = (cards) => {
  limpiarHtml();
  for (const card of cards) {
    const { image, name, order, height, weight } = card;
    const div$$ = document.createElement("div");
    const divTxt$$ = document.createElement("div");
    const h3$$ = document.createElement("h3");
    const img$$ = document.createElement("img");
    const order$$ = document.createElement("h5");
    const height$$ = document.createElement("h5");
    const weight$$ = document.createElement("h5");

    div$$.classList.add("card-contain");
    divTxt$$.classList.add("txt-contain-card");
    img$$.src = image;
    h3$$.innerHTML = name;
    order$$.innerHTML = "Pokemon  #" + order;
    height$$.innerHTML = "Altura: " + height + " m.";
    weight$$.innerHTML = "Peso:  " + weight + " Kg.";

    div$$.appendChild(h3$$);
    div$$.appendChild(img$$);
    divTxt$$.appendChild(order$$);
    divTxt$$.appendChild(height$$);
    divTxt$$.appendChild(weight$$);
    div$$.appendChild(divTxt$$);
    contain$$.appendChild(div$$);
  }

  btnFind$$.addEventListener("click", () => {    
    findCards(inputFind$$.value, cards);
   
  });

  btnFindB$$.addEventListener("click", () => {    
    findCards(inputFindB$$.value, cards);
   
  });
};

function findCards(valor, cards) {
  limpiarHtml();
  const nav$$ = document.querySelector("header");
  nav$$.style.display = "none";
  for (const card of cards) {
    if (card.name.toLowerCase() === valor.toLowerCase()){
      const { image, name, order, height, weight } = card;
      const div$$ = document.createElement("div");
      const divTxt$$ = document.createElement("div");
      const h3$$ = document.createElement("h3");
      const img$$ = document.createElement("img");
      const order$$ = document.createElement("h5");
      const height$$ = document.createElement("h5");
      const weight$$ = document.createElement("h5");

      div$$.classList.add("card-containB");
      divTxt$$.classList.add("txt-contain-cardB");
      img$$.src = image;
      h3$$.innerHTML = name;
      order$$.innerHTML = "Pokemon  #" + order;
      height$$.innerHTML = "Altura: " + height + " m.";
      weight$$.innerHTML = "Peso:  " + weight + " Kg.";

      div$$.appendChild(h3$$);
      div$$.appendChild(img$$);
      divTxt$$.appendChild(order$$);
      divTxt$$.appendChild(height$$);
      divTxt$$.appendChild(weight$$);
      div$$.appendChild(divTxt$$);
      contain$$.appendChild(div$$);
      const btnback$$ = document.createElement("button");
      btnback$$.classList.add("btn-find");
      btnback$$.innerHTML = "Atrás";
      div$$.appendChild(btnback$$);
      btnback$$.addEventListener("click", () => {
        nav$$.style.display = "inherit";
        setInfo(cards);
      });
      return;
    }
  }
  const div$$ = document.createElement("div");
  const h3$$ = document.createElement("h3");
  div$$.classList.add("card-containB");
  h3$$.innerHTML = "POKEMON NO ENCONTRADO PRUEBA CON OTRO";
  div$$.appendChild(h3$$);
  contain$$.appendChild(div$$);

  const btnback$$ = document.createElement("button");
  btnback$$.classList.add("btn-find");
  btnback$$.innerHTML = "Atrás";
  div$$.appendChild(btnback$$);
  btnback$$.addEventListener("click", () => {
    nav$$.style.display = "inherit";
    setInfo(cards);
  });
}

function limpiarHtml() {
  while (contain$$.firstChild) {
    contain$$.removeChild(contain$$.firstChild);
  }
}
