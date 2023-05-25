import Features from "./component/Features";
import Navibar from "./component/Navibar";
import {Routes, Route} from "react-router-dom";
import Pricing from "./component/Pricing";
import Home from "./component/Home";

function App() {
  const routers =[
   {path : "/home", element: <Home/>},
   {path : "/features", element: <Features/>},
   {path : "/pricing", element: <Pricing/>}
  ]
  return (
    <div>
    <Navibar/>
    <Routes>
      {
        routers.map((router)=>{
          return <Route key={router.path} path={router.path} element={router.element}/>
        })
      }
    </Routes>
    </div>
    
  );
}

export default App;
