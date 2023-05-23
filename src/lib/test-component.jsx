import React, { Suspense, lazy } from "react";
import "./style.css";
const TestDiv = lazy(() => import("./test-div.jsx"));

export default function TestComponent() {
  return (
    <div className="testComponent">
      <Suspense fallback={<div>Test Component Loading...</div>}>
        <TestDiv />
      </Suspense>
    </div>
  );
}
