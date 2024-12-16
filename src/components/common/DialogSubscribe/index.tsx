'use client'

import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { useUserStore } from "@/store/userStore";
import Content from "./Content";

const DialogSubscribe = () => {
  const { modal, setModal } = useUserStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setModal]);

  return (
    <>
      {modal && (
        <Dialog open={modal} onOpenChange={(open) => setModal(open)}>
          <DialogTitle>
          </DialogTitle>
          <DialogContent hideClose className="font-body p-0 border-none">
            <Content />
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default DialogSubscribe;