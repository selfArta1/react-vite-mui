import Cust01 from "./components/Cust01";
import Navbar from "./components/navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();
  const section: section_item[] = i18n.t("section", { returnObjects: true });
  console.log("section 0: ", section[0]);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <h1>Hello</h1>
      <Cust01></Cust01>

      <h1>{t("title")}</h1>

      <h1>{t("description.part2")}</h1>
      <section>{section[1].id}</section>
    </>
  );
}

export default App;
