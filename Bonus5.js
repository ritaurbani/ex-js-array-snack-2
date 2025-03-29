// Snack 5 - Raccogli i libri

// Usando la l'API 
// https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} 
// usa la combinazione di .map() e Promise.all(), 
// per creare una funzione (getBooks) che a partire da un array di id (ids), 
// ritorna una promise che risolve un array di libri (books).
// Testala con l’array[2, 13, 7, 21, 19].


const ids = [2, 13, 7, 21, 19] 
//mappare ids(arrays di strings) in un array di promises
//che do in pasto a promise all per ottenere un array di libri 
//

async function getBooks(ids) {
    const url = `https://boolean-spec-frontend.vercel.app/freetestapi/books/`

    //promessa non del fetch ma del response.json - array di promises che sono il risultato del mio repsonse.jason al fetch della mia risorsa
    const promises = ids.map((id) => fetch(`${url}${id}`).then(res => res.json())
    )
    //promise.all funziona solo quando tutto va a buon fine
    const books = await Promise.all(promises)//ottengo un array in cui ogni elemento e il valore del risolve di questa response (response.json) oggetto che rappresenta il libro
    return books
}

getBooks(ids)
.then(books => console.log(books))

//CORS Unblock- tentativo di effettuare una richiesta a un dominio diverso dalla pagina stessa, safety issue
//installa estensione che obbliga chrome ad ignorare il cors - solo per test locali