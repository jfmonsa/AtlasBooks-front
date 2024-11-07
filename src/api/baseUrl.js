const typeBackend = "productionn";

const baseUrl =
  typeBackend === "production"
    ? "https://atlas-books-back.vercel.app/api/v1"
    : "http://localhost:3000/api/v1";

export default baseUrl;
