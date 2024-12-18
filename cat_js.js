let like_btn=document.querySelector('.like_');
let like=document.querySelector('.like_ i');
let inc=0;
function liked(i){
    if(inc==0){
        i.classList.remove("fa-regular");
        i.classList.add("fa-solid");
        inc=1;
    }
    else{
        i.classList.remove("fa-solid");
        i.classList.add("fa-regular");
        inc=0;
    }
}
function calculateTotalAmount() {
    var cartItems = document.querySelectorAll('.cart_item');
    var totalAmount = 0;
    cartItems.forEach(function(cartItem) {
        var priceText = cartItem.querySelector('.item_details p').textContent;
        var price = parseFloat(priceText.match(/\d+(\.\d+)?/)[0]);
        totalAmount += price;
    });
    return totalAmount;
}

// Function to update total amount in the cart
function updateTotalAmount() {
    var totalAmount = calculateTotalAmount();
    var totalElement = document.getElementById('total_amount');
    totalElement.textContent = 'Total: Rs. ' + totalAmount.toFixed(2);
}

function addItemToCart(imageSrc, itemName, itemPrice) {
    var cartBox = document.getElementById('cartBox');

    var cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');

    var itemImage = document.createElement('img');
    itemImage.src = imageSrc;
    itemImage.alt = itemName;

    var itemDetails = document.createElement('div');
    itemDetails.classList.add('item_details');

    var itemNameElement = document.createElement('h2');
    itemNameElement.textContent = itemName;

    var itemPriceElement = document.createElement('p');
    itemPriceElement.textContent = 'Price: ' + itemPrice;

    itemDetails.appendChild(itemNameElement);
    itemDetails.appendChild(itemPriceElement);

    var removeButton = document.createElement('button');
    removeButton.classList.add('remove_item');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        cartItem.remove();
    });

    cartItem.appendChild(itemImage);
    cartItem.appendChild(itemDetails);
    cartItem.appendChild(removeButton);

    cartBox.querySelector('.items').appendChild(cartItem);
    updateTotalAmount();
}
function changecontent(button){
    button.textContent="Added";
    setTimeout(() => {
        button.textContent="ADD";
    }, 1500);
}
document.querySelector('.closer').addEventListener('click',function(){
    document.querySelector('.cart_box').style.visibility="hidden";
    document.querySelector('.parent_').style.visibility="hidden";
    document.querySelector('body').style.overflow="scroll";
})
document.querySelector('.nav_bar button').addEventListener('click',function(){
    document.querySelector('.cart_box').style.visibility="visible";
    document.querySelector('.parent_').style.visibility="visible";
    document.querySelector('body').style.overflow="hidden";
    if(!document.querySelector('.items').hasChildNodes()){
        console.log(document.querySelector('.items'));
    }
})
