import './App.css';

function Form() {
  return (
    <div className="Form">
        <p>This is an example form component</p>
        <form name="Registration Form">
        <label htmlFor="first-name">First name:</label>
          <input type="text" id="first-name" name="first-name"/>
        <label htmlFor="last-name">Last name:</label>
          <input type="text" id="last-name" name="last-name"/>
        </form>
    </div>
  );
}

export default Form;
