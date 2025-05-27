"use client";

import { AlertTriangle, CheckCircle2, InfoIcon, XCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast as sonnerToast, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <>
      <style jsx global>{`
        [data-sonner-toast] {
          background-color: var(--popover) !important;
          color: var(--popover-foreground) !important;
          border-width: 1.6px !important;
        }

        [data-sonner-toast] [data-icon] {
          margin-right: 12px !important;
        }

        [data-sonner-toast][data-type="success"] {
          border-color: color-mix(
            in srgb,
            var(--success),
            transparent 66%
          ) !important;
        }
        [data-sonner-toast][data-type="success"] [data-icon] {
          color: var(--success) !important;
        }

        [data-sonner-toast][data-type="error"] {
          border-color: color-mix(
            in srgb,
            var(--destructive),
            transparent 66%
          ) !important;
        }
        [data-sonner-toast][data-type="error"] [data-icon] {
          color: var(--destructive) !important;
        }

        [data-sonner-toast][data-type="warning"] {
          border-color: color-mix(
            in srgb,
            var(--warning),
            transparent 66%
          ) !important;
        }
        [data-sonner-toast][data-type="warning"] [data-icon] {
          color: var(--warning) !important;
        }

        [data-sonner-toast][data-type="info"] {
          border-color: color-mix(
            in srgb,
            var(--info),
            transparent 66%
          ) !important;
        }
        [data-sonner-toast][data-type="info"] [data-icon] {
          color: var(--info) !important;
        }

        [data-sonner-toast] [data-description] {
          color: var(--muted-foreground) !important;
        }

        [data-sonner-toast] [data-button] {
          background-color: var(--accent) !important;
          color: var(--accent-foreground) !important;
        }
      `}</style>
      <Sonner
        theme={theme as ToasterProps["theme"]}
        className="toaster group"
        icons={{
          success: <CheckCircle2 strokeWidth={1.4} />,
          error: <XCircle strokeWidth={1.4} />,
          warning: <AlertTriangle strokeWidth={1.4} />,
          info: <InfoIcon strokeWidth={1.4} />,
        }}
        {...props}
      />
    </>
  );
};

// Custom toast function with Lucide icons
type ToastOptions = Parameters<typeof sonnerToast.success>[1];

const toast = Object.assign({}, sonnerToast, {
  custom: sonnerToast.custom,
  dismiss: sonnerToast.dismiss,
  success: (message: string | React.ReactNode, options?: ToastOptions) =>
    sonnerToast.success(message, options),
  error: (message: string | React.ReactNode, options?: ToastOptions) =>
    sonnerToast.error(message, options),
  warning: (message: string | React.ReactNode, options?: ToastOptions) =>
    sonnerToast.warning(message, options),
  info: (message: string | React.ReactNode, options?: ToastOptions) =>
    sonnerToast.info(message, options),
});

export { toast, Toaster };
