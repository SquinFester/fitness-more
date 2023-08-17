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
  const openHandler = () => setOpen((prev) => !prev);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Update your weight</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update your weight</DialogTitle>
          <DialogDescription asChild>
            <AddWeightForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
