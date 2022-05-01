let callback = () => {
    console.log('Exemplo callback')
}
setTimeout(callback, 2000)


const promise = new Promise((resolve, reject) => {
    resolve()
    reject()
})

promise
    .then((value) => {
        console.log(value)
    })
    .catch((err) => {
        console.log('Deu erro', err)
    })

// Async e Await
console.log('Passo1')
await console.log('Passo2')
console.log('Passo3')
