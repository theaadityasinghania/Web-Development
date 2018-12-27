######## Type all of this on your console. ########

document

DOM (Document object model):  How you access your HTML and CSS through Javascript.

document.getElementsByTagName('p'): Access all the elemets wit 'p' tag.

document.getElementsByTagName('p')[0]

document.getElementsByTagName('h1')[0]

var pTags = document.getElementsByTagName('p')

	pTags
	pTags[0]
	pTags[0].innerHTML = "New content <strong>for paragraph</strong>"

document.getElementById('checklist')

document.getElementsByClassName('done')


############ querySelector will give you the first occurence of the given elemet ############

document.querySelector('.done')

document.querySelector('#checklist')

document.querySelector('p')

document.querySelectorAll('p'): for getting all the occurence of the given elemet.

var li = document.querySelector('.done')

	li.className = ""    //this canges class name of the first element with done class.

	li.className += ' special' : Append the special class name.

	li.className = li.className.replace('special', '') : special is replaced with the second class (none in this case.)

	li.classList : displays the lsit of all classes in that element

	li.classList.add("new") : Appned a new class in the list

	li.classList.remove("new") : Removes an existing class from the list

	li.parentElement

	li.parentElement.parentElement

	li.parentElement.children

	li.parentElement.childElementCount

	li.parentElement.children[0]

	li.parentElement.children[0].innerHTML

	li.parentElement.children[0].innerText

	li.parentElement.children[0].innerHTML = "Bingo"

	li.parentElement.children[0].innerText = "Bongo"