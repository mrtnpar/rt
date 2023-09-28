import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

export const Modal = ({
  children,
  open,
  handleClose = () => {},
}: PropsWithChildren<ModalProps>) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) {
      dialogRef?.current?.close();
      return;
    }
    dialogRef?.current?.showModal();
  }, [open]);

  useEffect(() => {
    const current = dialogRef?.current;
    const handler = () => {
      handleClose();
      current?.close();
    };

    current?.addEventListener("cancel", handler);

    return () => {
      current?.removeEventListener("cancel", handler);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.dialog
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: open ? 1 : 0,
          y: open ? 0 : 50,
        }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        ref={dialogRef}
        className="rounded-lg shadow-sm shadow-pill-shadow w-5/6 max-w-2xl"
      >
        {children}
      </motion.dialog>
    </AnimatePresence>
  );
};
