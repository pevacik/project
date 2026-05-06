import { useState } from "react";
import Header from "./components/Header";
import AddCategory from "./components/AddCategory";
import Categorys from "./components/Categorys";
import Db from "./DB";




function App() {

  console.log('Компонента App')
  const [catigories, setCatigories] = useState(Db)

  return (
    <div className="container" >

      <Header />

      <AddCategory
        catigories={catigories}
        setCatigories={setCatigories} />

      <Categorys
        catigories={catigories}
        setCatigories={setCatigories} />

    </div>
  )
}

export default App
