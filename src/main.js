import "./css/common.css";

import { Box } from "@material-ui/core";
import CardAnimate from "./components/card_animation";
import CardInputDetailsSection from "./components/card_input_details";

export default function Main() {
  return (
    <Box>
      <CardAnimate />
      <CardInputDetailsSection />
    </Box>
  );
}
