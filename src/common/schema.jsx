import * as yup from "yup";
export const onBoardingSchema = yup.object().shape({
    fullName: yup.string().required("Required"),
    phoneNumber: yup
      .string()
      .required("Required")
      .matches(
        /^[0-9]{10}$/, // Define your desired phone number pattern here
        "Invalid phone number. Please enter a 10-digit number."
      ),
      // ,
    currentCompany: yup
      .string()
      .required("Required")
      .min(3, "Too short, minimum length is 3 characters")
      .max(50, "Too long, maximum length is 50 characters"),
    profession: yup.string().required("Required"),
    experience: yup.string().required("Required"),
    email:yup.string().email('Invalid email').required('Required'),
    // profileImage: "link of profile image"
  });