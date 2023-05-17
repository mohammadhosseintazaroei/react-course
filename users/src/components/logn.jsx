import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup";

import Input from "./input";
import { CheckOtpSchema } from "../validators/auth.schema";
import validate from "../validators/validator";
import NotificationAlert from "./partials/NotificationAlert";

export default function Login() {
  const [otpState, setOtpState] = useState(false);
  const [otp, setOtp] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [errors, setErrors] = useState(null);
  const [snackbarError, setSnackbarError] = useState(null);
  const [sending, setSending] = useState();

  const handleGetOtp = async (e) => {
    e.preventDefault();
    console.log("Ms");
    if (mobile) {
      setSending(true);
      await axios
        .post("http://localhost:8000/user/getotp", {
          mobile,
        })
        .then((res) => {
          setOtpState(true);
          setMobile(res.data.mobile);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
      setSending(false);
    }
  };

  const handleCheckOtp = async (e) => {
    e.preventDefault();
    console.log("md");
    const result = await validate(CheckOtpSchema, { mobile, otp });
    console.log(result);
    if (result.errors) {
      setErrors(result.errors);
      console.log(result.errors);
    } else {
      setErrors(null);
      setSending(true);
      await axios
        .post("http://localhost:8000/user/check-otp", {
          mobile: mobile,
          code: otp,
        })
        .then((res) => {
          localStorage.setItem("token", "Bearer " + res.data.accessToken);
        })
        .catch((err) => {
          console.log(err.response.data);
          console.log(err);
          setSnackbarError(err.response.data);
        });
      setSending(false);
    }
  };

  const handleResendCode = async (e) => {
    e.preventDefault();

    if (mobile) {
      await axios
        .post("http://localhost:8000/user/getotp", {
          mobile: mobile,
        })
        .then((res) => {
          setOtpState(true);
          setMobile(res.data.mobile);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  return (
    <>
      {snackbarError && (
        <NotificationAlert
          open={true}
          severity="error"
          message={snackbarError.errors.message}
          resetError={setSnackbarError}
        />
      )}
      {errors && (
        <div className="alert alert-danger">
          <ul>
            {errors?.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      {!otpState ? (
        <form onSubmit={handleGetOtp}>
          <Input label="Mobile" type="tel" handleChange={setMobile} />
          <button disabled={sending} className="btn btn-primary mt-3">
            GetOtp
          </button>
        </form>
      ) : (
        <form onSubmit={handleCheckOtp}>
          <div>
            <Input
              label="Code"
              type="text"
              className="form"
              handleChange={setOtp}
            />
          </div>
          <div className="py-2">
            <span>haven't you get verification code ? </span>
            <h5
              class="d-inline py-2"
              style={{
                color: "rgb(95 95 217)",
                cursor: "pointer",
              }}
              onClick={handleResendCode}
            >
              resend code
            </h5>
          </div>

          <button disabled={sending} className="btn btn-primary mt-2">
            Login
          </button>
        </form>
      )}
    </>
  );
}
