import React from "react";

const ArrowComponent = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={142} fill="none">
    <path
      fill={color}
      d="M12.943 4.137c1.267 2.272 0 6.165 0 8.761V106.346c0 8.112 0 16.549.634 24.985-2.218-4.218-4.752-8.112-6.97-12.33-2.217-3.894-8.553 0-6.018 3.569 3.484 5.841 7.286 12.006 11.087 17.846 1.584 2.271 4.118 1.947 5.702 0 2.535-3.569 5.386-6.814 8.237-9.734 2.217-2.271 4.435-4.218 5.385-7.138 0-.974-.317-1.947-1.267-1.623-3.485 0-7.286 3.245-10.454 6.49v-55.81c0-11.032 0-22.389-.317-33.42 0-5.517 0-10.708-.317-16.224V13.87c0-2.595-1.267-7.138 0-9.734 2.851-5.516-7.602-5.516-4.752 0h-.95Z"
    />
  </svg>
);
export default ArrowComponent;