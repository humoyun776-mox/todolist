let input = document.querySelector("#input")
let btns = document.querySelectorAll("#btn")
let ul = document.querySelector(".list")
let removeBtn = document.querySelector(".btn")
let removeInput = document.querySelector(".input")


let bozorlik = []

function addTodo() {
  if (!input.value) return

  ul.innerHTML = null

  bozorlik.forEach(bozor => {
    let li = document.createElement("li")
    let span = document.createElement("span")
    let button = document.createElement("button")

    span.textContent = bozor
    button.textContent = "X"

    li.append(span, button)
    ul.append(li)


    button.addEventListener("click", () => {
      li.remove()
    })

  })

  input.value = null
  input.focus()

}

btns.forEach(btn => {
  if (btn.textContent == "Boshidan") {
    btn.addEventListener("click", () => {
      bozorlik.unshift(input.value)
      addTodo()
      console.log(bozorlik);
    })
  } else {
    btn.addEventListener("click", () => {
      bozorlik.push(input.value)
      addTodo()
      console.log(bozorlik);
    })
  }
});


window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    bozorlik.push(input.value)
    addTodo()
    console.log(bozorlik);
  }
})

removeBtn.addEventListener("click", () => {
  bozorlik.splice(+removeInput, 1)
  addTodo()

})