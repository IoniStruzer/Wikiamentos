fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("body").innerHTML = `<h1>Algunos de nuestros especialistas de confianza:</h1><br><br><img src="https://german-heart-centre.com/wp-content/uploads/2023/03/8d5d30ac0af2b07932ba54bf05905edb.jpg" alt="medicine specialist"><ul></ul>`
        for(i of data.results){
            let nombre = i.name.first
            let apellido = i.name.last
            let nacionalidad = i.location.country
            let lugar = document.createElement("li")
            lugar.innerHTML = `${nombre} ${apellido}, ${nacionalidad}`
            dondeAgrego = document.querySelector("ul")
            dondeAgrego.appendChild(lugar)
        }
    })



// async function obtenerNombres(){
//     const datos = await fetch('https://randomuser.me/api/?results=3')
//     const data = await datos.json()
//     console.log(data)
//     document.querySelector("body").innerHTML = '<ul>Nombres:<br><br><ul>'
//     for(i of data.results){
//         let nombre = i.name.first
//         let apellido = i.name.last
//         let lugar = document.createElement("li")
//         lugar.innerHTML = `${nombre} ${apellido}`
//         dondeAgrego = document.querySelector("ul")
//         dondeAgrego.appendChild(lugar)
//     }
// }
// obtenerNombres()