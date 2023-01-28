import KkerSocialMedias from "../KkerSocialMedias/KkerSocialMedias";

function Main(props) {
    return (
        <main>
            <div className="container">
                <div className="main2">
                    <h1>
                        {props.title}
                    </h1>
                    <KkerSocialMedias />
                </div>
                <img src={props.src} alt="Students image" />
            </div>
        </main>
    )
}

export default Main;