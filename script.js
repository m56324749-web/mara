let nami = +prompt("1-chi sonni kiriting")
let age = +prompt("Sonning darajasini kiriting")
name * age
for (let i = nami; i <= age; i++) {
    nami = nami * i * i
    console.log(name);
}
while (isNaN(nami)) {
    nami = +prompt("1-chi sonni boshidan kiriting")
}
while (isNaN(age)) {
    age = +prompt("Sonning darajasini boshidan kiriting")
}