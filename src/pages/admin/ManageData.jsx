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
import Dropdown from "@/common/components/core/Dropdown";
import { useGetClients } from "../../features/client/hooks/useGetClients";
import { useFormik } from "formik";

const ManageData = () => {
  const [deleteAllData, { isLoading }] = useDeleteAllDataMutation();
  const [deleteAllTelecallData, { isLoading: telecallLoading }] =
    useDeleteAllTelecallDataMutation();

  const clients = useGetClients();

  const formik = useFormik({
    initialValues: { client: "" },
  });

  const handleDelete = async (type) => {
    if (!formik.values.client) {
      alert("Please select a client before deleting data.");
      return;
    }

    const confirmation = window.confirm(
      `Are you sure you want to delete all ${type} data for ${formik.values.client} ? This action cannot be undone!`
    );

    if (!confirmation) return;

    try {
      if (type === "loan") {
        await deleteAllData({ client: formik.values.client });
      } else if (type === "telecall") {
        await deleteAllTelecallData({ client: formik.values.client });
      }
    } catch (error) {
      console.error(`Failed to delete ${type} data:`, error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="rounded-3xl p-10 w-96">
        <CardContent>
          <CardTitle className="text-xl font-bold mb-6">Manage Data</CardTitle>
          <CardDescription className="text-gray-500 mb-6">
            Warning! Deleting data is permanent and cannot be undone.
          </CardDescription>

          <Dropdown
            name="client"
            id="client"
            label="Select Client"
            placeholder="Choose a client"
            value={formik.values.client}
            onChange={(e) => formik.setFieldValue("client", e)}
            onBlur={formik.handleBlur}
            options={clients}
          />

          <Button
            onClick={() => handleDelete("loan")}
            disabled={isLoading}
            loading={isLoading}
            className="w-full bg-red-500 mt-5 hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition duration-300 mb-4 shadow-lg disabled:opacity-50"
          >
            {isLoading ? "Deleting Loan Data..." : "Delete Loan Data"}
          </Button>

          <Button
            onClick={() => handleDelete("telecall")}
            disabled={telecallLoading}
            loading={telecallLoading}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg disabled:opacity-50"
          >
            {telecallLoading
              ? "Deleting Telecall Data..."
              : "Delete Telecall Data"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageData;
