"use client";

import React from "react";
import Confusion from "@/components/shared/Confusion";
import { confusionData } from "@/data/about";

export default function ConfusionSection() {
  return <Confusion confusionData={confusionData} />;
}
