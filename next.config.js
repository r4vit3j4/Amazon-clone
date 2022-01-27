module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ID=process.env.NEXT_PUBLIC_GOOGLE_ID,
    NEXT_PUBLIC_GOOGLE_SECRET=process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    NEXT_PUBLIC_NEXTAUTH_URL=process.env.NEXT_PUBLIC_NEXTAUTH_URL,
    NEXT_PUBLIC_HOST=process.env.NEXT_PUBLIC_HOST,
  }
};
