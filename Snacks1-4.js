const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//1.

// Snack 1 - Filtra e Modifica
// Crea una funzione che somma due numeri.
// Crea un array(longBooks) con i libri che hanno più di 300 pagine;
// Creare un array(longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

//ESECUZIONE
// const longBooks = books.filter((book) => book.pages > 300)
// console.log(longBooks)
// const longBooksTitles = longBooks.map((book) => book.title)
// console.log(longBooksTitles)
//longBooksTitles.forEach(title => console.log(title))//OGNI TITOLO SINGOLARMENTE

//2.

// Snack 2 - Il primo libro scontato
// Creare un array(availableBooks) che contiene tutti i libri disponibili.
// Crea un array(discountedBooks) con gli availableBooks,
// ciascuno con il prezzo scontato del 20 % (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile(fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero(senza centesimi).

//ESECUZIONE
// const availableBooks = books.filter((book) => book.available === true)
// console.log(availableBooks)

//Mia Versione
// const discountedBooks = availableBooks.map((book)=>{
//     // const {price} = book
//     const discountedPrice = Number(book.price.slice(0,-1)) * 0.80
//    return discountedPrice + "$"
// })
// console.log(discountedBooks)

// const fullPricedBook = discountedBooks.find((price) => !price.includes("."))
// console.log(fullPricedBook)

//HYUR VERSION

const discountedBooks = availableBooks.map(book => {
    //parseFloat-converte in numero con virgola
    const price = parseFloat(book.price.replace("€", ""))
    const discountedPrice = (price * .8).toFixed(2)//torna stringa e max 2 decimali
    return {//ritorniamo tutte le proprieta precedenti di books, cambia solo prezzo
        ...book, price: `${discountedPrice}€`//sovrascrivo solo nuovo prezzo scontato
        }//ritorno nuovo array books che hai prezzo libri scontati
})
console.log(discountedBooks)
//////////
// const fullPricedBook = discountedBooks.find((book) => {
    //ESTRARRE PREZZO
    //const price = parseFloat(book.price.replace("€", ""))
    //Vedere se e prezzo intero: prezzo intero se divido per 1 non ha resto
   // return price % 1 === 0; // return Number.isInteger(price)

// }
// console.log(fullPricedBook)



//3.

// Snack 3 - Ordinare gli Autori
// Creare un array(authors) che contiene gli autori dei libri.
// Crea una variabile booleana(areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)
//Sort e manipolativo quindi non serve creare nuovo array

//ESECUZIONE
// const authors = books.map((book) => book.author)
// console.log(authors)

const areAuthorsAdults = authors.every((author) => author.age > 18)
console.log(areAuthorsAdults)
// authors.sort((a,b) => (a.age - b.age) * (areAuthorsAdults? 1 : -1))
if (areAuthorsAdults){
    authors.sort((a, b) => a.age - b.age)
}else {
    authors.sort((a, b) => b.age - a.age)
}
console.log(authors)



// authors.sort((a,b) => a.name.localeCompare(b.name))
// console.log(authors)

//4.

// Snack 4 - Calcola l’età media
// Creare un array(ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età(agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

//ESECUZIONE
// const ages = books.map((book) => book.author.age)
// console.log(ages)

// const agesSum = ages.reduce((acc, curr) => {
//     return acc + curr
// },0)

// const ageAvg = agesSum/ages.length
// console.log(ageAvg)






