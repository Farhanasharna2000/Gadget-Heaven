import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
          <h1 className="font-bold mt-3 ml-3 text-xl">Statistics</h1>
          <h2 className="font-bold text-center text-[#9538E2] text-4xl py-12">No Data to Show Statistics</h2>
        </div>
    );
};

export default Statistics;