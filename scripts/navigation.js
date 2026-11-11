//Get a list of items to watch
const myListOfItems= document.querySelectorAll('article')
console.log(myListOfItems)

//Configure the Observer
const observerOptions={
    //null is the default and references the viewport
    root: null,
    //alters the viewport, negative values decrease the size.
    rootMargin: '0px 0px 0px 0px',
    //0 is barely showing, 1 is fulling showing
    threshold: 0
}

//AllItems is a list of all elements being watched
const myObserver= new IntersectionObserver(allItems =>{
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            highlight(singleItem.target)
        }
    })
}, observerOptions)

//Funtion to Add a class
function highlight(cmi) {
    document.querySelector('xxx').classList.remove('xxx');
    let theid= cmi.getAttribute('id');
    let newActiveLink = document.querySelector(`[href="#${theid}"]`)
    newActiveLink.parentElement.classList.add('xxx');
}

//Call the Observer on page load
myListOfItems.forEach(item => {
    myObserver.observe(item)
});