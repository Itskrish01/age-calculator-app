import { useFormik } from "formik";
import "./App.css";
import Input from "./components/UI/Input";
import * as Yup from "yup";
import { useState } from "react";

function App() {
  const date = new Date();
  let year = date.getFullYear();
  const [fullAgeInfo, setFullAgeInfo] = useState();

  const DateSchema = Yup.object().shape({
    Day: Yup.number()
      .integer()
      .typeError("Must be a Number")
      .min(1, "Must be a valid Day")
      .max(31, "Must be a Valid Day")
      .required("Required"),
    Month: Yup.number("")
      .integer()
      .typeError("Must be a Number")
      .min(1, "Must be a valid Month")
      .max(12, "Must be a Valid Month")
      .required("Required"),
    Year: Yup.number()
      .integer()
      .typeError("Must be a Number")
      .max(year, "Must be a in the past")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      Day: "",
      Month: "",
      Year: "",
    },
    validationSchema: DateSchema,
    onSubmit: (values) => {
      setFullAgeInfo(
        calculateAge(values.Year + "-" + values.Month + "-" + values.Day)
      );
    },
  });

  function calculateAge(birthdate) {
    let birthdateObj = new Date(birthdate);
    let today = new Date();
    let diffMs = today.getTime() - birthdateObj.getTime();
    let diffDays = diffMs / (1000 * 60 * 60 * 24);
    let years = Math.floor(diffDays / 365);
    let months = Math.floor((diffDays % 365) / 30);
    let days = Math.floor((diffDays % 365) % 30);

    return {
      years: years,
      months: months,
      days: days,
    };
  }

  return (
    <div className="bg-white p-10 rounded-t-2xl rounded-l-2xl rounded-br-[10rem]">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex gap-5 mr-32">
          <Input
            title="DAY"
            placeholder="DD"
            name="Day"
            onChange={formik.handleChange}
            value={formik.values.Day}
            error={formik.errors.Day}
          />
          <Input
            title="MONTH"
            placeholder="MM"
            name="Month"
            onChange={formik.handleChange}
            value={formik.values.Month}
            error={formik.errors.Month}
          />
          <Input
            title="YEAR"
            placeholder="YYYY"
            name="Year"
            onChange={formik.handleChange}
            value={formik.values.Year}
            error={formik.errors.Year}
          />
        </div>
        <div className="flex mt-2 items-center">
          <div class="h-px flex-1 bg-slate-200 "></div>
          <button
            type="submit"
            class="text-white bg-[#864cff] p-5 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>

            <span class="sr-only">Icon description</span>
          </button>
        </div>
      </form>
      <div className="italic leading-[80px] font-extrabold mb-2 text-[5rem]">
        <div>
          <span className="text-[#864cff] mr-4">
            {fullAgeInfo ? fullAgeInfo?.years : "--"}
          </span>
          <span>years</span>
        </div>
        <div>
          <span className="text-[#864cff] mr-4">
            {fullAgeInfo ? fullAgeInfo?.months : "--"}
          </span>
          <span>months</span>
        </div>
        <div>
          <span className="text-[#864cff] mr-4">
            {fullAgeInfo ? fullAgeInfo?.days : "--"}
          </span>
          <span>days</span>
        </div>
      </div>
      <footer class="attribution absolute bottom-0">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-blue-600"
          href="https://www.frontendmentor.io/profile/Itskrish01"
        >
          itsKrish01
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
