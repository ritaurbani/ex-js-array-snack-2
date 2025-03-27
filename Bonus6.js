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


// Snack 6(Bonus) - Ordina i libri

// Crea una variabile booleana(areThereAvailableBooks) per verificare 
// se c’è almeno un libro disponibile.
// Crea un array(booksByPrice) con gli elementi di books ordinati in base 
// al prezzo(crescente).
// Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), 
// senza creare un nuovo array.

const areThereAvailableBooks = books.some((book) => book.available === true)
console.log(areThereAvailableBooks)

//ordinare array e salvare versione ordinata da un altra parte
const booksByPrice = books.sort((a,b) => {
    //turn them into valori numerici estraendo numero
    priceA = parseFloat(a.price.replace("€", ""))
    priceB = parseFloat(b.price.replace("€", ""))
    return priceA - priceB //adesso sono valori numerici
}) 
console.log(booksByPrice)
console.log(books, booksByPrice)//ordinati nella stessa maniera
//per evitare questo > duplicare array di libri quando lo ordiniamo
//creo nuovo array dove faccio spread di books
//ha senso se vuoi ordinare l array salvandone uno nuovo e mandenendo quello vecchio immutato
//dobbiamo ritornare un valore che sia 1, -1, 0 (no booleano)
booksByPrice.sort((a,b) => a.available? -1 : 1)
// booksByPrice.sort((a,b) =>a.available === b.available? 0 : a.available? -1:1)
console.log(booksByPrice)