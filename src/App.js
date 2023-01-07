import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllBookItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import {BrowserRouter} from "react-router-dom";
const App = () => {
  const [{ bookItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllBookItems().then(data=>{

    
      // if (doc.exists) {
      //     console.log("Document data:", doc.data());
      // } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      // }}
      dispatch({
        type: actionType.SET_BOOK_ITEMS,
        bookItems: data,
      }); 

  });
};

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
      
    </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
