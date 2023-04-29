import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <section>
      <div className="paddings flexCenter gap-4 !justify-around">
        <Image src="/prologis.png" alt="company" width={144} height={144} />
        <Image src="/tower.png" alt="company" width={144} height={144} />
        <Image src="/equinix.png" alt="company" width={144} height={144} />
        <Image src="/realty.png" alt="company" width={144} height={144} />
      </div>
    </section>
  );
};

export default Companies;
