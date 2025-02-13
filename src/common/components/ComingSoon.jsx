import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/common/components/ui/card"; // Assuming you have shadcn UI components
import { Button } from "@/common/components/ui/button";
import { Hourglass, Info } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="container mx-auto p-6 h-full">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">
            New Feature Coming Soon!
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <Hourglass className="h-16 w-16 text-yellow-500" />
          <p className="mt-4 text-lg text-gray-700">
            We're working hard on something amazing. Stay tuned for updates!
          </p>
          <div className="mt-6">
            <Button variant="outline" className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoon;
