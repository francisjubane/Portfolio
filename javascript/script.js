
// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [Sobre Mim]
let a_sobreMim = document.querySelector('a#btn-mais-sobreMim')
a_sobreMim.addEventListener('click', ()=> {
    let input_sobreMim = document.querySelector('#mais-sobreMim')

    if (input_sobreMim.checked == false) {
        a_sobreMim.innerText = "SEE LESS"
    }
    else if (input_sobreMim.checked == true) {
        a_sobreMim.innerText = "SEE MORE"
    }
})




// PARA MUDAR O TEXTO DO BUTÃO MOSTRAR MAIS DA PARTE [PROJETOS]
let a_projetos = document.querySelector('a#btn-mais-projetos')
a_projetos.addEventListener('click', ()=> {
    let input_projetos = document.querySelector('input#mais-projetos')

    if (input_projetos.checked == false) {
        a_projetos.innerHTML = "SEE LESS"
    }
    else if (input_projetos.checked == true) {
        a_projetos.innerHTML = "SEE MORE"
    }
})





// TEXT OF HABILITY

import { clicarEmCards } from "./text-habilidades.js"
document.querySelectorAll('.cards').forEach((ev)=>{ 
    ev.addEventListener('click', clicarEmCards) 
})


// BARRA DE PROGRESSO
import { indicaProgresso } from "./barra-de-progresso.js" 

window.onscroll = function() {
    indicaProgresso() 
}




// MUDAR DESCRIÇÃO DO PROJETO DE ACORDO COM INPUT CHECHECK

function criar_Descrition(title, text) {
    const container_De_Descrition = document.querySelector('#descrition-of-project')
    container_De_Descrition.innerText = ''

    const h2 = document.createElement('h2')
    h2.id = 'title-descrition-of-project'
    h2.dataset.aos = 'flip-right'

    const span = document.createElement("span")
    span.classList.add("span-azulMarinho")
    span.innerText = title

    const p = document.createElement('p')
    p.innerText = text
    p.id = 'paragrafh-descrition-of-project'
    p.dataset.aos = 'flip-right'


    h2.appendChild(span)
    container_De_Descrition.appendChild(h2)
    container_De_Descrition.appendChild(p)
}

const input_slider_1 = document.querySelector('#input-slider-1').addEventListener('change', ()=> {
    criar_Descrition("Curriculum Vitae", "A curriculum vitae (CV) is a document that summarizes your professional and academic achievements, skills and experiences. It is typically used to apply for jobs, grants, scholarships or academic positions.")
})

const input_slider_2 = document.querySelector('#input-slider-2').addEventListener('change', ()=> {
    criar_Descrition("Photo Blog", "A photo blog is a type of blog that showcases photos taken by the blogger or other contributors. Photo blogs can be used for personal or professional purposes, such as sharing memories, documenting travels, promoting products, or expressing creativity.")
})

const input_slider_3 = document.querySelector('#input-slider-3').addEventListener('change', ()=> {
    criar_Descrition("SeatWork #3", "MIDTERM")
})