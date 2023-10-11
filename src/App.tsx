import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Table from "./components/table/Table";
import DeclarationHealth from "./components/declaration-health/DeclarationHealth";
import { useEffect, useState } from "react";
import { FormValues } from "./type/FormValues";

function App() {
  const [forms, setForms] = useState<FormValues[]>(() => {
    return JSON.parse(localStorage.getItem("forms") || "[]");
  });
  useEffect(() => {
    localStorage.setItem("forms", JSON.stringify(forms));
  }, [forms]);
  console.log("forms ==== ", forms);
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/table" />} />
        <Route
          path="/table"
          element={<Table forms={forms} setForms={setForms} />}
        />
        <Route
          path="/declaration"
          element={<DeclarationHealth setForms={setForms} />}
        />
        <Route
          path="/edit/:id"
          element={<DeclarationHealth setForms={setForms} />}
        />
      </Routes>
    </>
  );
}

export default App;
