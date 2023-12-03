import React, { useState } from "react";
import "./Card4.css";

const Card4 = () => {
  const [isCard402Visible, setCard402Visible] = useState(false);

  const handleCard401Click = () => {
    setCard402Visible(!isCard402Visible);
  };

  return (
    <div className="card4">
      <div className="card44">
        <div className="card40">
          <div className="card401" onClick={handleCard401Click}>
            <div className="card401inner">
              <div className="card4data">
                <p>Is Manage Wise suitable for small businesses and larger enterprises alike?</p>
              </div>
              <div className="card4sign">
                {isCard402Visible ? (
                  // SVG for Cross symbol
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                    color="var(--token-8d3b0b5c-ed9a-45d2-b302-4c9cef737fdc, rgb(130, 71, 255)) /* {&quot;name&quot;:&quot;Purple&quot;} */"  // Customize the color as needed
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  // SVG for Plus symbol
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                    color="var(--token-8d3b0b5c-ed9a-45d2-b302-4c9cef737fdc, rgb(130, 71, 255)) /* {&quot;name&quot;:&quot;Purple&quot;} */"  // Customize the color as needed
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Render card402 only if isCard402Visible is true */}
          {isCard402Visible && (
            <div className="card402">
              <div className="card402inner">
                <p>
                  Manage Wise is a comprehensive management platform designed to
                  streamline your business operations, enhance productivity, and
                  drive success. It offers a range of features including task
                  management, scheduling, communication tools, analytics, and more.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card4;
