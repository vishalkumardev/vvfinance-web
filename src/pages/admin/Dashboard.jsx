import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/common/components/ui/card";
import useApi from "../../common/hooks/useApi";
import Loading from "../../common/components/Loading";
import { Staff } from "../../features/dashboard/components/Staff";
import { VehicleCategory } from "../../features/dashboard/components/VehicleCategory";
import { Loan } from "../../features/dashboard/components/Loan";
import { TeleCall } from "../../features/dashboard/components/Telecall";

function Dashboard() {
  const [data, setData] = useState([]);
  const { getApi } = useApi();
  const [loading, setloading] = useState(false);

  const getDashboardData = async () => {
    setloading(true);
    const response = await getApi("dashboard/admin");
    setData(response);
    setloading(false);
  };

  useEffect(() => {
    getDashboardData(); // Call API to get course data
  }, []);

  return (
    <div className="flex space-y-8 flex-col ">
      <Loading isLoading={loading} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Loan
          data={data["loanData"]}
          labelKey="client"
          dataKey="count"
          label="Client Count"
        />

        <TeleCall
          data={data["telecallData"]}
          labelKey="district"
          dataKey="count"
        />

        <Loan
          data={data["searchData"]}
          labelKey="date"
          dataKey="count"
          label="Search Count"
        />

        <Staff
          telecaller={data?.staffData?.[0]?.count ?? 0}
          agent={data?.staffData?.[1]?.count ?? 0}
          officeStaff={data?.staffData?.[2]?.count ?? 0}
        />

        <VehicleCategory
          pv={data?.vehicleData?.[0]?.count ?? 0}
          cv={data?.vehicleData?.[1]?.count ?? 0}
          tw={data?.vehicleData?.[2]?.count ?? 0}
        />
      </div>
    </div>
  );
}

export default Dashboard;
