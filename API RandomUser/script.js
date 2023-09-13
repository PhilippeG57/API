// Ma premiere fonction permet de récupérer mes données JSON de mon API
async function getUsers(){
    try{
        /*Le mot "await" est utilisé pour attendre que la promesse renvoyée par
        response.json soit résolue*/
        const response = await fetch("https://randomuser.me/api/?nat=fr&results=5");
        /* je mets results entre accolades pour extraire une propriété spécifique de results
        c'est à dire son tableau dans ce cas présent */
        const { results } = await response.json();
        console.log(results);
        createUsersList(results)
    }
    catch(error){
        console.log(error);
    }
}

//Je prends mon element ul pour y ajouter les balises li sous forme de boucle plus tard
const tableResults = document.querySelector(".table-results")

// Ma deuxieme fonction permet d'afficher les données de ma premiere fonction dans mon HTML
function createUsersList(array){
    console.log(array);
    array.forEach(user => {
        //Je crée une balise li et lui donne un nom de class
        const listItem = document.createElement("li")
        listItem.classList.add("table-item");

        //J'entre des données dans ma balise li avec mes variables (image, nom, adresse,...) de l'utilisateur
        listItem.innerHTML = `<p>${user.name.first} ${user.name.last}</p>
        <p>${user.email}</p>
        <p>${user.phone}</p>`;

        tableResults.appendChild(listItem);
    })
}

getUsers()