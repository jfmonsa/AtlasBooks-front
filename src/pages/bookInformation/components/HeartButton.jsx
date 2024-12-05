import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useToggleState } from "../../../hooks/useToggleState.js";

export function HeartButton({ className }) {
  const [likedBook, toggleLikedBook] = useToggleState();

  likedBook ? (
    <FaHeart
      style={{
        color: "var(--error)",
      }}
      className={className}
      onClick={toggleLikedBook}
    />
  ) : (
    <FaRegHeart onClick={toggleLikedBook} className={className} />
  );
}
