import Button from "@mui/material/Button";
import { useState } from "react";
import i18n from "../i18n";

export default function ButtonUsage() {
  const [lang, setLang] = useState("enUS");
  function changeLang() {
    lang === "zhCN" ? setLang("enUS") : setLang("zhCN");
    i18n.changeLanguage(lang);
  }

  return (
    <Button variant="contained" onClick={changeLang}>
      {" "}
      {lang}{" "}
    </Button>
  );
}
