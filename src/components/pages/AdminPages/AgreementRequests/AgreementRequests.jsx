// component
import DashboardHeading from "./../../../shared/DashboardHeading/DashboardHeading";
import LoadingSpinner from "../../../shared/LoadingSpinner/LoadingSpinner";
import AgreementRequest from "./AgreementRequest/AgreementRequest";
import NoData from "../../../shared/NoData/NoData";

// hook
import useFlatsAgreementsProvider from "./../../../../hooks/useFlatsAgreementsProvider";

const AgreementRequests = () => {
  const { agreementsData, agreementsDataLoading } =
    useFlatsAgreementsProvider();

  return (
    <div>
      {/* agrement requests */}
      <section>
        <DashboardHeading text="All Agreement Requests" modifyClasses="mb-7" />

        {agreementsDataLoading && <LoadingSpinner text="Agreements Loading" />}

        {!agreementsDataLoading && agreementsData.length < 1 && <NoData />}

        {!agreementsDataLoading && agreementsData.length > 0 && (
          <div className="space-y-5">
            {agreementsData.map((singleAgreement) => {
              return (
                <AgreementRequest
                  key={singleAgreement._id}
                  agreementsData={singleAgreement}
                />
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default AgreementRequests;
