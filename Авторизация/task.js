const forma = document.querySelector("form"),
welcome = document.querySelector(".welcome"),
user_id = document.querySelector("#user_id"),
loguot= document.querySelector("#logout")
url = 'https://students.netoservices.ru/nestjs-backend/auth'

window.onload = function(e) {
    if (localStorage.getItem('user_id')){
        welcome.classList.add("welcome_active")
        user_id.textContent = localStorage.getItem('user_id')
    }
}
// forma.onsubmit = async (e) => {
//         e.preventDefault();
    
//         let response = await fetch(url, {
//           method: 'POST',
//           body: new FormData(forma)
//         });
    
//         let result = await response.json();
    
//         console.log(result);
//     }
    
    forma.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(forma)

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.send(formData)
        e.target.reset();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 201) {
                    resp = JSON.parse(xhr.response)
                    console.log(resp['success']);
                if (resp['success']){
                    welcome.classList.add("welcome_active")
                    user_id.textContent = resp['user_id']
                    localStorage.setItem('user_id', resp['user_id'])
                } else {
                    alert('«Неверный логин/пароль»')
                }
            }
        }
    })

    loguot.addEventListener('click', ()=> {
        welcome.classList.remove("welcome_active")
        localStorage.clear()
    })