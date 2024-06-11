const typeBackend = "production";

const baseUrl =
  typeBackend === "production"
    ? "https://atlas-books-back.vercel.app/api"
    : "http://localhost:3000/api";

export default baseUrl;
