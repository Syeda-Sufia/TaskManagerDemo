import React, {createContext, useEffect, useState} from "react";
import { LogBox, SafeAreaView } from "react-native";
import initializeDB from "./Database/RxDataBase";
import  TodoList  from "./modules/TaskCode";
import styles from "./modules/styles";

export const AppContext = createContext({});

LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);

const App = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const DB = await initializeDB();
      setDb(DB);
    };
    initDB().then();
  }, [db]);

  return (
    <AppContext.Provider value={{ db }}>
      <SafeAreaView style={styles.container}>
        <TodoList />
      </SafeAreaView>
    </AppContext.Provider>
  );
};

export default App;