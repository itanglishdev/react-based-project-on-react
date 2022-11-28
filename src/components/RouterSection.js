import LinkSection from "../sub-components/router-sub-components/LinkSetup";
import OutletSection from "../sub-components/router-sub-components/OutletSection";
import ParamsSection from "../sub-components/router-sub-components/ParamsSection";
import SetUp from "../sub-components/router-sub-components/SetUp";
import UseNavigateSection from "../sub-components/router-sub-components/UseNavigateSection";
import Footer from "./Footer";

function RouterSection() {
  return (
    <div>
      <div className="router-section  right-side-main">
        <SetUp />
        <LinkSection />
        <UseNavigateSection />
        <ParamsSection />
        <OutletSection />
      </div>
      <Footer />
    </div>
  );
}

export default RouterSection;
