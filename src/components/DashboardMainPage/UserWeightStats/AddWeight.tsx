"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { AddWeightForm } from "./AddWeightForm";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export const AddWeight = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="float-right">Update your weight</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update your weight</DialogTitle>
          <DialogDescription asChild>
            <AddWeightForm onSuccess={openHandler} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
