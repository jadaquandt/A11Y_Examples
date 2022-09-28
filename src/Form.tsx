import './App.css';
import './Form.css';

function Form() {
  return (
    <div className="Form-Component">
        <p>This is an example form component</p>
        <form name="Registration Form">
        <label htmlFor="first-name">First name:</label>
          <input type="text" id="first-name" name="first-name"/>
          <br />
        <label htmlFor="last-name">Last name:</label>
          <input type="text" id="last-name" name="last-name"/>
          <br />
        <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" id="phone-number" name="phone-number"/>
          <br />
        <label htmlFor="city-state">City and State:</label>
          <input type="text" id="city-state" name="city-state"/>
        </form>
    </div>
  );
}

export default Form;
