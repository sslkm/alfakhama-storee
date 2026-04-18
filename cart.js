// 🔥 السلة
let cart = [];

// 🔥 إضافة للسلة
function addToCart(id){
let product = products.find(p => p.id === id);
cart.push(product);
updateCart();
}

// 🔥 تحديث عرض السلة
function updateCart(){
let box = document.getElementById("cartText");

if(cart.length === 0){
box.innerText = "السلة فارغة";
return;
}

let text = "";
cart.forEach(p => {
text += `${p.name} - ${p.price} ريال\n`;
});

box.innerText = text;
}

// 🔥 الذهاب لصفحة الدفع (واتساب)
function goCheckout(){

if(cart.length === 0){
alert("السلة فارغة");
return;
}

let message = "🛒 طلب جديد من متجر الفخامة:\n\n";

cart.forEach(p => {
message += `- ${p.name} (${p.price} ريال)\n`;
});

message += "\nشكراً لطلبك ❤️";

let phone = "967776661607"; // 👈 ضع رقمك هنا

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

window.open(url, "_blank");
}