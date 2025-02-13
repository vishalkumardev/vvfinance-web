import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/common/components/ui/card";


function InstructorCard({ data }) {
  return (
    <Card className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Card Header (Instructor's Image and Name) */}
      <CardHeader className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={data?.picUrl || "https://via.placeholder.com/150"}
            alt="Instructor"
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
          />
          <div>
            <CardTitle className="text-xl font-semibold ">
              {data?.name || "N/A"}
            </CardTitle>
            <CardDescription className="text-sm ">
              {data?.headLine || "N/A"}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      {/* Card Body (Instructor's Bio) */}
      <CardContent className="px-4">
        <p className=" text-sm">{data?.bio?.slice(0, 200) || "N/A"} ...</p>
      </CardContent>

      {/* Card Footer (Call to Action) */}
      {/* <CardFooter className="p-4">
        <Button className="w-full bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
          View Profile
        </Button>
      </CardFooter> */}
    </Card>
  );
}

export default InstructorCard;
