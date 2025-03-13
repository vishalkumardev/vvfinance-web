import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/common/components/ui/card";

const LoanCard = ({ loan }) => {
  return (
    <Card className="border border-gray-200 shadow-lg rounded-xl p-6 bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-800">
          Loan ID: <span className="text-blue-600">{loan?.agreementId}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Registration No", value: loan?.registration_no },
            { label: "Customer Name", value: loan?.customer },
            { label: "Agreement ID", value: loan?.agreementid },
            { label: "Product Name", value: loan?.productname },
            { label: "EMI Amount", value: `₹${loan?.emi_amt}` },
            { label: "Total Due", value: `₹${loan?.total_due}` },
            { label: "Chassis Number", value: loan?.chasisnum },
            { label: "Engine Number", value: loan?.enginenum },
            { label: "Bucket", value: loan?.bucket },
            { label: "Branch", value: loan?.branch },
            { label: "Model", value: loan?.model },
            { label: "Seasoning", value: loan?.seasoning },
            { label: "TBR", value: loan?.tbr },
            { label: "Allocation", value: loan?.allocation },
            { label: "Address", value: loan?.address },
            {
              label: "BM Name",
              value: `${loan?.bm_name} (${loan?.bm_mobile_no})`,
            },
            {
              label: "RRM Name",
              value: `${loan?.rrm_name} (${loan?.rrm_mobile_no})`,
            },
            {
              label: "Coordinator",
              value: `${loan?.coordinator_name} (${loan?.coordinater_mobile_no})`,
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                }`}
              >
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-md font-medium text-gray-900">
                  {item.value?.includes(null) || item?.value == null
                    ? "N/A"
                    : item?.value}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCard;
