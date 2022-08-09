import './burguerbuttom.css'

function BurguerButton(props) {
  return (
      <div onClick={props.handleClick} className={`icon nav-icon-1 ${props.clicked ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
  );
}

export default BurguerButton;
