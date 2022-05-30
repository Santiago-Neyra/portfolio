import "../pestaña/Pestaña.css"
export const Pestaña=()=>{
    return(
        <div>
            <input type="checkbox" className="checkbox" id="check"/>
            <label className="boton-pestaña"  for="check" ><p> ||| </p></label> 
            <div className="pestaña">
                <ul className="lista-pestaña">
                    <li><a href="https://drive.google.com/uc?id=10hcrdRuysapwinQS9NvMuByE3GbESCRz&export=download"><img className="img-cv" src="https://i.postimg.cc/sX8wMntv/cv.png"></img></a></li>
                    <li><a className="logo-wp" ><img className="img-cv" src="https://i.postimg.cc/43dw4kmz/whatsapp-logo-png.png"></img></a></li>
                    
                </ul>
            </div>
        </div>

    )
}