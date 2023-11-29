const Box = (props) => {
  //  Write your code here
  const { text, className } = props;
  return (
    <li className={"${className}"}>
      <p>{text}</p>
    </li>
  );
};

const element = (
  <div>
    <h1>Boxes</h1>
    <ul>
      <Box className="orange" text="small" />
      <Box className="blue" text="medium" />
      <Box className="pink" text="large" />
    </ul>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));
