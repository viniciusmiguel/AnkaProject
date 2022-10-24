var Basket = [];

function PopulateBasket() {
    var basketContainer = $(".basket-container");
    var basketTemplate = $(".basket-product-template");

    basketContainer.empty();
    
    for(var i = 0; i < Basket.length; i++){
        var product = Basket[i];
        if(product == null)
            continue;
        
        var basketRow = basketTemplate.clone(true,true);

        basketRow.addClass("basket-product");
        basketRow.removeClass("basket-product-template");



        basketContainer.append(basketRow);
        basketRow.show();
    }
}

function AddProductToBasket(product) {
    var index = Basket.findIndex((item) => item.Name == product.Name);
    if(index >= 0) {
        Basket[index].Quantity +=1;
    } else {
        Basket[Basket.length] = product;
    }
    
    PopulateBasket();
}

function RemoveProductFromBasket(product) {
    var index = Basket.findIndex((item) => item.Name == product.Name);
    if(index >= 0) {
        Basket[index] = null;
    }

    PopulateBasket();
}

