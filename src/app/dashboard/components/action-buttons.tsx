"use client";

import DatePicker from "@/app/dashboard/components/date-picker";
import { Button } from "@/components/ui/button";

export function ActionButtons() {
  return (
    <div className="flex gap-3">
      <DatePicker />
      <Button>Add</Button>
    </div>
  );
}
