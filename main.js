// const btn = document.getElementsByClassName('btn')
// console.log(btn)

// const par1 = document.getElementsByClassName('par1')
// const sth = Array.from(par1)
//     // par1[0].style.color = 'red'
// console.log(sth)
// console.log(typeof par1)
// for (let i = 0; i < par1.length; i++) {
//     console.log(par1[i].classList)
//     par1[i].style.color = 'red'
//     par1[i].classList.add('jarolubiryz')
//     par1[i].classList.remove('xD3')
// }

// // const par11 = new Array(item => par1[0].style.color = 'red')
// // console.log(par11)

// const par2 = document.getElementsByClassName('par2')
// console.log(par2)

// const sth1 = Array.from(par2)
// console.log(sth1)
// console.log(typeof par2)
// for (let i = 0; i < par2.length; i++) {
//     console.log(par2[i])
//     par2[i].style.color = 'blue'
// }

// const parID = document.getElementById('parid1')
// console.log(parID)
// parID.style.backgroundColor = 'hotpink'

// parID.innerText = '<button>Jaro jednak nie w beczce</button>'
//     // parID.innerHTML = '<button>Jaro jednak nie w beczce</button>'

// const input = document.getElementsByClassName('button')
// console.log(input)

// const type = document.querySelector('input[type="button"]')
// console.log(type)

// const allType = document.querySelectorAll('input[type="button"]')
// console.log(allType)

// const xd = Array.from(allType)
// allType.forEach(item => {
//     item.value = 'Jaro'
// })
// console.log(xd)

// const tagA = document.getElementById('tagA')

// tagA.setAttribute('href', 'https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp')

const paragraf = document.createElement('p')
paragraf.setAttribute('class', 'jarolubiryz')
paragraf.innerText = "jaro je ryż"
const app = document.getElementById('app')
app.appendChild(paragraf)

// const span = document.createElement('span')
// span.setAttribute('class', 'jarolubiryz')
// span.innerHTML = "beczka"
// app.appendChild(span)

const div = document.createElement('div')
div.setAttribute('class', 'jarolubiryz')
const span = document.createElement('span')
span.innerText = "Radosław Jaro"

div.appendChild(span)
app.appendChild(div)