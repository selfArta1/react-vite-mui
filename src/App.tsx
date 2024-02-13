import Cust01 from "./components/Cust01";
import Navbar from "./components/navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import SectionLayout from "./components/menu/SectionLayout";
import { Section_item } from "./lib/types";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const { t } = useTranslation();
  const sections: Section_item[] = i18n.t("section", { returnObjects: true });
  const amenu: string[] = i18n.t("menu", { returnObjects: true });

  const [visibleSection, setVisibleSection] = useState<string>(amenu[0]);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute("id") ?? "");

          if (headerRef.current !== null) {
            if (entry.target.id !== "Gemini") {
              headerRef.current.classList.add("bg-white");
            } else {
              headerRef.current.classList.remove("bg-white");
            }
          }
          // To stop observing an element once it comes into view
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    // const targetSections = document.querySelectorAll("section");
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    // To disable the entire IntersectionObserver
    return () => {
      observer.disconnect();
    };
  }, []);

  const refCallback = useCallback((element) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);
  console.log("sectionsRef: ", sectionsRef);
  return (
    <>
      <CssBaseline />
      <Navbar inRef={headerRef} visibleSection={visibleSection} />
      <h1>Hello</h1>
      <Cust01></Cust01>
      {sections.map((section, index) => (
        <SectionLayout
          section_content={section}
          inViewRef={refCallback}
          key={index}
        />
      ))}
      <h1>{t("title")}</h1>

      <h1>{t("description.part2")}</h1>
    </>
  );
}

export default App;
