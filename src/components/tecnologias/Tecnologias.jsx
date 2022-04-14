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
    ]


    return(
        <div className="container-tecnoycv">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="titulo-tecnologia">Tecnologias</h2>
                    <div className="container-tecno row">
                        {iconos.map(e=> {
                            return(
                                <div className="col-3 cont-icon">
                                    <img alt="icono-tecnologia" className="icon-tecno" src={e.link}></img>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container-cv col-lg-6">
                        <h2 className="titulo-curriculum">Descarga aqui mi curriculum</h2>

                </div>
            </div>

        </div>
    )
}