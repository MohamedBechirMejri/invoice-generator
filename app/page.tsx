"use client";

// TODO: allow user to tweak positions

import {
  Fira_Code,
  Puppies_Play,
  Love_Ya_Like_A_Sister,
} from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const puppiesPlay = Puppies_Play({ weight: "400", subsets: ["latin"] });
const loveYaLikeASister = Love_Ya_Like_A_Sister({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [logo, setLogo] = useState(null);
  const [name, setName] = useState("Mr. Client");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("email@example.com");
  const [address, setAddress] = useState(
    "100 Fifth Avenue, New York, NY 10023"
  );
  const [items, setItems] = useState([
    { item: "1 IGTV Video", price: "$1,000" },
    { item: "3 Instagram Stories", price: "$650" },
    { item: "1 Newsletter Shout Out", price: "$350" },
  ]);
  const [total, setTotal] = useState("$2,000");
  const [bank, setBank] = useState("Best Bank");
  const [accountName, setAccountName] = useState("Content Creator Inc.");
  const [accountNumber, setAccountNumber] = useState("123456789");
  const [routingNumber, setRoutingNumber] = useState("987654321");
  const [dueDate, setDueDate] = useState("OCTOBER 1, 2021");

  return (
    <div
      className="grid grid-cols-[7rem,35rem] h-max border w-max"
      style={firaCode.style}
    >
      <header className="relative bg-gradient-to-tl from-green-200 to-blue-200 grid grid-rows-2 grid-cols-1 place-items-center w-[7rem]">
        <div className="min-w-max -rotate-90 font-semibold text-base text-right">
          <p>NO. 123</p>
          <p>Issued on September 1, 2021</p>
        </div>
        <div className="min-w-max -rotate-90 font-[400] text-base uppercase">
          <p>www.content.com • (123) 456-7890</p>
          <p>500 main street, brooklym, NY 11211</p>
        </div>
      </header>
      <main className="flex flex-col justify-between min-h-screen p-8 bg-[#fffffe]">
        {/* Header Section */}
        <section className="grid grid-cols-[1fr,auto,1fr] gap-8">
          <div></div>
          <h1
            className="text-7xl font-bold mt-8"
            style={loveYaLikeASister.style}
          >
            Invoice
          </h1>

          <div className="text-center text-xs bg-gradient-to-tl from-green-200 to-blue-200 rounded-full w-24 h-24 flex items-center">
            {logo ? (
              <Image
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            ) : (
              <p>Your logo here!</p>
            )}
          </div>
        </section>

        <hr className="bg-gradient-to-tl from-green-200 to-blue-200 h-2 rounded mt-6 mb-4" />

        {/* Billing Section */}
        <section className="my-4 text-xs">
          <h2 className="text-lg font-semibold mb-2">BILLED TO</h2>
          <p className="font-semibold text-3xl uppercase tracking-wider">
            {name}
          </p>
          <p>{phone}</p>
          <p>{email}</p>
          <p>{address}</p>
        </section>

        {/* Description Section */}
        <section className="pt-6">
          <h3 className="text-lg font-bold flex justify-between">
            <span>DESCRIPTION OF ITEM</span> <span>PRICE</span>
          </h3>
          <hr className="bg-gradient-to-tl from-green-200 to-blue-200 h-1 rounded my-2" />
          {items.map(item => (
            <div key={item.item} className="flex justify-between">
              <p>{item.item}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <hr className="bg-gradient-to-tl from-green-200 to-blue-200 h-1 rounded mt-2" />
        </section>

        {/* Total Amount Section */}
        <section className="flex justify-between -mt-4">
          <h2 className="text-lg font-bold">TOTAL AMOUNT DUE</h2>
          <p>{total}</p>
        </section>

        {/* Payment Details Section */}
        <section className="my-6">
          <h2 className="text-lg font-bold">PAYMENT DETAILS</h2>
          <p>{accountName}</p>
          <p>{bank}</p>
          <p>Account Number: {accountNumber}</p>
          <p>Routing Number: {routingNumber}</p>
        </section>

        {/* Footer Section */}
        <footer className="text-center flex items-center justify-between w-full">
          <p className="font-medium">*DUE BY {dueDate}</p>
          <p style={puppiesPlay.style} className="text-7xl">
            Thank you!
          </p>
        </footer>
      </main>
    </div>
  );
}
