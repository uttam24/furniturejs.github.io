var btnProduct = document.getElementsByClassName('btn-product');
var cartItems = document.getElementsByClassName('cart-items')[0];

	 	for(var i = 0; i<btnProduct.length; i++){
	 		var buttonClicked = btnProduct[i]
	 		buttonClicked.addEventListener('click', updateContainer);

	 	}
	 	function updateContainer(e){

	 		var buttonEvent = e.target
	 		productContainer = buttonEvent.parentElement.parentElement.parentElement.parentElement;
	 		productTitle = productContainer.getElementsByClassName('product-title')[0].innerText;
	 		productPrice = productContainer.getElementsByClassName('product-price')[0].innerText;
	 		productImg = productContainer.getElementsByClassName('img')[0].src;
	 		var cart_item_add = document.getElementsByClassName('cart_item')[0];
	 		cart_item_add.innerHTML = parseInt(cart_item_add.innerHTML) + 1;
	 		if(cart_item_add.innerHTM >=  4){
		       cart_item_add.innerHTM = 4;
		    }

			cartTitle = cartItems.getElementsByClassName('cartTitle');

	 		for(var i = 0; i<cartTitle.length; i++){
	 			if(cartTitle[i].innerText == productTitle){
	 				alert('item already in cart');
	 				return;
	 			}
	 		}


	 		AddnewRowinCart(productTitle,productPrice,productImg)
	 		var totalProductPrice = 0;
	 		cartPriceTotal = cartItems.getElementsByClassName('cartPrice');
	 		for (var j = 0; j<cartPriceTotal.length; j++){
	 			totalProductPrice = totalProductPrice + parseInt(cartPriceTotal[j].innerText.replace('$',''));
	 		}
	 		
	 		document.getElementsByClassName('total-cart-price')[0].innerText =  totalProductPrice


	 	}

	 	function AddnewRowinCart(productTitle,productPrice,productImg){
	 		div = document.createElement('div');
	 		div.classList.add('itemContainer');
	 		insideDivElement = `<div class="itemImage"><img alt="product" class='img-fluid' src="${productImg}"/></div>
					<div class="cartTitle">${productTitle}</div>
					<div class="cartPrice">${productPrice}</div>
					<div class="removeButton">Remove</div>`;
	  		 div.innerHTML = insideDivElement;
	  		cartItems.appendChild(div)
	  		removeButton = document.getElementsByClassName('removeButton');
	  		for (var i =0; i<removeButton.length; i++){
	  			removeButton[i].addEventListener('click', removeFrmCart)
	  		}
	  	
	  		
	 	}


	 	function removeFrmCart(e){
	 		e.target.parentElement.remove();
	 		updatePriceAfterRemove();
	 	}

	 	function updatePriceAfterRemove(){
	 		var totalProductPrice = 0;
	 		cartPrices = cartItems.getElementsByClassName('cartPrice');
	 		for(var i=0; i<cartPrices.length; i++){
	 			priceFormatedNumb = cartPrices[i].innerText.replace('₹', '').replace(',', '');
	 			totalProductPrice = totalProductPrice + parseInt((priceFormatedNumb));
	 			console.log(totalProductPrice)
	 		}
	 		 document.getElementsByClassName('total-cart-price')[0].innerText = new Number(totalProductPrice).toLocaleString('en');
	 	}