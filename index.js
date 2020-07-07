function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  for (var i = 0; !deepestNode.children[i]; i) {
    deepestNode = deepestNode.children[0]
  }
  return deepestNode;
}

function getFirstSelector(selector){
  let element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  let element = document.querySelector('#nested .target')
  return element
}

function increaseRankBy(value){
  const elements = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = elements.length; i < l; i++) {
    let children = elements[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + value
    }
  }
}


function deepestChild(){
  let node = document.querySelector('#grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
  }