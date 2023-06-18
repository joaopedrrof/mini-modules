/* 

1. get elements with a given class
2. add a loop to arriva at the element that was clicked
3. add/remove css class name that opens/collapses the accordion

*/
const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}