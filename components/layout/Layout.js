import Nav from "./Nav";

function Layout(props) {
  return (
    <div>
      <header>
        <h1>Paintbox</h1>
        <Nav />
      </header>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
