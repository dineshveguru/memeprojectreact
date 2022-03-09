function Header() {
  return (
    <div className="header--container">
      <div className="header-image--block">
        <img src={require("./images/troll.png")}></img>
        <h1>Meme Generator</h1>
      </div>
      <div className="header-project">
        <p>React Course - Project 3</p>
      </div>
    </div>
  );
}

export default Header;
