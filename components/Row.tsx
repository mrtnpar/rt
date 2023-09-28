import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Company } from "@/shared";

const ANIMATION_LENGTH = 500;

interface RowProps {
  data: Company[];
  duration?: number;
  handleOpen: (label: string) => void;
}

export const Row = ({
  data,
  duration = 15,
  handleOpen = (label: string) => {},
}: RowProps) => {
  const [companies, setCompanies] = useState(data);
  const [x, setX] = useState(-ANIMATION_LENGTH);
  const [refEndPixel, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setCompanies((currState) => {
        const newCompanies = Array.from(currState);
        return newCompanies.concat(data);
      });
    }
    //
  }, [data, entry]);

  function handleAnimationComplete() {
    setX((x) => {
      x += -ANIMATION_LENGTH;
      return x;
    });
  }

  return (
    <div className="w-max">
      <motion.div
        className="flex gap-2 flex-wrap"
        animate={{ x }}
        transition={{
          ease: "linear",
          duration,
        }}
        onAnimationComplete={handleAnimationComplete}
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
        <div ref={refEndPixel} className="w-[1px] h-[1px]" />
      </motion.div>
    </div>
  );
};
