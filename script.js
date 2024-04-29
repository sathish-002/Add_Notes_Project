var popupoverlay = document.querySelector('.popup-overlay')
var popupbox = document.querySelector('.popup-box')

var apppop = document.getElementById('app-pop')
apppop.addEventListener('click',function(){
    popupoverlay.style.display='block'
    popupbox.style.display='block'
})


var cancelpopup = document.getElementById('cancel-popup')
cancelpopup.addEventListener('click',function(event){
    event.preventDefault()
    popupoverlay.style.display='none'
    popupbox.style.display='none'    
})


var container= document.querySelector('.container')
var addnote = document.getElementById('add-note')
var notetitleinput = document.getElementById('note-title-input')
var noteauthorinput = document.getElementById('note-author-input')
var bookdescriptioninput = document.getElementById('book-description-input')


addnote.addEventListener('click',function(event){
    event.preventDefault()
    var div = document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML = `<h2>${notetitleinput.value}</h2>
    <h3>${noteauthorinput.value}</h3>
    <p>${bookdescriptioninput.value}</P>
    <button onclick="deletenote(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display='none'
    popupbox.style.display='none' 
})


function deletenote(event)
{
    event.target.parentElement.remove()
}