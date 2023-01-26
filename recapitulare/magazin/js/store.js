const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}
const getStorageItem = (item ) =>{
    let storageItem = localStorage.getItem(item);
    if (storageItem){
        storageItem = JSON.parse(localStorage.getItem(item))
    } else{
        storageItem = []
    }
    return storageItem

}

let store = getStorageItem("store");
const setupStore = (products) =>{
    store = products.map((product) => {
        const{
            id,
            fields: {featured, name, price, company, colors, image: img},
        } = product;
        const image = img[0].thumbnails.large.url;
        return {id, featured, name, price, company, colors, image};
    });
    setStorageItem("store", store)
}


const findProduct = (id) =>{
    let product = store.find((product) => product.id === id);
    return product;
};
const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US',{
        style: "currency",
        currency: "EUR",
    }).format((price/100).toFixed(2))
    return formatPrice
}
const getElement = (selection) =>{
    const element = document.querySelector(selection)
    if(element) return element
    throw new Error (`please check "${selection}"selector, no such element exist`)
}