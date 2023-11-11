import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Bistro Boss | {title}</title>
    </Helmet>
  );
};

export default HelmetTitle;
