"use client";
const AuthLayout = ({
  children, // With page or instead layout
}: {
  children: React.ReactNode;
}) => {
  return <section>{children}</section>;
};
export default AuthLayout;
