let button = document.getElementById('button')
button.addEventListener('click', verificaIdade)


function verificaIdade(){
    let age = document.getElementById('idadeTxt')
    let idade = Number(age.value)
    let paragrafo = document.querySelector('p')
    let year = new Date()
    let anoAtual = year.getFullYear()
    let idadeAtt = anoAtual - idade
    let genero = ''
    let radiosex = document.getElementsByName('radiosex')


    if(idade != false && idade <= anoAtual ){
  

        if(radiosex[0].checked){

            genero = 'homem'

            if(idadeAtt >= 20 && idadeAtt < 60){

                paragrafo.innerText = ` você é um ${genero}, e sua idade é ${idadeAtt} anos `

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')
                div.appendChild(img)
                img.setAttribute('src', 'homem-adulto.png')
                
              
            }else if (idadeAtt > 0 && idadeAtt <= 12){

               paragrafo.innerText = `você é um ${genero} e sua idade é ${idadeAtt} anos`

               let div = document.getElementById('dvimg')
               let img = document.createElement('img')
               div.appendChild(img)
               img.setAttribute('src','homem-bebe.png')


            } else if (idadeAtt >= 60){

                paragrafo.innerText = `você é um ${genero} e sua idade é ${idadeAtt} anos`

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')
                div.appendChild(img)
                img.setAttribute('src', 'homem-idoso.png')


            }else if (idadeAtt <= 20){
                
                paragrafo.innerText = `você é um ${genero} e sua idade é ${idadeAtt} anos`

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')
                div.appendChild(img)
                img.setAttribute('src', 'homem-jovem.png')
            }


        } else if (radiosex[1].checked){

            genero = 'Mulher'

            if(idadeAtt >= 21 && idadeAtt < 60 ){

                paragrafo.innerText = `você é uma ${genero} e sua idade é ${idadeAtt} anos`

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')
                div.appendChild(img)
                img.setAttribute('src', 'mulher-adulta.png')

            }else if (idadeAtt >= 13 && idadeAtt < 21){
                paragrafo.innerText = `você é uma ${genero} e sua idade é ${idadeAtt} anos`

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')

                div.appendChild(img)
                img.setAttribute('src', 'mulher-jovem.png')

            }else if (idadeAtt >= 0 && idadeAtt < 13){

                paragrafo.innerText = `você é uma ${genero} e sua idade é ${idadeAtt} anos`

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')

                div.appendChild(img)
                img.setAttribute('src','mulher-bebe.png')

            }else if (idadeAtt >= 60){

                paragrafo.innerText = `você é uma ${genero} e sua idade é ${idadeAtt}`

                let div = document.getElementById('dvimg')
                let img = document.createElement('img')

                div.appendChild(img)
                img.setAttribute('src','mulher-idosa.png')
            }
        }  
      
    }else{
        let spanError = document.getElementById('spanError')
        spanError.style.margin ='10px'
        spanError.style.color ='red'
        spanError.innerText = 'Invalido!'
    }
    
}