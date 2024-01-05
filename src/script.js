


    let d = document
    
    let listapadre = d.querySelector('.options-father'),
    buttonHam = d.querySelector('.hamburguer-darklight')
    infoOptions = d.querySelector('.options-darklight')
    
    
    console.log(buttonHam)
    console.log(infoOptions)
    
    document.addEventListener('mouseover', e =>{
        
        if(e.target.matches('.hamburguer-darklight') 
        || e.target.matches('.hamburguer-darklight img')
        || e.target.matches('.options-darklight')){
            console.log(e.target)
            infoOptions.classList.add('open')

        } else  {
            infoOptions.classList.remove('open')

        }
        
        
        
    })
    
    


