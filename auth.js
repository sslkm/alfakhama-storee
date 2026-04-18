// 🔐 بيانات الأدمن (مؤقتة - لاحقًا نستبدلها بـ Firebase Auth)
const adminUser = {
email: "admin@store.com",
password: "123456"
};

// 🔥 تسجيل الدخول
function login(){
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === adminUser.email && password === adminUser.password){
localStorage.setItem("isAdmin", "true");
alert("تم تسجيل الدخول بنجاح 🔥");
window.location.href = "dashboard.html";
}else{
alert("بيانات الدخول غير صحيحة ❌");
}
}

// 🔥 تسجيل الخروج
function logout(){
localStorage.removeItem("isAdmin");
window.location.href = "index.html";
}

// 🔥 التحقق من صلاحية الأدمن
function checkAdmin(){
return localStorage.getItem("isAdmin") === "true";
}

// 🔥 منع الدخول للوحة التحكم بدون تسجيل
function protectAdminPage(){
if(!checkAdmin()){
alert("غير مصرح بالدخول ❌");
window.location.href = "login.html";
}
}