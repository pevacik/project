import Article from "./components/article"
import DataBase from "./db"

function App() {


  return (
    <div className="container row" >
      {DataBase.map((item) => {
        return (
          <Article
            heading={item.heading}
            description={item.description}
            imgsrc={item.imgsrc}
          />
        )
      })
      }


    </div> 
  )
}

export default App
