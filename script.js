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
console.log(products)
let tmp_p = products;
let productlist = document.getElementById('product-list');
function render(list) {
    productlist.innerHTML = '';
    list.map((val) => {
        productlist.innerHTML+=innerhtml(val);
    })
}

function innerhtml(val){
    return `<li>
                <img src=${val.img} />
                <h3>${val.name}</h3>
                <h4>${val.price}</h4>
            </li>`
}

function filter() {
    let filter = document.querySelectorAll('input[name="brand"]:checked');
    if (filter.length == 0) {
        render(products);
    }
    else {
        document.getElementById('short').value='';
        // s_val.value='';
        tmp_p=[];
        for (let i = 0; i < filter.length; i++) {
            // console.log(filter[i].value);
            let tmp = products.filter((item) => item.brand === filter[i].value);
            tmp_p=[...tmp_p,...tmp];
            // tmp_p.push(tmp);
            console.log(tmp_p)

            // console.log(filterProduct);
            render(tmp_p);
        }
    }
}

function shortProducts(){
    let s_val = document.getElementById('short').value;
    if(s_val=='by-name')
    {
        srt('name');
    }
    if(s_val=='low-high')
    {
        srt('price');
    }
    if(s_val=='high-low')
    {
        srt_desc('price')
    }
}

function srt(s_val)
{
    // console.log(s_val);
    tmp_p = tmp_p.sort((a, b)=> a[s_val] < b[s_val] ? -1 : 1);
    // console.log(s_product)
    render(tmp_p);
}

function srt_desc(s_val){
    tmp_p = tmp_p.sort((a, b)=> a[s_val] > b[s_val] ? -1 : 1);
    // console.log(s_product)
    render(tmp_p);
}

window.onload = () => {
    render(products)
};