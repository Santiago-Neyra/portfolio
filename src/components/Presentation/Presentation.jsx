import "../Presentation/Presentation.css"
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
export const Presentation=()=>{
return(
    <div className="presentation">
        <div className="row row-presentation">
            <div className="col-lg-6 div-izq">
                <h2 className="titulo-presentation">
                    Frontend Developer<br></br>
                    JavaScript | ReactJS | GitHub<br></br>
                </h2>
                <p className="text-presentation"> Rosario - Santa Fe   </p>
                <div className="container-icons ">
                    <a target="blank_" href="https://www.linkedin.com/in/santiago-neyra-8305b8216/">
                        <AiFillLinkedin size={40} className="icon"/>
                    </a>
                    <a target="blank_" href="https://github.com/Santiago-Neyra">
                        <BsGithub size={40} className="icon" />
                    </a>
                </div>
            </div>
            <div className="container-img-present col-lg-6">
                <img className="img-present" src="https://i.postimg.cc/8zXScmKW/gris.jpg"></img>
            </div>
        </div>

    </div>

)

}