const products = [{ name: 'Adida-1', brand: 'adidas', img: 'https://m.media-amazon.com/images/I/71VQxLV+h4L._AC_UL320_.jpg', price: 2500 },
{ name: 'A', brand: 'adidas', img: 'https://m.media-amazon.com/images/I/41OnPqQs7jL._AC_UL320_.jpg', price: 4500 },
{ name: 'Z', brand: 'adidas', img: 'https://m.media-amazon.com/images/I/515EOROiOuL._AC_UL320_.jpg', price: 8500 },
{ name: 'P', brand: 'nike', img: 'https://m.media-amazon.com/images/I/71t+gAhSjRL._AC_UL320_.jpg', price: 8500 },
{ name: 'B', brand: 'nike', img: 'https://m.media-amazon.com/images/I/51aIZ39J-GL._AC_UL320_.jpg', price: 9500 },
{ name: 'L', brand: 'nike', img: 'https://m.media-amazon.com/images/I/51FvhPa2dhL._AC_UL320_.jpg', price: 11500 },
{ name: 'R', brand: 'puma', img: 'https://m.media-amazon.com/images/I/518bLtYspKL._AC_UL320_.jpg', price: 10500 },
{ name: 'C', brand: 'puma', img: 'https://m.media-amazon.com/images/I/81G09nYZVIL._AC_UL320_.jpg', price: 8500 },
{ name: 'T', brand: 'puma', img: 'https://m.media-amazon.com/images/I/61uj2S1vOPL._AC_UL320_.jpg', price: 2500 },
]

let tmp_p = products;
let productlist = document.getElementById('product-list');


function render() {
    productlist.innerHTML = '';
    tmp_p.map((val) => {
        productlist.innerHTML += innerhtml(val);
    })
}

function innerhtml(val) {
    return `<div class="card">
    <img src=${val.img} >
    <h4>${val.name}</h4>
    <h4>${val.brand}</h4>
    <h4>${val.price}</h4>
</div>`
}

function filter() {
    let filter = document.querySelectorAll('input[name="brand"]:checked');
    if (filter.length == 0) {
        tmp_p = products
        srt('name');
        render();
    }
    else {
        tmp_p = [];
        for (let i = 0; i < filter.length; i++) {
            let tmp = products.filter((item) => item.brand === filter[i].value);
            tmp_p = [...tmp_p, ...tmp];
            srt('name');
            document.getElementById('short').value = 'A-Z'
            render();
        }
    }
}

function shortProducts() {
    let s_val = document.getElementById('short').value;
    if (s_val == 'A-Z') {
        srt('name');
    }
    if (s_val == 'Z-A') {
        srt_desc('name');
    }
    if (s_val == 'low-high') {
        srt('price');
    }
    if (s_val == 'high-low') {
        srt_desc('price')
    }
}

function srt(s_val) {
    tmp_p = tmp_p.sort((a, b) => a[s_val] < b[s_val] ? -1 : 1);
    render();
}

function srt_desc(s_val) {
    tmp_p = tmp_p.sort((a, b) => a[s_val] > b[s_val] ? -1 : 1);
    render();
}

function setcokie() {
    const d = new Date();
    d.setTime(d.getTime() + (20 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = 'popup' + "=" + 'true' + ";" + expires;
    document.getElementById('pop-up').classList.add('pop-hide');
}

window.onload = () => {
    srt('name');
    render()
    let pop = document.cookie.indexOf('popup');
    if (pop==-1) {
        document.getElementById('pop-up').classList.remove('pop-hide')
    }
};