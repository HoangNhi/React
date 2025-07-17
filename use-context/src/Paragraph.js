import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
const {theme} = useContext(ThemeContext);
  return (

    <p className={theme}>
      This is a paragraph component that can be reused in different parts of the application.
    </p>
  );
}
export default Paragraph;