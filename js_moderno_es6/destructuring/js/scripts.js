const fruits = ["Maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits;

console.log(f1, f2, f3);

const productDetails = {
    name: "Mouse",
    price: 49.99,
    category: "Periféricos",
    color: "Cinza"
}

const {name: productName, price: productPrice, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${productPrice}, pertence a categoria ${productCategory} e é da cor ${color}`);