import React from "react";
import { Card, CardContent } from "@/common/components/ui/card";
import { Avatar } from "@/common/components/ui/avatar";
import { Label } from "@/common/components/ui/label";
import { useGetuserByIdQuery } from "../../features/auth/api/userApi";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const { data } = useGetuserByIdQuery(id);
  const user = data?.data;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User Profile
      </h2>

      <Card className="shadow-lg rounded-xl overflow-hidden">
        <CardContent className="p-8 space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-6">
            <img
              className="w-24 h-24 rounded-full shadow-md border"
              src={user?.profilePicture}
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {user?.name}
              </h3>
              <p className="text-gray-600">{user?.email}</p>
              <p className="text-gray-700 font-medium">Role: {user?.role}</p>
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Phone", value: user?.phone },
              { label: "Address", value: user?.address },
              { label: "Adhaar Number", value: user?.adhaarNumber },
              { label: "PAN Number", value: user?.panNo },
            ].map((item, index) => (
              <div key={index}>
                <Label className="font-semibold text-gray-800">
                  {item.label}:
                </Label>
                <p className="text-gray-700">{item.value || "N/A"}</p>
              </div>
            ))}
          </div>

          {/* Documents Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Documents
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Adhaar Front", src: user?.adhaarFront },
                { label: "Adhaar Back", src: user?.adhaarBack },
                { label: "PAN Card", src: user?.panFront },
              ].map((doc, index) => (
                <div key={index} className="text-center">
                  <Label className="font-semibold text-gray-800">
                    {doc.label}
                  </Label>
                  <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
                    {doc.src ? (
                      <img
                        src={doc.src}
                        alt={doc.label}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <p className="text-gray-500">No Image</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
