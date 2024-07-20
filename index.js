let product = [
    {name:"Apples", price:15.30, image:"https://images.pexels.com/photos/209573/pexels-photo-209573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {name:"Oranges", price:25.60, image:"https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=400"},
    {name:"Grapes", price:30.45, image:"https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=400"},
    {name:"Strawberries", price:12.99, image:"https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=400"}

];
let i=0;
let category = [...new Set(product.map((item)=>{
    return item
}))]

document.getElementById("root").innerHTML +=
category.map((items)=>{
    var {name, price, image}= items;
    return(
         `
        
        <div class="box">
            <div class=" img-box">
                <img class=" images" src="${image}" alt="">
            </div>
            <div class="bottom">
            
                <h3>${name}</h3>
                <h3>${price}$</h3>
                <button onclick='addProduct(${i++})'>Add to cart</button>
            </div>
        </div>
        
        ` 
    )
}).join('')

let Cart = [];
function addProduct(e){
    Cart.push({...category[e]});
    DisplayCart();
}

function DeleteCart(a){
    Cart.splice(a,1);
    DisplayCart();
}

function DisplayCart(){
    let j = 0; total=0;
    document.getElementById("count").innerHTML = Cart.length;
    if(Cart.length ==0){
        document.getElementById("cartItem").innerHTML = "  Your cart is empty";
        document.getElementById("total").innerHTML = "$"+total;
    }else{
        document.getElementById("cartItem").innerHTML = Cart.map((item)=>{
            let {name,image,price}= item;
            total += price;
            document.getElementById("total").innerHTML = "$"+total.toFixed(2);
            return(
                `
                <div class="cart-item">
                    <img class="row-img" src="${image}" alt="">
                    <h3>${name}</h3>
                    <h3>${price}$</h3>
                    <i onclick='DeleteCart(${j++})' class="far fa-trash-alt"></i>
                </div>
                `
            )
        }).join('');
        
    }
}