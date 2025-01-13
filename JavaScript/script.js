const btn = document.querySelector(".btn")
const row2 = document.getElementById("card-row2");


async function load(){
  const url = 'https://fakestoreapi.com/products';
  const response = await fetch(url);
  if(!response.ok){
    throw new Error("Something went wrong");
  }
  row2.innerHTML = "please wait..."
  const cards= await response.json();
  row2.innerHTML =""
  cards.forEach(card=>{
    const result = `<div class="col">
                            <div class="cart-box">
                              <div class="cart-img d-flex align-items-center justify-content-center">
                                <img src="${card.image}" alt="">
                              </div>
                              <h3 class="title">${card.title}</h3>
                              <p class="detail" style="text-align:empasis;">${card.description}</p>
                              <h5 class="price"><span>Price :</span>$${card.price}</h5>
                              <Button class="btn btn-warning w-100">Add to Cart</Button>
                            </div>
                          </div>`
                          row2.innerHTML+=result;
  }).join('');
  
}

// fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((output)=>{
//   const cards = output.map(card=>`<div class="col">
//                             <div class="cart-box">
//                               <div class="cart-img d-flex align-items-center justify-content-center">
//                                 <img src="${card.image}" alt="">
//                               </div>
//                               <h3 class="title">${card.title}</h3>
//                               <p class="detail" style="text-align:empasis;">${card.description}</p>
//                               <h5 class="price"><span>Price :</span>$${card.price}</h5>
//                               <Button class="btn btn-warning w-100">Add to Cart</Button>
//                             </div>
//                           </div>`).join('');

//                           row2.innerHTML = cards
                          
                          
// });

btn.addEventListener("click",load)
            