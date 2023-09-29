"use client";

import { dataA, dataB, dataC, companies } from "@/data";
import { Row } from "@/components/Row";
import { Container } from "@/components/Container";
import { Modal } from "@/components/Modal";
import { useState } from "react";
import Image from "next/image";
import { Company } from "@/shared";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Company>();

  function openModal(label: string) {
    setModalOpen(true);
    setModalContent(companies[label]);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <main className="grid place-items-center h-full">
      <Container>
        <Row data={dataA} duration={20} handleOpen={openModal} />
        <Row data={dataB} duration={18} handleOpen={openModal} />
        <Row data={dataC} duration={17} handleOpen={openModal} />
        <Row data={dataB} duration={19} handleOpen={openModal} />
        <Row data={dataA} duration={16} handleOpen={openModal} />
      </Container>

      <Modal open={modalOpen} handleClose={closeModal}>
        {modalContent ? (
          <>
            <button
              onClick={closeModal}
              className="absolute right-6 top-6 z-10"
            >
              <Image
                src="/close.svg"
                alt="Close Modal"
                width={12}
                height={12}
              />
            </button>
            <div className="relative p-modal">
              <div className="grid gap-4 grid-flow-col">
                <Image
                  src={`/${modalContent.icon}`}
                  alt={modalContent.label}
                  width={64}
                  height={64}
                />
                <div className="grid gap-4">
                  <h1 className="text-3xl font-bold text-heading">
                    Build internal tools with {modalContent.label}
                  </h1>
                  <p>
                    Connecting Retool to {modalContent.label} takes just a few
                    minutes, and lets you to send texts or make calls
                    programatically from Retool.
                  </p>
                  <p>
                    For example, you could build a tool to send personalized
                    texts to inform users of last minute changes in plans. You
                    could pull your users from a Postgres database, drag on a
                    TextInput to write a personalized text message, and then
                    drag on a Button to actually send the text via{" "}
                    {modalContent.label}.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </Modal>
    </main>
  );
}
