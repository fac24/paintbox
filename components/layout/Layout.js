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
        <Title>Paintbox</Title>
      </Header>
      <main>
        {props.children}
        <Nav />
      </main>
    </div>
  );
}

export default Layout;

const Title = styled.h1`
  text-align: center;
  color: var(--aubergine-purple);
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
