const arr = [
    { name: "Yakov" },
    { name: "Udi" },
    { name: "Orel" }
]

console.log(arr[1])

const demo = document.getElementById("demo")

function render(arr) {
    let html = ''

    html = arr[0].name
    // arr.forEach(ellllll => {
    //     html += `<div>name is ${ellllll.name}</div>` //html = html + `<div>name is ${ellllll.name}</div>`
    // });

    demo.innerHTML = html
}

render(arr)