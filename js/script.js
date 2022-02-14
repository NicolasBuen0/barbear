const btn = document.querySelector("#right")
const img = document.querySelectorAll("#slide-itens li")
    /* const btnDirecao = btn.forEach(item => console.log(item))
    console.log(btnDirecao) */

let contador = 1

function slide() {
    contador++
    console.log(contador)
    if (contador > 3) {
        contador = 1
    }

}

btn.addEventListener("click", slide)