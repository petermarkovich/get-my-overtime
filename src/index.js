import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const initialValues = {
  "required-hours": 160,
  hours: 176,
  salary: 500
};

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};
const App = () => (
  <Styles>
    <h1>Get overtime</h1>
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Required hours</label>
              <Field name="required-hours">
                {(props) => (
                  <div>
                    <input {...props.input} placeholder="160" />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label>Total hours</label>
              <Field name="hours">
                {(props) => (
                  <div>
                    <input {...props.input} placeholder="176" />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label>Total salary</label>
              <Field name="salary">
                {(props) => (
                  <div>
                    <input {...props.input} placeholder="500" />
                  </div>
                )}
              </Field>
            </div>
            <h5>
              #template: ({values.hours} - {values["required-hours"]}) *((
              {values.salary}/{Number(values["required-hours"])}) * 1.5)
            </h5>
            <h2>
              {(Number(values.hours) - Number(values["required-hours"])) *
                (
                  (Number(values.salary) / Number(values["required-hours"])) *
                  1.5
                ).toFixed(3)}{" "}
              $
            </h2>
          </form>
        );
      }}
    />
  </Styles>
);

render(<App />, document.getElementById("root"));
