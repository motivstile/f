let fruits = ["apple", "banana", "orange", "grape"];

console.log("Dastlabki uzunligi:", fruits.length);
alert("Massiv uzunligi: " + fruits.length);

let result = confirm("Massivdan bitta elementni olib tashlamoqchimisiz?");

if (result) {
  fruits.pop();
  alert("Yangi uzunligi: " + fruits.length);
  console.log("Yangi massiv:", fruits);
} else {
  alert("Massiv o‘zgarishsiz qoldi.");
  console.log("Massiv o‘zgarishsiz:", fruits);
}
