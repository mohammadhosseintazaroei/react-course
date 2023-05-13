import axios from "axios";
import React, { Component, createRef } from "react";
import { useNavigate } from "react-router-dom";

export default class ClassLogin extends Component {
  //States
  state = {
    mobile: null,
    otpSet: false,
  };
  //Refs
  mobileRef = createRef();
  code = createRef();

  handleSubmitGetOtp = async (e) => {
    e.preventDefault();
    const account = { mobile: this.mobileRef.current.value };

    if (account.mobile) {
      console.log("account", account.mobile);
      await axios
        .post("http://localhost:8000/user/getotp", {
          mobile: account.mobile,
        })
        .then((res) => {
          this.setState({
            otpSet: true,
            ...(res.data.mobile && { mobile: res.data.mobile }),
          });
          console.log(this.state.mobile);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  handleSubmitCheckOtp = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/user/check-otp", {
        mobile: this.state.mobile,
        code: this.code.current.value,
      })
      .then((res) => {
        localStorage.setItem("token", "Bearer " + res.data.accessToken);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <>
        {!this.state.otpSet ? (
          <form onSubmit={this.handleSubmitGetOtp}>
            <div className="md-3">
              <label htmlFor="mobileRef">mobile:</label>
              <input
                ref={this.mobileRef}
                id="mobileRef"
                className="form-control"
                type="text"
              />
            </div>

            <button className="btn btn-primary mt-2">GetOtp</button>
          </form>
        ) : (
          <form onSubmit={this.handleSubmitCheckOtp}>
            <div className="md-3">
              <label htmlFor="code">Code</label>
              <span>:</span>
              <input
                ref={this.code}
                id="code"
                className="form-control"
                type="text"
              />
      <div className="py-2">
      <span>haven't you get verification code ? </span>
              <h5 class="d-inline py-2" style={{
                    color: "rgb(95 95 217)",
                    cursor: "pointer"
              }} onClick={()=>this.setState({otpSet:false})}>resend code</h5>
      </div>
            </div>

            <button className="btn btn-primary mt-2">Login</button>
          </form>
        )}
      </>
    );
  }
}
