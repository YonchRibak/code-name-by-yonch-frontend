import { Route, Routes } from "react-router-dom";
import CaptainScreen from "../CaptainsArea/CaptainScreen";
import DeckContainer from "../GameArea/Decks/DeckContainer";
import RulesContainer from "../RulesArea/RulesContainer";
import StartScreen from "./StartScreen";
import About from "../AboutArea/About";
import CaptainLogin from "../CaptainsArea/CaptainLogin";

function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/rules" element={<RulesContainer />} />
      <Route path="/about" element={<About />} />
      <Route path="/:deck" element={<DeckContainer />} />
      <Route path="/captain" element={<CaptainLogin />} />
      <Route path="/captain/:gameId" element={<CaptainScreen />} />
    </Routes>
  );
}

export default Routing;
