import axios from "axios";
import React, { useState, useRef } from "react";

export default function Login() {
  const [otp, setOtp] = useState(false);
  const [mobile, setMobile] = useState(null);

  const mobileRef = useRef();
  const codeRef = useRef();

  const handleSubmitGetOtp = async (e) => {
    e.preventDefault();
    const account = { mobile: mobileRef.current.value };

    if (account.mobile) {
      console.log("account", account.mobile);
      await axios
        .post("http://localhost:8000/user/getotp", {
          mobile: account.mobile,
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

    await axios
      .post("http://localhost:8000/user/check-otp", {
        mobile: mobile,
        code: codeRef.current.value,
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
          <div className="md-3">
            <label htmlFor="phone">Phone:</label>
            <input
              ref={mobileRef}
              id="phone"
              className="form-control"
              type="text"
            />
          </div>

          <button className="btn btn-primary mt-2">GetOtp</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitCheckOtp}>
          <div className="md-3">
            <label htmlFor="code">Code</label>
            <span>:</span>
            <input
              ref={codeRef}
              id="code"
              className="form-control"
              type="text"
            />
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
          </div>

          <button className="btn btn-primary mt-2">Login</button>
        </form>
      )}
    </>
  );
}
