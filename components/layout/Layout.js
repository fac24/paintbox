import Nav from "./Nav";
// import PaintboxSparkleLogoImage from "../styled-components/PaintboxSparkleLogoImage";
import Image from "next/image";
import logo from "../../Public/paintbox-logo.png";
import styled from "styled-components";

function Layout(props) {
  return (
    <div>
      <Header>
        <Image src={logo} alt="paintbox-logo" height={250} width={300} />
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
