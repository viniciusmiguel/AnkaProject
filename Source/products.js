var products = [
{
    Name: "Product One",
    Description: "Description of Product One",
    ImageUrl: "images/p1.jpg"
},
{
    Name: "Product Two",
    Description: "Description of Product Two",
    ImageUrl: "images/p1.jpg"
},
{
    Name: "Product Three",
    Description: "Description of Product Three",
    ImageUrl: "images/p1.jpg"
},
];

function PopulateProducts() {
    var productContainer = $(".product-list-container");
    var productTemplate = $(".product-card-template");

    for(var i = 0; i < products.length; i++) {

        var card = productTemplate.clone(true,true);
        
        card.addClass("product-card");
        card.removeClass("product-card-template"); 

        var img = card.find(".card-img-top");
        img.attr("src", products[i].ImageUrl);
        img.attr("alt", products[i].Name);

        var title = card.find(".card-title");
        title.text(products[i].Name);

        var description = card.find(".card-text");
        description.text(products[i].Description);

        productContainer.append(card);
        card.show();
    }
}