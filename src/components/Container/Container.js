const Container = (props) => {
  return (
    <div className="container2">
            <div class="title">
                <h1>{props.title}</h1>
            </div>
            <div className="content">
                <div className="article">
                    <h2>{props.title}</h2>
                    <p>{props.p}</p>
                    <p>
                        <ul>
                            <li>Vistos</li>
                            <li>Alojamento</li>
                            <li>Seguro de saúde</li>
                        </ul>
                    </p>
                    <a href="#" className="button">Saber Mais</a>
                </div>
                <div className="image-section">
                    <img src="./images/uni.jpg" alt="" width="500" />
                </div>
            </div>
        </div>
  )
}

export default Container