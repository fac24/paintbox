import Nav from "./Nav";
import PaintboxSparkleLogoImage from "../styled-components/PaintboxSparkleLogoImage";
// import Image from "next/image";
// import paintbox from "public/Sparkle-paintbox.png";

function Layout(props) {
  return (
    <div>
      <PaintboxSparkleLogoImage
        src="/Sparkle-paintbox.png"
        alt="paintbox-logo"
      />
      <header>
        <h1>Paintbox</h1>
        <Nav />
      </header>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
