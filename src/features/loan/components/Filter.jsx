import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/common/components/ui/dialog";
import { useFormik } from "formik";
import { Button } from "@/common/components/ui/button";
import Dropdown from "@/common/components/core/Dropdown";
import { useGetClients } from "../../client/hooks/useGetClients";
import { setFilter } from "../slice/loanSlice";
import { useDispatch, useSelector } from "react-redux";

function Filter({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state?.loans?.filter);

  const clients = useGetClients();

  const { values, errors, touched, handleBlur, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        client: "",
      },
      onSubmit: (values) => {
        try {
          const filter = {};
          if (values.client) filter.client = values.client;
          dispatch(setFilter(filter));
          onClose();
        } catch (error) {
          console.error("Filter failed:", error);
        }
      },
    });

  const resetFilter = () => {
    dispatch(setFilter({}));
  };

  useEffect(() => {
    setFieldValue("client", filter?.client);
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
