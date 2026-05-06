function Category({ name, children }) {
    return (
        <div className="category col-3" >
            <h1>{name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus consectetur perspiciatis omnis, nam fugit quis non cumque harum blanditiis cum quisquam sunt alias tempora dolorum ducimus aspernatur itaque repellendus.</p>
            <div>
                {children}
            </div>
        </div>

    )
}

export default Category 