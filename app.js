// My Main Variables
//and we just used the fragment to enhance the performance by decreasing the repaint and reflow.

const myNavbarList  = document.getElementById('navbar__list');
const myFragment    = document.createDocumentFragment();
const mySections    = document.querySelectorAll('section');
const myUl          = document.getElementById("navbar__list");
/*
- Here I looped through my sections to add the nav_menu's ul items ('a') as a funcion of the no. of section.
- gave every <a> a click event to it's section using data_nav.
*/
mySections.forEach(element => {
    let listItem = document.createElement('li');
    let anchor   = document.createElement('a');
        anchor.classList.add('menu__link');
    let text     = element.getAttribute('data-nav');
    let textNode = document.createTextNode(text);
    
      /*added an "addEventListener" with "ScrollIntoView" element with smooth beahvior which make the view window move to the section smoothly*/
    anchor.addEventListener('click',()=> {
        element.scrollIntoView({behavior:'smooth'});
    });

    anchor.appendChild(textNode);
    listItem.appendChild(anchor);
    myFragment.appendChild(listItem);
    
});

myNavbarList.appendChild(myFragment);

//I have almost done half of the reqirements


const myLinks = document.querySelectorAll('a');

/*
here we identfy active section through "getClientBoundingRect()"; which take place 
by scroll event on window, and then (after identfying the active section) we changed it's 
style through changing class and then connect it to it's link element through the data_nav 
*/

window.addEventListener('scroll',(event) => {
    mySections.forEach(element => {
        const bounding = element.getBoundingClientRect();        
        if(bounding.top > -350 && bounding.top < 200){
            element.classList.add('your-active-class'); 
            myLinks.forEach((link) => {
                if(link.textContent === element.getAttribute('data-nav')){
                    link.style.cssText = 'background: #000; color: #fff';
                }else{
                    link.style.cssText = 'background: #333; color: #fff';
                }
            });
        }else{
            element.classList.remove('your-active-class');
        }

    });
});

