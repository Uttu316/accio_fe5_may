import Header from "../header";

const Page = ({ className, children }) => {
  return (
    <div className={className}>
      <Header />
      {children}
    </div>
  );
};
export default Page;
