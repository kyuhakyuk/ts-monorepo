import cors from "cors";

export const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [process.env.NOW_URL || "https://example.com"]
      : [/localhost/],
  credentials: true,
};

export default cors(corsOptions);
