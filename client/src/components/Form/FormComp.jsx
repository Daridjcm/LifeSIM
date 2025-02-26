import React from "react";
import { Form, Input, Button } from "@heroui/react";
import PropTypes from "prop-types";
import { SelectItem, Select } from "@heroui/react";
import { Have, NotHave, HaveCustomers } from "./HaveOrNot.jsx";
import { useNavigate } from "react-router";

const ConditionalWrapper = ({ condition, children }) => {
  return condition ? children : null;
};


export default function FormComp({
  title,
  description,
  fields,
  statusForm,
  btnText,
  isRequired,
}) {
  FormComp.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        type: PropTypes.string.isRequired,
        options: PropTypes.array,
      })
    ).isRequired,
    statusForm: PropTypes.string.isRequired,
    btnText: PropTypes.string,
    isRequired: PropTypes.bool,
  };
  
  const getUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      const result = await response.json(); 
      if (response.ok) {
        console.log("User data:", result.user); 
      } else {
        console.error("Error fetching user data:", result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserData(token); 
    }
  }, []);  
  
  const [action, setAction] = React.useState(`/${statusForm}`);
  const [gender, setGender] = React.useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Data to be sent:", data);
    
    const url = statusForm === "login" ? "http://localhost:3000/api/login" : "http://localhost:3000/api/signup";

    const handleNavigate = (url) => {
      if (url.includes("/api/login")) {
        navigate("/game");
      } else if (url.includes("/api/signup")) {
        navigate("/login");
      } else {
        return null;
      }
    }
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json(); 
      if (response.ok) {
        alert(`${statusForm === "login" ? "Login" : "Registration"} successful`);
        const token = result.token;
        console.log(token);        
        localStorage.setItem("token", token);
        setTimeout(() => {
          handleNavigate(url)
        }, 500)
      } else {
        alert(`Error: ${result.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
    

  return (
    <Form
      action={action}
      className={
        title === "Welcome again to" || title === "Create your"
          ? "w-full m-auto max-w-xs flex flex-col gap-4"
          : "flex gap-2"
      }
      validationBehavior="native"
      onReset={() => setAction("reset")}
      onSubmit={handleSubmit}
    >
      <ConditionalWrapper
        condition={title === "Welcome again to" || title === "Create your"}
      >
        <div className="bg-green-200 w-full max-w-xs p-2 text-center rounded-md">
          <h1 className="text-xl">
            {title}{" "}
            <span className="text-green-600 font-bold text-2xl">LifeSIM</span>
          </h1>
        </div>
      </ConditionalWrapper>

      <ConditionalWrapper
        condition={!(title === "Welcome again to" || title === "Create your")}
      >
        <div className="flex flex-col gap-2 mb-4">
          <p className="text-xl font-bold">{title}</p>
          <p>{description}</p>
        </div>
      </ConditionalWrapper>

      {fields.map((field, index) => (
        field.type === "select" ? (
          <Select
            key={index}
            isRequired
            errorMessage={`Please select a valid ${field.name}`}
            name={field.name}
            label={field.label}
            labelPlacement="outside"
            items={field.options}
            placeholder={field.placeholder}
            selectedKey={gender}
            onSelectionChange={(value) => {
              console.log("Selected Value:", value); // Verifica el valor seleccionado
              setGender(value); // Guarda solo el string
            }}
            aria-label={`Select ${field.name}`}
          >
            {Array.isArray(field.options) && field.options.length > 0
              ? field.options.map((option) => (
                <SelectItem key={option.value} value={option.value} textValue={option.label}>
                  {option.label}
                  <p className="text-gray-500 text-opacity-80">{option.description}</p>
                </SelectItem>
              ))
              : null}
          </Select>
        ) : (
          <Input
            key={index}
            isRequired={isRequired}
            errorMessage={field.type === "password"
              ? "Password must be at least 8 characters."
              : `Please enter a valid ${field.name}`}
            label={field.label}
            labelPlacement="outside"
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            type={field.type}
            pattern={field.type === "password" ? "^.{8,}$" : null}
            maxLength={field.type === "password" ? 20 : null}
          />
        )
      ))}

      <ConditionalWrapper condition={statusForm !== ''}>
        <div className="flex gap-2 mt-2 mb-4">
          <Button
            color={
              statusForm === "login" || statusForm === "signup"
                ? "success"
                : "primary"
            }
            variant="flat"
            type="submit"
          >
            {statusForm === "login"
              ? "Enter"
              : statusForm === "signup"
              ? "Register"
              : statusForm === "customers"
              ? "Add Customer"
              : btnText}
          </Button>
        </div>
      </ConditionalWrapper>

      {statusForm === "login" ? (
        <NotHave />
      ) : statusForm === "signup" ? (
        <Have />
      ) : statusForm === "customers" ? (
        <HaveCustomers />
      ) : null}
    </Form>
  );
}
