import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default nextAuth({
  providers: [
    GoogleProvider({
      clientId: 332421856982-tjji1k6i7k1chkfbof0cpcps5dkeo4ap.apps.googleusercontent.com,
      clientSecret: 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,
    }),
  ],
});
