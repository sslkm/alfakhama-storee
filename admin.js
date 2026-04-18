// 🔐 التحقق من الأدمن قبل أي شيء
function protectAdmin(){
if(localStorage.getItem("isAdmin") !== "true"){
alert("غير مصرح ❌");
window.location.href = "login.html";
}
}

// 🔥 عند فتح لوحة التحكم
window.onload = function(){
protectAdmin();
loadAdminProducts();
};

// 🔥 إضافة منتج جديد
function addProduct(){
let name = document.getElementById("pname").value;
let price = document.getElementById("pprice").value;
let category = document.getElementById("pcat").value;
let image = document.getElementById("pimg").value;

if(!name || !price || !category){
alert("أكمل البيانات");
return;
}

let newProduct = {
id: Date.now(),
name,
price,
category,
image
};

// إضافة للقائمة (من products.js)
products.push(newProduct);

// حفظ مؤقت (localStorage)
localStorage.setItem("products", JSON.stringify(products));

alert("تم إضافة المنتج 🔥");
loadAdminProducts();
}

// 🔥 عرض المنتجات داخل لوحة التحكم
function loadAdminProducts(){
let container = document.getElementById("adminProducts");
if(!container) return;

container.innerHTML = "";

products.forEach((p, index) => {
container.innerHTML += `
<div style="background:#222;padding:10px;margin:10px;border-radius:10px;">
<h4>${p.name}</h4>
<p>${p.price} ريال</p>
<button onclick="deleteProduct(${index})">حذف</button>
</div>
`;
});
}

// 🔥 حذف منتج
function deleteProduct(index){
products.splice(index, 1);
localStorage.setItem("products", JSON.stringify(products));
loadAdminProducts();
alert("تم الحذف 🗑️");
}