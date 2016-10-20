var removeimg = '<img src="remove-icon-png-25.png"></img>'
var completeimg = '<img src="done-icon.png"></img>'

document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);

});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo')

  parent.removeChild(item)
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);

}

function addItemTodo(text) {
  var list = document.getElementById('todo')

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div')
  buttons.classList.add('buttons')

  var remove = document.createElement('button')
  remove.classList.add('remove')
  remove.innerHTML = removeimg;

  remove.addEventListener('click', removeItem)



  var complete = document.createElement('button')
  complete.classList.add ('add')
  complete.innerHTML = completeimg;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);

}
