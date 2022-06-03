var cards = [
    {
        imgUrl: "img/item1.png",
        title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
        currentPrice: $ 398.93,
        oldPrice: $ 499.00,
        rating: 
    }
];
    


var ul = document.querySelector('.cards ul');
var htmlStr = '';

for(var i=0; i<cards.length; i++){
    htmlStr += `
    <ul>
        <img src="${cards[i].imgUrl}" alt="item1">
        <p>${cards[i].title}</p>
        <p>${cards[i].currentPrice}</p>
        <p>${cards[i].oldPrice}</p>
        <ul>${cards[i].rating}</ul>
    </ul>        
    `
}
ul.innerHTML = htmlStr