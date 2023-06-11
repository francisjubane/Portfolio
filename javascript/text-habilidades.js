
// HABILIDADES   
export const clicarEmCards = function (ev) {

    const h1Inicial = document.querySelector('#titliInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(h1Inicial)
    const paragrafInicial = document.querySelector('#paragrafInicial')
    document.querySelector('#conteiner-resposta-abilidade').removeChild(paragrafInicial)
    
    let elemento = ev.currentTarget

    switch (elemento.id) {
        case 'h1':
            html()
            break
        case 'h2':
            css()
            break
    }
}

const text = document.querySelector('#text-resposta')

function html() {
    criar('HTML5', 'O esqueleto do projeto é o que dá a base para o desenvolvimento da aplicação. Com boas práticas é possível criar um projeto consistente e padronizado, isso torna a aplicação mais fácil de ser entendida e mantida no futuro, além de garantir uma melhor experiência para o usuário final.')
}
function css() {
    criar('CSS', 'Esse ferramenta vai dar uma boa dor de cabeça kkkk. Brincadeira CSS é a melhor parte e é uma parte fundamental do desenvolvimento web. ainda mais com a suas extneções como o "SASS"')
}
function javascript() {
    criar('JavaScript', 'Atualmente, estou estudando JavaScript e é impressionante como não há fim para o aprendizado nessa linguagem. Estou sempre me dedicando a estudá-la.')
}
function bootstrap() {
    criar('Bootstrap', 'Esta ferramneta busca agilizar o processo de criação de interfaces web, tornando-o mais eficiente, produtivo e consistente.')
}


function criar(title, text) {
    const containerDeTexto = document.querySelector('#conteiner-resposta-abilidade')

    const h1 = document.createElement('h2')
    h1.innerText = title
    h1.id = 'titliInicial'
    h1.dataset.aos = 'flip-right'

    const p = document. createElement('p')
    p.innerText = text
    p.id = 'paragrafInicial'
    p.dataset.aos = 'flip-right'

    containerDeTexto.append(h1, p)
}