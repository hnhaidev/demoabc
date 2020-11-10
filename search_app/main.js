$(function() {
    let product = [{
            id: 1,
            name: "Apple",
            price: 10,
            img: "https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg"
        },
        {
            id: 2,
            name: "Samsung",
            price: 15,
            img: "https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg"
        },
        {
            id: 3,
            name: "Nokia",
            price: 20,
            img: "https://media.travelmag.vn/files/thuannguyen/2020/04/25/cach-chup-anh-dep-tai-da-lat-1-2306.jpeg"
        },
    ];

    // load product
    renderProduct(product);

    // click button
    // $('.btn-search').click(function (e) { 
    //     e.preventDefault();
    //     let search_input = $('.search-item').val();
    //     const filterProduct = product.filter((val) => {
    //         return val.name.toLowerCase().includes(search_input.toLowerCase());
    //     })
    //     renderProduct(filterProduct);
    // });

    $('.search-item').keyup(function(e) {
        e.preventDefault();
        const searchInput = $('.search-item').val();
        const searchExp = new RegExp(searchInput, "ig");
        const filterProducts = product.filter(val => val.name.match(searchExp)).map(val => {
            return {
                ...val,
                name: val.name.replace(searchExp, (math) => {
                    return `<span style= "color: red;">${math}</span>`;
                })
            }
        });
        console.log(filterProducts);
        renderProduct(filterProducts);
    });
});

function renderProduct(product) {
    $('.product .row').empty();
    if (product.length) {
        product.map((val) => {
            $(`
        <div class="col">
            <div class="item">
                <img src=${val.img} alt="">
                <h2>${val.name}</h2>
                <p>${val.price}</p>
            </div>
        </div>
        `).appendTo('.product .row');
        });
    } else {
        $(`<h1>No Product Found</h1>`).appendTo('.product .row');
    }
}