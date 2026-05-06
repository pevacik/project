import Header from "./components/header/header"
import Heading from "./components/pages/testinpage/zadanie.3.1"
import Language from "./components/pages/language"
import MainPage from "./components/pages/main"
import Raiting from "./components/pages/raiting"
import { Route, Routes } from "react-router"
import Languagesdb from "./db"
import TestingPage from "./components/pages/testinpage/testingPage"
import { SinglLang } from "./components/pages/singlLanhuahe"
import Layout from "./components/layout/layout"
import StdLayout from "./components/stdLayot/StdLayout"
import NotificationList from "./components/pages/NotificationList"

// import SuperSale from "./components/superSale";

function App() {





  return (

    <>

      <Routes>
        <Route element={<StdLayout />}>
          <Route index element={<MainPage />} />
          <Route path="home" element={<MainPage />} />
          <Route path="language" element={<Language />} />
          <Route path="raiting" element={<Raiting />} />
          <Route path="pesochnica" element={<TestingPage />} />
        </Route>

        <Route path="language" element={<Layout />}>
          <Route path=":id" element={<SinglLang />} />
        </Route>

        <Route path="raiting" element={<Layout />}>
          <Route path=":id" element={<SinglLang />} />
        </Route>
      </Routes>
      <NotificationList />
    </>
  )
}

export default App
