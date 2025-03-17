import React from "react";
import { useDeleteAllDataMutation } from "../../features/loan/api/loanApi";
import { useDeleteAllTelecallDataMutation } from "../../features/telecall/api/teleCallApi";
import { Button } from "../../common/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../common/components/ui/card";

const ManageData = () => {
  const [deleteAllData, { isLoading }] = useDeleteAllDataMutation();
  const [deleteAllTelecallData, { isLoading: telecallLoading }] =
    useDeleteAllTelecallDataMutation();

  const handleLoanDelete = async (type) => {
    if (!window.confirm(`Are you sure you want to delete all loan data?`)) {
      return;
    }
    try {
      await deleteAllData();
    } catch (error) {}
  };

  const handleTeleCallDelete = async (type) => {
    if (!window.confirm(`Are you sure you want to delete all telecall data?`)) {
      return;
    }
    try {
      await deleteAllTelecallData();
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card className=" rounded-3xl p-10 w-96 text-center">
        <CardContent>
          <CardTitle className="text-xl font-bold  mb-6">Manage Data</CardTitle>
          <CardDescription className="text-gray-500 mb-6">
            Warning! Deleting data is permanent and cannot be undone.
          </CardDescription>

          <Button
            onClick={handleLoanDelete}
            disabled={isLoading}
            loading={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition duration-300 mb-4 shadow-lg disabled:opacity-50"
          >
            {isLoading ? "Deleting..." : "Delete All Loan Data"}
          </Button>

          <Button
            onClick={handleTeleCallDelete}
            disabled={telecallLoading}
            loading={telecallLoading}
            className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg disabled:opacity-50"
          >
            {telecallLoading ? "Deleting..." : "Delete All Telecaller Data"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageData;
