import styles from "./DeclarationHealth.module.css";
import { FieldArray, Formik, ErrorMessage, Field } from "formik";
import { Form } from "react-bootstrap";
import countries from "../../../data/countries.json";
import { CountryInterface } from "../../type/Countries";
import { initialValues } from "../../type/initialValues";
import HeadingMedical from "../medical-declaration-heading/HeadingMedical";
import { validationSchema } from "../../type/validationSchema";
import PersonInformation from "../personal-infor/PersonInformation";
import Contact from "../contact/Contact";
import { FormValues } from "../../type/FormValues";
import Symptom from "../symptom/Symptom";
import Vaccine from "../vaccine/Vaccine";
import { useLocation, useNavigate } from "react-router-dom";
import { Dispatch } from "react";

type Props = {
  setForms: Dispatch<React.SetStateAction<FormValues[]>>;
};
function getId(ids: string[]) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  if (ids.includes(result)) {
    result = getId(ids);
  }
  return "_" + result;
}

const DeclarationHealth = ({ setForms }: Props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("state ===", state);

  const handleSubmit = (values: FormValues) => {
    console.log("values === ", values);
    setForms((forms) => {
      let newForms = [...forms];
      const formIndex = newForms.findIndex((form) => form.id === values.id);
      if (formIndex !== -1) {
        newForms[formIndex] = values;
      } else {
        newForms = newForms.concat({
          ...values,
          id: getId(forms.map((f) => f.id)),
        });
      }
      console.log("form moi la === ", newForms);
      return newForms;
    });
    navigate("/table");
  };

  return (
    <>
      <Formik<FormValues>
        initialValues={state == null ? initialValues : state}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className={`container`}>
            <HeadingMedical />
            <div className={`row`}>
              <Form
                className={styles.formFormik}
                action=""
                onSubmit={formik.handleSubmit}
              >
                <PersonInformation />
                <Contact formik={formik} />
                <div>
                  <h4 className="fs-5 fw-bold">Travel:</h4>
                </div>
                <FieldArray name="travels">
                  {({ push, remove }) => (
                    <div>
                      {formik.values.travels &&
                      formik.values.travels.length > 0 ? (
                        <div>
                          {formik.values.travels.map((_, index) => (
                            <div
                              key={index}
                              className={`d-flex flex-column mt-1 mb-4`}
                            >
                              <div className="col-lg-12">
                                <h6 className={`fw-bold text-primary`}>
                                  Travel {index + 1}
                                </h6>
                              </div>
                              <div className="d-flex">
                                <div className="mb-4 col-lg-6 pe-3">
                                  <label
                                    htmlFor={`departureDate.${index}`}
                                    className="form-label"
                                  >
                                    Departure Date
                                  </label>
                                  <Field
                                    type="date"
                                    name={`travels[${index}].departureDate`}
                                    className={`form-input form-control`}
                                  />
                                  <ErrorMessage
                                    name={`travels[${index}].departureDate`}
                                    component="div"
                                    className={styles.error}
                                  />
                                </div>
                                <div className="mb-4 col-lg-6 ps-3">
                                  <label
                                    htmlFor={`immigrationDate.${index}`}
                                    className="form-label"
                                  >
                                    Immigration Date
                                  </label>
                                  <Field
                                    type="date"
                                    name={`travels[${index}].immigrationDate`}
                                    className={`form-input form-control`}
                                  />
                                  <ErrorMessage
                                    name={`travels[${index}].immigrationDate`}
                                    component="div"
                                    className={styles.error}
                                  />
                                </div>
                              </div>
                              <div className="d-flex">
                                <div className="mb-4 col-lg-6 pe-3">
                                  <label
                                    htmlFor="departure"
                                    className="form-label"
                                  >
                                    Departure
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    as="select"
                                    name={`travels[${index}].departure`}
                                    className={`form-input form-control`}
                                  >
                                    <option value="">Select an option</option>
                                    {countries.map(
                                      (
                                        item: CountryInterface,
                                        index: number
                                      ) => (
                                        <option key={index} value={item.name}>
                                          {item.name}
                                        </option>
                                      )
                                    )}
                                  </Field>
                                  <ErrorMessage
                                    name={`travels[${index}].departure`}
                                    component="div"
                                    className={styles.error}
                                  />
                                </div>
                                <div className="mb-4 col-lg-6 ps-3">
                                  <label
                                    htmlFor="destination"
                                    className="form-label"
                                  >
                                    Destination
                                  </label>
                                  <Field
                                    as="select"
                                    name={`travels[${index}].destination`}
                                    className={`form-input form-control`}
                                  >
                                    <option value="">Select an option</option>
                                    {countries.map(
                                      (
                                        item: CountryInterface,
                                        index: number
                                      ) => (
                                        <option key={index} value={item.name}>
                                          {item.name}
                                        </option>
                                      )
                                    )}
                                  </Field>
                                  <ErrorMessage
                                    name={`travels[${index}].destination`}
                                    component="div"
                                    className={styles.error}
                                  />
                                </div>
                              </div>
                              <div>
                                <button
                                  className={`btn btn-danger`}
                                  type="button"
                                  onClick={() => {
                                    remove(index);
                                    console.log(formik.values.travels.length);
                                  }}
                                >
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  className={`btn btn-warning ms-3`}
                                  onClick={() => {
                                    push({
                                      departureDate: "",
                                      immigrationDate: "",
                                      departure: "",
                                      destination: "",
                                    });
                                  }}
                                >
                                  Add more
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={`d-flex align-items-center`}>
                          <h6 className={`mb-0 me-3`}>
                            Do you travel in the last 14 days?
                          </h6>
                          <button
                            type="button"
                            className={`btn btn-warning`}
                            onClick={() => {
                              push({
                                departureDate: "",
                                immigrationDate: "",
                                departure: "",
                                destination: "",
                              });
                            }}
                          >
                            Add more
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </FieldArray>
                <Symptom />
                <Vaccine />
                <div className="d-flex align-items-center gap-3 mt-4 mb-4">
                  <button type="submit" className="btn btn-success btn-lg">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      if (formik.dirty) {
                        if (window.confirm("Do you want to cancel?")) {
                          navigate("/table");
                        }
                      } else navigate("/table");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      if (formik.dirty) {
                        if (window.confirm("Do you want to reset?")) {
                          formik.resetForm();
                        }
                      }
                    }}
                  >
                    Reset
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
export default DeclarationHealth;
