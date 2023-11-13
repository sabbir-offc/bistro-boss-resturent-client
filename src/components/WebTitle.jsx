import { Helmet } from "react-helmet-async";

const WebTitle = ({ title }) => {
  return (
    <Helmet>
      <title>Bistro Boss | {title}</title>
    </Helmet>
  );
};

export default WebTitle;
