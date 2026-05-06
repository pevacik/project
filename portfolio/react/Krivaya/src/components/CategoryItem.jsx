import DltCategory from "./DltCatirorys"

function CategoryItem({ name, id, catigories, setCatigories }) {

    return (
        <div className="category">
            
            <h3 >{name}</h3>

            <DltCategory
                id={id}
                catigories={catigories}
                setCatigories={setCatigories}

            />


        </div>
    )
}

export default CategoryItem