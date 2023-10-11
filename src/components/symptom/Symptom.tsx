import { Field } from "formik";

const Symptom = () => {
  return (
    <>
      <div className="mb-4 mt-3 row">
        <div className="row">
          <h4 className="fs-5 fw-bold">Symptoms:</h4>
          <div className="col-lg-4">
            <label
              htmlFor="symptoms"
              className="form-label me-4 d-inline-block"
            >
              Do you have any following symptoms?:
            </label>
          </div>
          <div className="col">
            <label className="form-check-label me-4" htmlFor="fiber">
              <Field
                name="symptoms"
                className="form-check-input me-1"
                type="checkbox"
                value="fiber"
              />
              Fiber
            </label>
            <label className="form-check-label me-4" htmlFor="fever">
              <Field
                name="symptoms"
                className="form-check-input me-1"
                type="checkbox"
                value="fever"
              />
              Fever
            </label>
            <label className="form-check-label me-4" htmlFor="sorethroat">
              <Field
                name="symptoms"
                className="form-check-input me-1"
                type="checkbox"
                value="sorethroat"
              />
              Sore throat
            </label>
            <label className="form-check-label me-4" htmlFor="difficulty">
              <Field
                name="symptoms"
                className="form-check-input me-1"
                type="checkbox"
                value="difficulty"
              />
              Difficulty of breathing
            </label>
          </div>
          <div className="col-lg-12"></div>
        </div>
      </div>
    </>
  );
};

export default Symptom;
