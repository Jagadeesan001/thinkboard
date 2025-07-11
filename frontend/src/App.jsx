import { Route, Routes } from "react-router"
import HomePage from "./pages/homepage"
import CreatePage from "./pages/createpage"
import NoteDetailPage from "./pages/notedetailpage"


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/create" element={<CreatePage />}></Route>
      <Route path="/note/:id" element={<NoteDetailPage/>} ></Route>
    </Routes>
    </>
  )
}
export default App
