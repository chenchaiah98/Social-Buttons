const Button = (props) => {
  //  Write your code here.
  return (
    <div>
      <button className={props.class}>{props.name}</button>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button name="like" class="like" />
      <Button name="comment" class="comment" />
      <Button name="share" class="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
