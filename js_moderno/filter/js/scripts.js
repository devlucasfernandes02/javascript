const arr = [1, 2, 3, 4, 5]

console.log(arr);

const highNumbers = arr.filter((n) => {
    if(n >= 4) {
        return n
    }
})

console.log(highNumbers);

const users = [
    {name: "Lucas", available: true},
    {name: "Pedro", available: false},
    {name: "João", available: false},
    {name: "Marcos", available: true},
    
]

const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers);
console.log(notAvailableUsers);