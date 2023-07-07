
let button = document.getElementById('button')
button.addEventListener('click',adicionar )

let arrayNumeros = []
let valoresAdd = 0;

function adicionar() {
    let num = document.getElementById('num')
    let numeros = Number(num.value)  
    let select = document.getElementById('select')
    let option = document.createElement('option')

  
    
    if(numeros < 1000 && numeros > 0 ){
        if (arrayNumeros.includes(numeros) == true){
            let msgError = document.getElementById('msgerror')
            msgError.innerText = 'Numero já adicionado!'
            msgError.style.color = 'red' 
            msgError.style.margin = '10px'
        }else{
            arrayNumeros.push(numeros)
            select.appendChild(option)
            option.text = `${numeros} foi adicionado`
            console.log(arrayNumeros)
            valoresAdd = 1;
            
        }
       
        
    }else{
        let msgerror = document.getElementById('msgerror')
        msgerror.innerText = 'Invalido'
        msgerror.style.color = 'red' 
        msgerror.style.margin = '10px'
    }
    

}

let buttonF = document.getElementById('buttonF')
    buttonF.addEventListener('click',finalizacao)

function finalizacao() {
    if(valoresAdd = 0){
        let divRes = document.getElementById('divRes')
        let paragrafo = document.createElement('p')
        let totalSoma = 0;
        let media = 0;

        divRes.appendChild(paragrafo)

        paragrafo.innerHTML += `você adicionou ${arrayNumeros.length} elementos em sua lista!`;

        arrayNumeros.sort()

        paragrafo.innerHTML +=`<br>${arrayNumeros[arrayNumeros.length-1]} é seu maior numero`;

        paragrafo.innerHTML +=`<br>${arrayNumeros[0]} é seu menor número`

        for(let i = 0; i < arrayNumeros.length; i++){
            totalSoma += arrayNumeros[i]
        }
        paragrafo.innerHTML +=`<br>O total da sua soma foi: ${totalSoma} `

        paragrafo.innerHTML +=`<br> A media dos seus numeros adicionados é: ${totalSoma/arrayNumeros.length}`


        console.log(arrayNumeros.length)
    }else{
        let divRes = document.getElementById('divRes')
        let paragrafo = document.createElement('p')
        divRes.appendChild(paragrafo)  
        paragrafo.innerHTML = '<strong>Defina os valores antes!</strong>'
        paragrafo.style.color = 'RED'

    }    
}

   
   
