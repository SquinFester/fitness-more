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

export const AddWeight = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Update your weight</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update your weight</DialogTitle>
          <DialogDescription>
            <AddWeightForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
