import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Photo from "./features/Photo";
import AddEditPhoto from "./features/Photo/pages/AddEdit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/photos" element={<Photo />} />
        <Route path="/photos/add" element={<AddEditPhoto />} />
        <Route path="/photos/:photoId" element={<AddEditPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
