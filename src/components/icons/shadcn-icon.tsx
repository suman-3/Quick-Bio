import { cn } from "@/lib/utils"
import * as React from "react"
import { SVGProps } from "react"
const ShadcnIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1024}
    height={1024}
    viewBox="0 0 24 24"
    className={cn("w-full h-full", className)}
  >
    <path
      fill="currentColor"
      d="M22.219 11.784 11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"
    />
  </svg>
)
export default ShadcnIcon
