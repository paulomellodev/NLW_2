// procurar botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botão

function cloneField(){
     //duplicar campos de horário
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean

     //pegar os campos
     const fields = newFieldContainer.querySelectorAll('input')

     //limpar cada campo
     fields.forEach(function(field) {
          field.value=""
     })

     // colocar na página
     document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
