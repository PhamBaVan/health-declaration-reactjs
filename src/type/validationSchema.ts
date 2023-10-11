import * as Yup from "yup";
export const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(5, "Your name must be at least 5 characters")
      .max(25, "Your name should be limited at 25 characters")
      .required("You must fill in this section"),
    selectObject: Yup.string().required("Object is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    selectNationality: Yup.string().required("Nationality is required"),
    nationId: Yup.string().required("Nation ID is required"),
    province: Yup.string().required("Contact Province is required"),
    district: Yup.string().required("District is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("You must fill in this section"),
    mobile: Yup.string().required("Mobile phone is required"),
    travels: Yup.array().of(
      Yup.object({
        departureDate: Yup.string().required(
          "Departure date is required"
        ),
        immigrationDate: Yup.string().required(
          "Immigration date is required"
        ),
        departure: Yup.string().required("Departure is required"),
        destination: Yup.string().required("Destination is required"),
      })
    ),
  })