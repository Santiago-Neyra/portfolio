
import "../Formulario/Formulario.css"
import React from "react"
import { BsUiRadios } from "react-icons/bs"
export const Formulario=()=>{

    return(
     <div className="formulario-container">
        <h2 className="titulo-tecnologia">Contáctame</h2>
        <form className="d-flex formulario" method="POST" action='../Formulario/Form.php'>
         
            <div class="input-group mb-3">
                <span class="input-group-text span-form" id="basic-addon1">Nombre y apellido</span>
                <input 
                type="text" 
                class="form-control" 
                placeholder="Escribe aquí" 
                aria-label="Username" 
                aria-describedby="basic-addon1"
                name="name"
                />
                </div>
            <div class="input-group mb-3">
                <span class="input-group-text span-form" id="basic-addon1">Email</span>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Escribe aquí" 
                    aria-label="Username" 
                    aria-describedby="basic-addon1"
                    name="email"
                    />
            </div>
            <div class="input-group">
                <span class="input-group-text span-form">Escribe tu consulta</span>
                <textarea 
                class="form-control" 
                aria-label="With textarea"
                placeholder="Escribe aquí"
                name="texto"
                />
            </div>
            <button>Enviar</button>


         </form>

     </div>

    )

}