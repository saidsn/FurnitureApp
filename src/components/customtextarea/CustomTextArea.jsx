import React from "react";
import "./CustomTextArea.scss";
import { useField } from "formik";

const CustomTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="textarea-validation">
      <textarea {...field} {...props} />

      {meta.touched && meta.error ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="errorsvg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
              fill="#DC4F4F"
            />
          </svg>
          <span>{meta.error}</span>
        </>
      ) : null}
    </div>
  );
};

export default CustomTextArea;
