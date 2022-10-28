import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function HeartIcon({ solid, ...props }) {
  return <>{solid ? <AiFillHeart {...props} /> : <AiOutlineHeart {...props} />}</>;
}
export default HeartIcon;
