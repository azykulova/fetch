// ===Promise===
// Promise это объект, который отрабатывает асинхронные запросы

// const promise  = new Promise((resolve ,reject)=>{
//     setTimeout(() => resolve('API is done'),2000)
//     setTimeout(()=> reject('Error in reduest'),2000)
// })

// promise.then(result=> console.log('Success:' +result),
//         error=> console.log('Rejected:'+ error)
// ) 

// обработчик then позволяет провести следующее после прохождения запроса,
// then отрабатывает и resolve и reject

// При успешным выпалнении запроса сработает resolve(разрешить)
// При ошибке сервера или javascript кода сработает reject(отказать)


const user  = "http://jsonplaceholder.typicode.com/users"

// fetch - это функция в  javascripte, которая отправляет запрос на  API 
// API Application  Programming Interface
// программные интерфейс приложения 
// API - url,которые содержит в себе коллекйию данных

// const newPromise = new Promise (resolve=>{
//     resolve(fetch(user))
// })
// newPromise.then(response =>response.json()
//     .then(json => console.log(json))
// )
const requestApi=()=>{
fetch(user)
.then(response => response.json())
.then(json =>render(json))
}
requestApi()



const render = (api) => {
    const output = document.querySelector('.output')
    console.log(api)
    api.map(el => {
       
        const items = document.createElement('div')
        items.className='items'
        const name = document.createElement('p')
        const surname = document.createElement('p')
        const email = document.createElement('p')
        const address= document.createElement('p')
        const company = document.createElement('p')

        name.textContent=el.name.split(' ')[0]
        surname.textContent=el.name.split(' ')[1]
        email.textContent=el.email
        address.textContent=el.address.street
        company.textContent=el.company.name


        items.append(name,surname,email,address,company)
        output.append(items)
    
        name.addEventListener('click',()=>{
            alert(el.username)
        })

        surname.addEventListener('click',()=>{
            alert(el.username)
        })

        email.addEventListener('click',()=>{
            alert(el.phone)
        })

        address.addEventListener('click',()=>{
            alert(el.address.zipcode)
        })
        company.addEventListener('click',()=>{
            alert(el.company.catchPhrase)
        })

    })
}



//  Внутри fetch уже есть promise 