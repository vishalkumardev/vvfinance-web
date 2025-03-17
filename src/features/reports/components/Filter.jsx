import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/common/components/ui/dialog";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button";
import TextInput from "@/common/components/core/TextInput";
import Dropdown from "@/common/components/core/Dropdown";
import { useAgents } from "../../auth/hooks/useGetAgents";
import { useGetClients } from "../../client/hooks/useGetClients";
import { setFilter } from "../slice/reportSlice";
import { useDispatch, useSelector } from "react-redux";

function Filter({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state?.reports?.filter);

  const agents = useAgents();
  const clients = useGetClients();

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      registration_no: "",
      userId: "",
      client: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: (values) => {
      try {
        const filter = {};
        if (values.registration_no)
          filter.registration_no = values.registration_no;
        if (values.userId) filter.userId = values.userId;
        if (values.client) filter.client = values.client;
        if (values.startDate)
          filter.startDate = new Date(values.startDate)?.toISOString();
        if (values.endDate)
          filter.endDate = new Date(
            new Date(values?.endDate)?.setHours(23, 59, 59, 999)
          ).toISOString();
        dispatch(setFilter(filter));
        onClose();
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });

  const resetFilter = () => {
    dispatch(setFilter({}));
  };

  useEffect(() => {
    setFieldValue("userId", filter?.userId);
    setFieldValue("client", filter?.client);
    setFieldValue("registration_no", filter?.registration_no);
  }, [filter]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply Filters</DialogTitle>
          <DialogDescription>
            Set filters to refine your search.
          </DialogDescription>
        </DialogHeader>
        <TextInput
          name="registration_no"
          label="Registration number"
          placeholder="Enter your registration number"
          value={values.registration_no}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.registration_no}
          touched={touched.registration_no}
        />

        <Dropdown
          name="client"
          id="client"
          label="Client"
          placeholder="Select client"
          value={values.client}
          onChange={(e) => {
            setFieldValue("client", e);
          }}
          onBlur={handleBlur}
          options={clients}
          errors={errors.client}
          touched={touched.client}
        />

        <Dropdown
          name="agent"
          id="userId"
          label="Agents"
          placeholder="Select agent"
          value={values.userId}
          onChange={(e) => {
            setFieldValue("userId", e);
          }}
          onBlur={handleBlur}
          options={agents}
          errors={errors.userId}
          touched={touched.userId}
        />

        <TextInput
          type="date"
          name="startDate"
          label="Start Date"
          value={values.startDate}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.startDate}
          touched={touched.startDate}
        />

        <TextInput
          type="date"
          name="endDate"
          label="End Date"
          value={values.endDate}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.endDate}
          touched={touched.endDate}
        />

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2"
          onClick={handleSubmit}
          //   loading={isLoading}
        >
          Apply Filter
        </Button>
        <Button
          type="submit"
          variant="outline"
          onClick={resetFilter}
          //   loading={isLoading}
        >
          Reset Filter
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Filter;
