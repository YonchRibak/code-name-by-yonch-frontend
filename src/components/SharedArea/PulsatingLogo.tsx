import logoSrc from "../../../public/codeNameIcon.png";

function PulsatingLogo(): JSX.Element {
  return <img src={logoSrc} className="w-[15vw] animate-pulse" />;
}

export default PulsatingLogo;
