// 🔥 بيانات المنتجات (مؤقتة - لاحقًا من قاعدة بيانات)
let products = [
{
id: 1,
name: "شيشة فاخرة",
category: "شيش فحم",
price: 500,
image: "https://via.placeholder.com/400"
},
{
id: 2,
name: "شيشة إلكترونية",
category: "شيش الكتروني",
price: 350,
image: "https://via.placeholder.com/400"
},
{
id: 3,
name: "معسل تفاحتين",
category: "معسلات",
price: 50,
image: "https://via.placeholder.com/400"
},
{
id: 4,
name: "فحم طبيعي",
category: "فحم",
price: 20,
image: "https://via.placeholder.com/400"
}
];

// 🔥 عرض المنتجات
function renderProducts(list){
let container = document.getElementById("products");
container.innerHTML = "";

list.forEach(p => {
container.innerHTML += `
<div class="product">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>السعر: ${p.price} ريال</p>
<button onclick="addToCart(${p.id})">إضافة للسلة</button>
</div>
`;
});
}

// 🔥 فلترة حسب القسم
function filter(category){
if(category === "all"){
renderProducts(products);
}else{
let filtered = products.filter(p => p.category === category);
renderProducts(filtered);
}
}

// 🔥 تشغيل أولي
window.onload = function(){
renderProducts(products);
};