import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, MainContainer} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllBookItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
const App = () => {
  const [{ BookItem }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllBookItems().then((data)=>
    {
    //         console.log(data);
    // });
    
      // if (doc.exists) {
      //     console.log("Document data:", doc.data());
      // } else {
      //     // doc.data() will be undefined in this case
      //     console.log("No such document!");
      // }});
      dispatch({
        type: actionType.SET_BOOK_ITEMS,
        BookItem: data,
      }); 

    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
  );
};

export default App;
