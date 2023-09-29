import { motion } from "framer-motion";
import Image from "next/image";
import { Company } from "@/shared";

interface RowProps {
  data: Company[];
  duration?: number;
  handleOpen: (label: string) => void;
}

export const Row = ({
  data,
  duration = 20,
  handleOpen = (label: string) => {},
}: RowProps) => {
  const companies = data.concat(data);

  return (
    <div className="w-max">
      <motion.div
        className="flex gap-2 flex-wrap"
        animate={{ x: "-50%" }}
        transition={{
          ease: "linear",
          duration,
          repeat: Infinity,
        }}
      >
        {companies.map((company, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleOpen(company.id);
              }}
              className={`
                px-4 pl-3 py-2
                rounded-lg
                whitespace-nowrap
                text-base text-pill
                bg-white
                shadow-sm
                shadow-pill-shadow
                flex
                gap-2
              `}
            >
              <Image
                src={`/${company.icon}`}
                alt={company.label}
                width={24}
                height={24}
              />
              {company.label}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};
