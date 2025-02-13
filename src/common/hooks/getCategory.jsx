import { useEffect, useState } from "react";
import useApi from "./useApi";

const getCategory = () => {
  const [categories, setCategories] = useState([]);
  const { postApi } = useApi();
  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await postApi("category/get/all");
        const arr = [];
        response.data.records.forEach((item) => {
          arr.push({
            value: item?.categoryId,
            label: item.name,
          });
        });
        setCategories(arr);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return { categories };
};

export { getCategory };
