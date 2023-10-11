import { Field, ErrorMessage, FormikProps } from "formik";
import styles from "./Contact.module.css";
import vietnamProvince from "../../../data/vietnam-province-district.json";
import { VietnamProvince } from "../../type/VietnamProvinces";
import { FormValues } from "../../type/FormValues";

interface ContactProps {
  formik: FormikProps<FormValues>; // Replace YourFormValues with the actual type of your form values
}

const Contact = ({ formik }: ContactProps) => {
  const province = Object.keys(vietnamProvince).map((key) => ({
    key: key,
    value: vietnamProvince[key as keyof typeof vietnamProvince],
  }));
  const getDistricts = (
    vietNamProvinces: VietnamProvince,
    city: keyof VietnamProvince
  ) => {
    if (!city) return [];
    return Object.keys(vietNamProvinces[city].cities).map((key) => {
      return {
        value: key,
        label: vietNamProvinces[city].cities[key],
      };
    });
  };
  return (
    <>
      <div className={`mt-4 row`}>
        <div className={`col-lg-12`}>
          <h4 className={`fs-5 fw-bold`}>Contact:</h4>
        </div>
      </div>
      <div className={`mb-4 row`}>
        <div className={`col-lg-6`}>
          <label htmlFor="province" className={`form-label`}>
            Province<span className={`text-danger`}>*</span>
          </label>
          <Field
            as="select"
            name="province"
            className={`form-select form-control`}
          >
            <option value="">Select an option</option>
            {province.map((item, index) => (
              <option key={index} value={item.key}>
                {item.value.name}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="province"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
        <div className={`col-lg-6`}>
          <label htmlFor="district" className={`form-label`}>
            District<span className={`text-danger`}>*</span>
          </label>
          <Field
            as="select"
            name="district"
            className={`form-select form-control`}
          >
            <option value="">Select an option</option>
            {getDistricts(vietnamProvince, formik.values.province).map(
              (district) => (
                <option key={district.value} value={district.label}>
                  {district.label}
                </option>
              )
            )}
          </Field>
          <ErrorMessage
            name="district"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
      </div>
      <div className={`mb-4 row`}>
        <div className={`col-lg-6`}>
          <label htmlFor="address" className="form-label">
            Address<span className="text-danger">*</span>
          </label>
          <Field
            as="input"
            name="address"
            className={`form-input form-control`}
          />
          <ErrorMessage
            name="address"
            className={`${styles.errorMessage}`}
            component="div"
          />
        </div>
        <div className={`col-lg-6 row`}>
          <div className={`col-6`}>
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <Field
              as="input"
              name="email"
              className={`form-input form-control`}
            />
            <ErrorMessage
              name="email"
              className={`${styles.errorMessage}`}
              component="div"
            />
          </div>
          <div className={`col-6`}>
            <label htmlFor="mobile" className="form-label">
              Mobile<span className="text-danger">*</span>
            </label>
            <Field
              as="input"
              name="mobile"
              className={`form-input form-control`}
            />
            <ErrorMessage
              name="mobile"
              className={`${styles.errorMessage}`}
              component="div"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
