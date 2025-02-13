import React from "react";
import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/common/components/ui/card";
import { Button } from "@/common/components/ui/button";
import { useNavigate } from "react-router-dom";
import Thumbnail from "./Thumbnail";
import { useSelector } from "react-redux";
import { ROLES } from "../../data/role";

function PreviewCard({ data, to, enroll, enrolled, isLoading, id }) {
  const navigate = useNavigate();
  const { role } = useSelector((state) => state.auth);

  return (
    <Card>
      {/* Card Body (Video Preview and Course Description) */}
      <CardContent className="mt-5">
        {/* Video Preview */}

        <div className="relative pb-9/16 overflow-hidden rounded-lg">
          <Thumbnail url={data?.thumbnail} />
        </div>

        <CardTitle className="text-lg font-semibold mt-4">
          {data?.name}
        </CardTitle>

        {/* Course Description */}
        <p className="mt-4  text-sm">{data?.description}</p>
      </CardContent>

      {role != ROLES.ADMIN && role != ROLES.INSTRUCTOR && (
        <CardFooter>
          <Button
            loading={isLoading}
            className="w-full"
            onClick={() => (enrolled ? navigate(to) : enroll(id))}
          >
            {enrolled ? "View" : "Enroll Now !"}
          </Button>
        </CardFooter>
      )}

      {/* Card Footer (Enroll Button) */}
    </Card>
  );
}

export default PreviewCard;
