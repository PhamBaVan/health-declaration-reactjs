import { Field } from "formik";

const Vaccine = () => {
  return (
    <>
      <div className="mb-4 row">
        <div className="row">
          <h4 className="fs-5 fw-bold">Vaccines:</h4>
          <div className="col-lg-4">
            <label htmlFor="" className="form-label me-4 d-inline-block">
              Which one would you like to vaccinate ?:
            </label>
          </div>
          <div className="col">
            <label className="form-check-label me-4" htmlFor="">
              <Field
                name="vaccines"
                className="form-check-input me-1"
                type="radio"
                value="none"
              />
              None
            </label>
            <label className="form-check-label me-4" htmlFor="">
              <Field
                name="vaccines"
                className="form-check-input me-1"
                type="radio"
                value="Astra Zenecca"
              />
              Astra Zenecca
            </label>
            <label className="form-check-label me-4" htmlFor="">
              <Field
                name="vaccines"
                className="form-check-input me-1"
                type="radio"
                value="Pfizer"
              />
              Pfizer
            </label>
            <label className="form-check-label me-4" htmlFor="">
              <Field
                name="vaccines"
                className="form-check-input me-1"
                type="radio"
                value="moderna"
              />
              Moderna
            </label>
            <label className="form-check-label me-4" htmlFor="">
              <Field
                name="vaccines"
                className="form-check-input me-1"
                type="radio"
                value="sinopharm"
              />
              Sinopharm
            </label>
          </div>
          <div className="col-lg-12"></div>
        </div>
      </div>
    </>
  );
};

export default Vaccine;
