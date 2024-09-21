import "./formInfo.js";

class Presentacion extends HTMLElement{
    constructor(){
        super();//herencia
        this.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Zen+Loop:ital@0;1&display=swap');

                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Zen+Loop:ital@0;1&display=swap');

                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    background-color:#101010;
                }
                body {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .contenedor{
                    display: flex;
                    justify-content: space-around;
                }

                h1{
                    font-family: "Zen Loop", cursive;
                    padding: 0 0 5px 0;
                    color: #D4AF37;
                    font-weight: bold;
                    text-align:center;
                }
                
                .hobbies,.perfil-profesional{
                    width:50%;
                    padding:20px;
                }
                .hobbies{
                    text-align:center;
                }
                h3{
                    color: #C8B400;
                    padding:20px;
                    font-size:1.5rem;
                }

                ul{
                    list-style: none;
                }

                li{
                    font-size:1.1rem;
                    padding:2px;
                    color: #B0B0B0;
                }

                p{
                    font-size:1.1rem;
                    color: #B0B0B0;
                }

                
                .list__item{
                    text-decoration: none;
                }
            </style>
            <h1>Wilmer Gelves García</h1>
            <div class="contenedor">
                <div class="hobbies">
                    <h3 class="subtitle">Mis Hobbies</h3>
                    <ul class="list">
                        <li class="list__item">Tocar guitarra</li>
                        <li class="list__item">Hacer senderismo</li>
                        <li class="list__item">Ver series de televisión</li>
                        <li class="list__item">Hacer karaoke</li>
                        <li class="list__item">Salir de compras</li>
                    </ul>
                </div>
                <div class="perfil-profesional">
                    <h3 class="subtitle">Perfil profesional</h3>
                    <p class="description">Soy técnico en ventas de productos y servicios con más de siete años de experiencia en el área de servicio al usuario. Poseo excelentes habilidades comunicativas, soy una persona creativa y responsable y se me facilita el trabajo en equipo.<br><br>
                    
                    Actualmente curso el cuarto semestre de ingeniería de Software, me gusta retarme y estar en constante aprendizaje.
                    </p>
                </div>
            </div> 
        `; 
        this.style = `
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        margin: 0 auto;
        width: 70%;
        border: 2px solid #D4AF37;
        border-radius:10px;
        padding: 20px;
        box-shadow: 0 0 10px #D4AF37;
        `;
    }

    connectedCallback(){
        console.log("Se ha creado el elemento");
    }

    disconnectedCallback(){ 
        console.log("Se elimina el elemento de la página");
    }
}

customElements.define("contenido-element", Presentacion);



