import Nav from "./Nav";
import PaintboxSparkleLogoImage from "../styled-components/PaintboxSparkleLogoImage";
import Image from "next/image";
// import paintbox from "public/Sparkle-paintbox.png";
import styled from "styled-components";

function Layout(props) {
  return (
    <div>
      <Header>
        <Image
          src="/paintbox-logo.png"
          alt="paintbox-logo"
          height={250}
          width={300}
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
