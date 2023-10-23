
const categories = document.getElementById("categories")
let listProduct;

function showCategories(category) {

    const cardPrincipal = document.createElement("div");
    cardPrincipal.classList.add("card","card-category", "cardPrc");
    cardPrincipal.style.width = "18rem";

    // Creamos IMG 
    const imgCategory = document.createElement("img");
    imgCategory.src = category.image;
    imgCategory.classList.add("card-img-top");
    imgCategory.alt = "Esto es una imagen de producto";
    imgCategory.style.width = "90%";
    imgCategory.style.display = "block";
    imgCategory.style.margin = "0 auto";
    imgCategory.style.paddingTop = "1rem";

    // Creamos card-body
    const cardTxt = document.createElement("div");
    cardTxt.classList.add("card-txt");

    // Creamos h4
    const cardH4 = document.createElement("h4");
    cardH4.classList.add("card-h4");
    cardH4.innerHTML = category.name;
    
    cardPrincipal.appendChild(imgCategory);
    cardPrincipal.appendChild(cardTxt);
    cardPrincipal.appendChild(cardH4);
    categories.appendChild(cardPrincipal);

    // Event listener para mostrar los productos de la categoría cuando se hace clic en la categoría
    cardPrincipal.addEventListener("click", () => {
        showProductsByCategory(category.name);
    });
}

    
    //Esto nos devolverá toda la lista de productos
    async function getCategories() {

        let categoriasVistas = []
        const response = await fetch("https://dummyjson.com/products")
        const listCategories = await response.json()
        const listaFinal = listCategories.products
            .map(product => {
                return {
                    name: product.category,
                    image: product.thumbnail
                }
            }) 
             .filter(category => {
                if (categoriasVistas.includes(category.name)) {
                    return false
                }

                categoriasVistas.push(category.name)
                return true
            }) 
             .forEach(category => showCategories(category))
        console.log(listaFinal)
    }
    
    getCategories()
    
    





//--------------------------- CARD PRODUCTS -------------------------------------

//Capturamos el elemento padre donde van a ir nuestros productos
const productos = document.getElementById("productos")



function addProducts(product) {
    //se guarda el id en una const entonces en vez de poner "producto-" + product.id solo se usa id, más simple.
    const id = "producto-" + product.id
     // creamos nuestro DIV card que va a contener info del producto
    const card = document.createElement("div")
    card.classList.add("card")
    card.style.width = "18rem"
    card.id = id

    //Creación de botón para eliminar
    const buttonDelete = document.createElement("button")
    buttonDelete.classList.add("btnDelete")
    buttonDelete.innerHTML = "Delete product"
    buttonDelete.addEventListener("click", () => {
        deleteProduct(id)
    })

     //Creación de botón para editar
     const buttonEdit = document.createElement("button")
     buttonEdit.classList.add("btnEdit")
     buttonEdit.innerHTML = "Show description"
     buttonEdit.addEventListener("click", () => {
         editProduct(id, product.description)
     })

     /*Creación de botón para agregar al carrito
    const buttonCart = document.createElement("button")
    buttonCart.classList.add("btnCart")
    buttonCart.innerHTML = "Add to cart"
    buttonCart.addEventListener("click", () => {
        addToCart(id)
    })*/

    //creamos IMG de card
    const image =document.createElement("img")
    image.src = product.images[0];
    image.classList.add("card-img-top")
    image.alt = "Esto es una imagen de producto"
    image.style.width = "90%"
    image.style.height = "100%"
    image.style.display = "block";
    image.style.margin = "0 auto"
    image.style.paddingTop = "1rem"

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    const parrafo = document.createElement("p")
    parrafo.classList.add("card-text")
    parrafo.innerHTML = product.title

    cardBody.appendChild(parrafo)
    card.appendChild(image)
    card.appendChild(cardBody)
    card.appendChild(buttonEdit)
    card.appendChild(buttonDelete)
    productos.appendChild(card)
}

function deleteProduct(id) {
    const element = document.getElementById(id)
    productos.removeChild(element)
}

function editProduct(id, text) {
    const card = document.getElementById(id)
    const cardBody = card.querySelector(".card-body")
    const parrafo = cardBody.querySelector("p")
    parrafo.textContent = text
}


//Esto nos devolverá toda la lista de productos
async function getProducts() {
    const response = await fetch("https://dummyjson.com/products")
    //Esta función "listProduct" va a obtener los productos, los va a iterar y los va a agregar al DOM
    const listProduct = await response.json()
    //Se utiliza listProduct.products para sacar del objeto el valor de products.
    listProduct.products.forEach(product => addProducts(product))

    setTimeout(() => {
    const removeProduct = document.getElementById("producto-29")
    productos.removeChild(removeProduct)
}, 3000)
}


getProducts()



