function Main(props) {
    return (
        <main>
            <div className="container">
                <h1>{props.title}</h1>
                <img src={props.src} alt="Students image" />
            </div>
        </main>
    )
}

export default Main;