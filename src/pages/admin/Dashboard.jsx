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
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          Object.keys(data)?.map((value, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <h2 className="text-lg font-semibold">Total {value}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">{data[value]}</p>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Dashboard;
