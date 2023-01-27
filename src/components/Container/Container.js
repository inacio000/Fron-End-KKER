const Container = (props) => {
  return (
    <div class="container2">
            <div class="title">
                <h1>{props.title}</h1>
            </div>
            <div class="content">
                <div class="article">
                    <h2>{props.title}</h2>
                    <p>{props.p}</p>
                    <P>
                        <ul>
                            <li>Vistos</li>
                            <li>Alojamento</li>
                            <li>Seguro de saúde</li>
                        </ul>
                    </P>
                    <a href="#" class="button">Saber Mais</a>
                </div>
                <div class="image-section">
                    <img src="./images/uni.jpg" alt="" width="500" />
                </div>
            </div>
        </div>
  )
}

export default Container