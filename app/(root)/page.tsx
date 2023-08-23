"use client";

import { useEffect, useState } from "react";

import { useStoreModal } from "@/app/hooks/use-store-modal";


export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (

    <div className="p-4">

    </div>)
}
