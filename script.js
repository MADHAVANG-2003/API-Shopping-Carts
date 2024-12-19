const row = document.getElementById("cart-row");

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{
              let title = json.title;
              let detail = json.description;
              let price = json.price;
              let image = json.image;
              row.innerHTML = `<div class="col">
                                <div class="cart-box">
                                <div class="cart-img">
                                  <img src="${image}" alt="">
                                </div>
                                <h3 class="title">${title}</h3>
                                <p class="detail">${detail}</p>
                                <h5 class="price"><span>Price :</span>$${price}</h5>
                                <Button class="btn btn-warning w-100">Add to Cart</Button>
                              </div>
                            </div> `
            });

const row2 = document.getElementById("card-row2");

fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((output)=>{
  const cards = output.map(card=>`<div class="col">
                            <div class="cart-box">
                              <div class="cart-img d-flex align-items-center justify-content-center">
                                <img src="${card.image}" alt="">
                              </div>
                              <h3 class="title">${card.title}</h3>
                              <p class="detail" style="text-align:empasis;">${card.description}</p>
                              <h5 class="price"><span>Price :</span>$${card.price}</h5>
                              <Button class="btn btn-warning w-100">Add to Cart</Button>
                            </div>
                          </div>`).join('');

                          row2.innerHTML = cards
                          
})
            