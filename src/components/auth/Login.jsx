import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/images/logo.png";
import { useRouter } from "next/router";
import Button from "../common/buttons/Button";
import { useFormik } from "formik";
import { loginInitial } from "../common/constant/formInitialValue";
import { loginSchema } from "../common/constant/validationSchema";
import InputField from "../common/InputField";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "@/service/action/authentication";
const Login = () => {
  const { isLogin } = useSelector((state) => state.authenticationReducer);
  const router = useRouter();
  const dispatch = useDispatch();
  const cb = (data) => {
    if(data.role==="admin"){
      router.push("/admin/student")
    }else if(data.role==="student"){
      router.push("/student/dashboard")
    }else if(data.role==="quardinate"){
      router.push("/quardinator/student")
    }else if(data.role==="centre"){
      router.push("/centre/student")
    }
  };

  const loginNow = useFormik({
    initialValues: loginInitial,
    validationSchema: loginSchema,
    onSubmit: data=> {
      dispatch(loginAction({ data, cb }));
    },
  });

  return (
    <div className="pt-5 login-area">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div className="login-box">
              <a href="#" className="login-logo">
                <Image src={Logo} alt="logo" onClick={()=>router.push("/")}/>
              </a>{" "}
              <br /> <br />
            </div>
            <div className="card card-body">
              <form id="submitForm">
                <div className="form-group required">
                  <label
                    className="d-flex flex-row align-items-center"
                    htmlFor="password"
                  >
                    {" "}
                    Enter your Password
                  </label>
                  <InputField formik={loginNow} name="email" size="small" />
                </div>
                <div className="form-group required">
                  <label
                    className="d-flex flex-row align-items-center"
                    htmlFor="password"
                  >
                    {" "}
                    Enter your Password
                    <a className="ml-auto border-link small-xl" href="#">
                      {" "}
                      Forget Password?{" "}
                    </a>{" "}
                  </label>
                  <InputField type="password" formik={loginNow} name="password" size="small" />
                </div>
                <div className="form-group mt-4 mb-4">
                  <div className="custom-control custom-checkbox"></div>
                </div>
                <div className="form-group pt-1">
                  <Button
                    isLoading={isLogin}
                    onClick={loginNow.handleSubmit}
                    fullWidth
                    iconName="login"
                    iconSize={20}
                    label={"Login"}
                  />
                </div>
              </form>
              <p className="small-xl pt-3 text-center">
                <span className="text-muted"> Not a member? </span>
                <a href="#"> Sign up </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
