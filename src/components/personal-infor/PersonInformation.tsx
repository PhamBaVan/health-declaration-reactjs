import { Field, ErrorMessage } from "formik";
import { CountryInterface } from "../../type/Countries";
import countries from "../../../data/countries.json";
import styles from "./PersonInformation.module.css";
const PersonInformation = () => {
  return (
    <>
      <div className={`col-12`}>
        <h4 className={`fs-5 fw-bold`}>Personal information:</h4>
      </div>
      <div className={`mb-4`}>
        <label htmlFor="fullName" className={`form-label`}>
          Full name
        </label>
        <Field
          as="input"
          name="fullName"
          className={`form-input form-control`}
        />
        <ErrorMessage
          name="fullName"
          className={`${styles.errorMessage}`}
          component="div"
        />
      </div>
      <div className="mb-4 row">
        <div className="col-lg-6">
          <label htmlFor="selectObject" className="form-label">
            Object<span className="text-danger">*</span>
          </label>
          <Field
            as="select"
            name="selectObject"
            className={`form-select form-control`}
          >
            <option value="">-----Choose</option>
            <option value="Expert">Expert</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="International Student">International Student</option>
            <option value="Other">Other</option>
          </Field>
          <ErrorMessage
            name="selectObject"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
        <div className="col-lg-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date of birth
          </label>
          <Field
            type="date"
            name="dateOfBirth"
            className={`form-input form-control`}
          />
          <ErrorMessage
            name="dateOfBirth"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
        <div className="col-lg-3">
          <label htmlFor="gender" className="form-label">
            Gender<span className="text-danger">*</span>
          </label>
          <Field
            as="select"
            name="gender"
            className={`form-select form-control`}
          >
            <option value="">-----Choose</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage
            name="gender"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
      </div>
      <div className={`mb-4 row`}>
        <div className={`col-lg-6`}>
          <label htmlFor="selectNationality" className="form-label">
            Select Nationality<span className="text-danger">*</span>
          </label>
          <Field
            as="select"
            name="selectNationality"
            className={`form-select form-control`}
          >
            <option value="">Select an option</option>
            {countries.map((item: CountryInterface, index: number) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="selectNationality"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
        <div className={`col-lg-6`}>
          <label htmlFor="nationId" className="form-label">
            Nation ID or Passport ID
            <span className="text-danger">*</span>
          </label>
          <Field
            as="input"
            name="nationId"
            className={`form-input form-control`}
          />
          <ErrorMessage
            name="nationId"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
      </div>
    </>
  );
};

export default PersonInformation;
