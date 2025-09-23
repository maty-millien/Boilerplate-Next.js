"use client";
import { useEffect } from "react";

export default function FadeInBody() {
  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);
  return null;
}
