function JsxRules() {
  const name = "tejaswni";
  return (
    <div
      id="JsxRules"
      style={{
        color: "green",
        backgroundColor: "yellow",
        textAlign: "center",
        padding: "10px",
      }}
      className="hello jsxrules"
      
    >
      <h5>here it is the jsx rules</h5>
      <p>hello</p>

      <div
        className="rules_list"
        style={{ border: "2px solid red", padding: "10px" }}
      >
        '<p>always jsx must be having as single elemnt no multiple elemnts</p>
        <p>while using js expression,use curly braces {name}</p>
        <p>
          while doing inline styling ,need to use 2 set of curly braces for
          style attributes and css properties must be used as cancase words
        </p>
        <p>func,scope,asyn,syc,await we have to know in js to learn react</p>
        <p>class as className</p>
        <p></p>
      </div>
    </div>
  );
}
export default JsxRules;
