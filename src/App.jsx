import "./App.css";
import HomePage from "./pages/HomePage";
import LoggedInPage from "./pages/LoggedInPage";
import { createBrowserRouter, RouterProvider,Route,Routes } from "react-router-dom";
import Chatpage from "./pages/Chatpage";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage></HomePage>,
//   },
//   {
//     path: "/user",
//     element: <LoggedInPage></LoggedInPage>,
//   },
//   {
//     path: "/chats",
//     element: <Chatpage></Chatpage>,
//   },
// ]);

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}  />
      <Route path="/chats" element={<Chatpage/>} />
      <Route path="/user" element={<LoggedInPage/>} />
      </Routes>
    </div>
  );
}

export default App;
