import React, { useEffect, useState } from "react";
import axios from "./../../hooks/axiosInstance";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";


const AdminLogin = () => {
  useEffect(() => {
    handleRefreshCaptcha();
  }, []);

  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    password: "",
    captcha: "",
  });

  const [captchaImage, setCaptchaImage] = useState("");
  const [errorMessage, seterrorMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verify the captcha value on the server-side
      const response = await axios.post("/login", values);
      const { adminToken, validation, message } = response.data;

      if (validation) {
        Cookies.set("adminToken", adminToken, { expires: 1 / 96 });
        router.push("/admin");
        console.log("Login success");
      } else {
        seterrorMessage(message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRefreshCaptcha = () => {
    axios
      .get("/captcha")
      .then((response) => {

        const { data } = response;
        setCaptchaImage("data:image/svg+xml;base64," + btoa(data));
      })
      .catch((error) => {
        console.log(error.message);
        // Handle error
      });
  };

  return (
    <div>
      <section
        className="relative bg-[url('/images/aboutH.jpg')] bg-cover bg-center"
        style={{ backdropFilter: "blur(20px)" }}
      >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-7xl bg-black bg-opacity-30 font-semibold text-white dark:text-black"
          >
            Dashboard
          </Link>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                    value={values.name}
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={values.password}
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </div>
                <div className="flex">
                  <Image src={captchaImage} width={300} height={200} alt="captcha" className="bg-white w-40 h-16" />
                  <button
                    type="button"
                    className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                    onClick={handleRefreshCaptcha}
                  >
                    Refresh
                  </button>
                </div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter the numbers above"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={values.captcha}
                  onChange={(e) =>
                    setValues({ ...values, captcha: e.target.value })
                  }
                />
                <div className="  text-red-600">
                  <p>{errorMessage}</p>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
