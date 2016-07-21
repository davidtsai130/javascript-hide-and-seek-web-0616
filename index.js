function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li')

  for (i=0; i<list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  const grandnode = document.querySelector('#grand-node')
  var grandchild = grandnode.children[0]

  while (grandchild) {
    deepest = grandchild
    grandchild = grandchild.children[0]
  }
  return deepest
}