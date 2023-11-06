import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
});

export const otpSchema = yup.object().shape({
  otp: yup.string()
  .matches(/^\d{4}$/, 'OTP must be a 4-digit numeric code')
    .required('OTP is required'),
})

export const passwrodSchema = yup.object().shape({
  password: yup.string()
  .min(4, 'Password must be at least 4 characters')
  .max(15, 'Password must not exceed 15 characters')
  .matches(
    /^(?=.*[!@#$%^&*()-=_+[\]{};':"\\|,<>/?])(?!.*\s).*$/,
    'Password must include at least one special character and not contain spaces'
  )
  .required('Password is required'),
})


export const onBoardingSchema = yup.object().shape({
  fullName: yup.string().required("Required"),
  phone_number: yup
    .string()
    .required("Required")
    // .matches(
    //   /^[0-9]{10}$/, // Define your desired phone number pattern here
    //   "Invalid phone number. Please enter a 10-digit number."
    // ),
    ,
    company_name: yup
    .string()
    .required("Required")
    .min(3, "Too short, minimum length is 3 characters")
    .max(50, "Too long, maximum length is 50 characters"),
  profession: yup.string().required("Required"),
  // profileImage: "link of profile image"
});
