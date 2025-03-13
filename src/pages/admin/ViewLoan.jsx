import React, { useEffect } from "react";
import LoanCard from "../../features/loan/components/LoanCard";
import ViewTable from "../../features/loan/components/ViewTable";
import { useGetLoanByIdMutation } from "../../features/loan/api/loanApi";
import { useParams } from "react-router-dom";

const ViewLoan = () => {
  const { loanId } = useParams();
  const [getLoanById, { isLoading, data }] = useGetLoanByIdMutation();

  useEffect(() => {
    getLoanById({
      loanId,
    });
  }, []);

  const loanData = data?.data;
  const searchVehicles = data?.data?.user;

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
      <div className="grid gap-4">
        <LoanCard key={loanId} loan={loanData} />
      </div>

      <div className="mt-10">
        <ViewTable searchData={searchVehicles} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ViewLoan;
