import CategoryItem from "./CategoryItem"


function Categorys({ catigories, setCatigories }) {


    console.log('Компонента Categorys')
    return (

        <div className="indent" >
            <h2>Категории</h2>

            <div className="row"  >


                {catigories.map((item) => {
                    return (

                        <CategoryItem
                            key={item.id}
                            name={item.name}
                            id={item.id}
                            setCatigories={setCatigories}
                            catigories={catigories}
                        />
                    )
                })}


            </div>
        </div>
    )
}

export default Categorys