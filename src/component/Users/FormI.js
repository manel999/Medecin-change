import Card from "../UI/Card";
import classes from "./FormInput.module.css";
import FormInput from "./FormInput";
import { useState } from "react";
import Button from "../UI/Button";

function FormI() {
  const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    username: "",
    email: "",
    wilaya: "",
    hospital: "",
  });
  const inputs = [
    {
      id: 1,
      name: "lastname",
      //value: { enteredLastName },
      label: "Nom:",
      placeholder: "Last name",
      errorMessage: "le nom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      //onChange: { lastNameChangeHandler },
      pattern: "^[A-Za-z]{3,16}$",

      // onBlur: { focusHandler },
    },
    {
      id: 2,
      name: "firstname",
      //value: { enteredFirstName },
      placeholder: "First name",
      label: "Prénom :",
      errorMessage: "le nom doit etre entre 3 et 16 caractéres",
      required: true,
      type: "text",
      //onChange: { FirstNameChangeHandler },
      pattern: "^[A-Za-z]{3,16}$",

      // onBlur: { focusHandler },
    },
    {
      id: 3,
      name: "username",
      label: "Pseudo :",
      placeholder: "Username",
      errorMessage: "* Username ne doit etre entre 3 et 16 caractéres",

      //value: { ent"",eredUserName },
      required: true,
      type: "text",
      //  onChange: { UsernameChangeHandler },
      pattern: "^[A-Za-z0-9]{3,16}$",

      //onBlur: { focusHandler },
    },
    {
      id: 4,
      name: "email",
      placeholder: "Email",
      label: "E-mail :",
      errorMessage: "enter a valid email address",
      required: true,
      type: "email",
    },
    {
      id: 5,
      name: "wilaya",
      placeholder: "Wilaya",
      label: "wilaya :",
      required: true,
      type: "text",
    
    },
    {
      id: 6,
      name: "hospital",
      placeholder: "Hospital",
      label: "Hopitale :",
      required: true,
      type: "text",
      pattern: "^[A-Za-z]{3,16}$",
      errorMessage: "fix it asshole",
    },
    {
      id: 7,
      name: "Number",
      placeholder: "Numéro",
      label: "Numéro de téléphone :",
      type: "number",
      pattern: "^\d{10}$",
      required:'true',
    },
  ];

  function onChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  function addUserHandler(event) {
    event.preventDefault();
  }

  console.log(values);
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <h2>Informations personnelles :</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button type="submit">Enregistrer</Button>
      </form>
    </Card>
  );
}

export default FormI;
