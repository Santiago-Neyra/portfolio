import { Formulario } from "../Formulario/Formulario.jsx"
import "../tecnologias/Tecnologias.css"

export const Tecnologias=()=>{
    
    const iconos=[
        {
            link:"https://i.postimg.cc/90MgwFdJ/html.png"
        },
        {
            link:"https://i.postimg.cc/QMQyRzNk/css-3.png"
        },
        {
            link:"https://i.postimg.cc/5ys0ppFf/sass.png"
        },
        
        {
            link:"https://i.postimg.cc/D0Gh4gdC/js.png"
        },
        {
            link:"https://i.postimg.cc/XJd3pLgs/science.png"
        },
        {
            link:"https://i.postimg.cc/9fBYC56b/kisspng-github-repository-commit-version-control-github-5ab8bdf71d6218-7448464515220566951204.png"
        },
        {
            link:"https://i.postimg.cc/vTPvkqdN/kisspng-bootstrap-logo-computer-software-web-application-p-b-5abb6c2ab15640-3860806115222323627264.png"
        }
    ]


    return(
        <div className="container-tecnoycv" id="tecnologias">
            <div className="row">
                <div className="col-xl-6">
                    <h2 className="titulo-tecnologia"> Tecnologias | Herramientas </h2>
                    <div className="container-tecno row">
                        {iconos.map(e=> {
                            return(
                                <div className="col-md-2 col-4 cont-icon">
                                    <img alt="icono-tecnologia" className="icon-tecno" src={e.link}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="container-cv col-xl-6">
                
                        <Formulario></Formulario>
                        
                        
                        
                        


                        

                </div>
            </div>

        </div>
    )
}