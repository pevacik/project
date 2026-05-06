function Article({ heading, description, imgsrc }) {


    return (
        <div>
            <h3>{heading}</h3>
            <p>{description}</p>
            <img src={"/" + imgsrc} alt="картинка" />
            <button>закладка</button>
            <button>лайк</button>
        </div>
    )
}

export default Article