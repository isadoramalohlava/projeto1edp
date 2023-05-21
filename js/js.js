const form = document.getElementById('form-cartilhas')
const ulcartilhas = document.getElementById('cartilhas')
const in-title = document.getElementById ('in-title')
const in-skill = document.getElementById ('in-skill')
const in-categoria = document.getElementById ('in-categoria')
const in-descrição = document.getElementById ('in-descrição')

const inSearch = document.getElementById('in-search')
const btnSearch = document.getElementById('btn-search')
const btnClearSearch = document.getElementById('btn-clear-search')

const cartilhasList = [
    {
        title: 'A arte de comunicar',
        categoria: 'SoftSkill'
        descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae sapien pellentesque habitant morbi. Ut faucibus pulvinar elementum integer. Vel risus commodo viverra maecenas accumsan lacus vel. Arcu risus quis varius quam. Morbi tristique senectus et netus et. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Non tellus orci ac auctor augue mauris augue neque gravida. Accumsan tortor posuere ac ut consequat. Ut morbi tincidunt augue interdum velit. Viverra aliquet eget sit amet tellus cras. Dis parturient montes nascetur ridiculus.
    },
    
]
function creatItemElement(item) {
    const Elem = document.createElement('li')

    const title = document.createElement('h3')
    title.innerText = item.title
    Elem.appendChild(title)

    const skill = document.createElement('p')
    skill.innerText = item.skill
    Elem.appendChild(title)

    const categoria = document.createElement('p')
    categoria.innerHTML = `<strong> Categoria: </strong> SoftSkill`>${item.categoria}
    Elem.appendChild(categoria)

    const descrição = document.createElement('p')
    descrição.innerHTML = > ${item.descrição}
    Elem.appendChild(descrição)

    return Elem
}

function updateScreen()[
    ulcartilhas.innerHTML=''
    cartilhasList
    .filter((item))
    .forEach ((item) => {
        const elem = creatItemElement(item)
        ulcartilhas.appendChild(elem)
    })
]
const item1 = creatItemElement(listadedicas[0])
const item2 = creatItemElement(listadedicas[1])

updateScreen()

form.addEventListener('submit', (event) => (
    event.preventDefault()

    const newItem = {
        title: inTitle.value,
        skill: inSkill.value,
        categoria: inCategoria.value,
        descrição: inDescrição.value,

    }

    cartilhasList.push(newItem)
    
updateScreen()

    console.log(ENVIAR!)
    btnSearch.addEventListener('click', () => {
        const searchTherm = inSearch.value
        console.log({ searchTherm })
        updateScreen ()
    })
))