import axios from "axios";
import React, { useState } from "react";
import Input from "./input";
export default function Login() {
  const [otp, setOtp] = useState(false);
  const [mobile, setMobile] = useState(null);

  const handleSubmitGetOtp = async (e) => {
    e.preventDefault();
    console.log("Ms");
    if (mobile) {
      await axios
        .post("http://localhost:8000/user/getotp", {
          mobile,
        })
        .then((res) => {
          setOtp(true);
          setMobile(res.data.mobile);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  const handleSubmitCheckOtp = async (e) => {
    e.preventDefault();
    console.log("md");
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
      });
  };

  const handleResendCode = async (e) => {
    e.preventDefault();

    if (mobile) {
      await axios
        .post("http://localhost:8000/user/getotp", {
          mobile: mobile,
        })
        .then((res) => {
          setOtp(true);
          setMobile(res.data.mobile);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };
  return (
    <>
      {!otp ? (
        <form onSubmit={handleSubmitGetOtp}>
          <Input label="Mobile" type="tel" handleChange={setMobile} />
          <button className="btn btn-primary mt-3">GetOtp</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitCheckOtp}>
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
          <button className="btn btn-primary mt-2">Login</button>
        </form>
      )}
    </>
  );
}
