import * as yup from "yup";

const GetOtpSchema = yup.object().shape({
    mobile: yup.string().required("the mobile number is required"),

  });

const CheckOtpSchema = yup.object().shape({
    mobile: yup.string().required("the mobile number is required"),
    otp: yup.string().min(4).max(5).required("otpCode is required"),
  });


export {
    CheckOtpSchema
}