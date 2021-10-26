import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label>
          Submit your e-mail
          <br />
          to receive information
          <br /> on upcoming events
          <br />
          <input type="text" name="name" />
        </label>

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
