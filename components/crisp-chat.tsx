"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a872b5df-c3cf-4f81-91f6-9eb83e8caef1");
  }, []);

  return null;
};
