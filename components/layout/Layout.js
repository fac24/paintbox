import Nav from "./Nav";
import PaintboxSparkleLogoImage from "../styled-components/PaintboxSparkleLogoImage";
// import Image from "next/image";
// import paintbox from "public/Sparkle-paintbox.png";
import styled from "styled-components";

function Layout(props) {
  return (
    <div>
      <Header>
        <PaintboxSparkleLogoImage
          src="/paintbox-logo.png"
          alt="paintbox-logo"
        />
      </Header>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
