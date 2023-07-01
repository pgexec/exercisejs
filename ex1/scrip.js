

function horaAtual(){
    let paragrafo = document.getElementById('ptext')
    let img = document.createElement('img')
    let div = document.querySelector('div')
    let h2 = document.querySelector('h2')
    let time = new Date()
    let horas = time.getHours()
    let years = new Date()
    let ano = years.getFullYear()
    let month = new Date()
    let mes = month.getMonth()
  

    if(horas > 6 && horas < 12){
        h2.innerHTML = 'Bom dia'
        paragrafo.innerText = `Bom dia, sua hora é ${horas} horas, ,mês ${mes}, ano ${ano} .`
        div.appendChild(img)
        img.setAttribute('src', 'manha250px.png')

    }else if(horas > 12 && horas<=18 ){
        paragrafo.innerText = `Boa tarde,sua hora é ${horas} horas,mês ${mes}, ano${ano} .`
        div.appendChild(img)
        img.setAttribute('src', 'tarde250px.png')


    }else if(horas > 1 && horas< 6){
        h2.innerHTML = 'Boa madrugada'
        paragrafo.innerText = `Sua hora é ${horas} horas, mês ${mes},  ano ${ano}.`

        div.appendChild(img)
        img.setAttribute('src', 'noite250px.png')
        document.body.style.background = `#0F124D`
        
    }
 
}