import { Head } from "next/document";
const NeonBanner = (props) => {
  return (
    <>
      <div className="neonBorder">
        <h1 className="neonText">{props.text}</h1>
      </div>
    </>
  );
};
export default NeonBanner;
