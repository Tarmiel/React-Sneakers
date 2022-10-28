import { FiArrowRight } from "react-icons/fi";

const ArrowIcon = (props) => {
  return (
    // <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg" {...props}>
    //   <path d="M14.7144 7L1.00007 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M7 13L1 7L7 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    // </svg>
    <FiArrowRight {...props} />
  );
};

export default ArrowIcon;
