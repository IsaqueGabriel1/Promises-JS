function teste(){
    const myPromise = new Promise((resolve, reject) => {
        const nome = ["Isaque", "Gabriel", "Reis"]
        const senha = 1234
        
        let txtUser = document.getElementById("txtUser")
        let txtSenha = document.getElementById("txtSenha")
        
        for(i=0; i<nome.length; i++){
            if(nome[i] == txtUser.value && txtSenha.value == senha){
                resolve("Usuario ou senha incorretos")
            }
        }

        if(txtSenha.value == "" || txtUser.value == ""){
            reject("Preencha todos os campos")
        }else{
            reject("Usuario não encontrado")
        }
        
    })
    
    myPromise.then((data) => {
        let p = document.getElementById("resp")
        p.innerText = data
        p.style.color = "green"
    })
    
    myPromise.catch((data) => {
        let p = document.getElementById("resp")
        p.innerText = data
        p.style.color = "red"
    })
    
}

