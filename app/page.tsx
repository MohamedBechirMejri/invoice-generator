"use client";

// TODO: allow user to tweak positions

import {
  Fira_Code,
  Puppies_Play,
  Love_Ya_Like_A_Sister,
} from "next/font/google";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import Input from "~/app/_ui/Input";

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
  const [number, setNumber] = useState(123);
  const [date, setDate] = useState("September 1, 2021");
  const [logo, setLogo] = useState(
    "https://avatars.githubusercontent.com/u/76930306?v=4"
  );
  const [website, setWebsite] = useState("www.content.com");
  const [phone, setPhone] = useState("(123) 456-7890");
  const [address, setAddress] = useState("500 Main Street, Brooklyn, NY 11211");
  const [cname, setCName] = useState("Mr. Client");
  const [cphone, setCPhone] = useState("(123) 456-7890");
  const [cemail, setcEmail] = useState("email@example.com");
  const [caddress, setCAddress] = useState(
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
    <div className="grid grid-cols-[auto,1fr] gap-4">
      <div
        className="grid grid-cols-[7rem,35rem] h-max border w-max"
        style={firaCode.style}
      >
        <header className="relative bg-gradient-to-tl from-green-200 to-blue-200 grid grid-rows-2 grid-cols-1 place-items-center w-[7rem]">
          <div className="min-w-max -rotate-90 font-semibold text-base text-right">
            <p>NO. {number}</p>
            <p>Issued on {date}</p>
          </div>
          <div className="min-w-max -rotate-90 font-[400] text-base uppercase">
            <p>
              {website} • {phone}
            </p>
            <p>{address}</p>
          </div>
        </header>
        <main className="flex flex-col justify-between min-h-screen p-8 bg-[#fffffe]">
          {/* Header Section */}
          <section className="grid grid-cols-[1fr,auto,1fr] gap-8">
            {/* keep this div */}
            <div></div>
            <h1
              className="text-7xl font-bold mt-8"
              style={loveYaLikeASister.style}
            >
              Invoice
            </h1>

            <div className="text-center text-xs bg-gradient-to-tl from-green-200 to-blue-200 rounded-full w-24 h-24 flex items-center overflow-hidden">
              {logo ? (
                <Image
                  src={logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                  width={96}
                  height={96}
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
              {cname}
            </p>
            <p>{cphone}</p>
            <p>{cemail}</p>
            <p>{caddress}</p>
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
            {accountName && <p>{accountName}</p>}
            {bank && <p>{bank}</p>}
            {accountNumber && <p>Account Number: {accountNumber}</p>}
            {routingNumber && <p>Routing Number: {routingNumber}</p>}
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

      <div className="grid grid-cols-3 gap-4 w-max h-[80svh] my-auto border shadow p-4 rounded place-items-center">
        {/* Number Input */}
        <Input
          label="Number"
          value={number.toString()}
          onChange={e => setNumber(+e.target.value)}
          placeholder="Number"
          type="number"
        />
        {/* Date Input */}
        <Input
          label="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
          placeholder="Issue Date"
          type="date"
        />

        {/* Logo URL Input */}
        <Input
          label="Logo URL"
          value={logo}
          onChange={e => setLogo(e.target.value)}
          placeholder="https://example.com/logo.png"
        />

        {/* Website Input */}
        <Input
          label="Website"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          placeholder="Your Website"
        />

        {/* Phone Input */}
        <Input
          label="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Phone Number"
        />

        {/* Address Input */}
        <Input
          label="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="Your Address"
        />

        {/* Client Name Input */}
        <Input
          label="Client Name"
          value={cname}
          onChange={e => setCName(e.target.value)}
          placeholder="Client Name"
        />

        {/* Client Phone Input */}
        <Input
          label="Client Phone"
          value={cphone}
          onChange={e => setCPhone(e.target.value)}
          placeholder="Client Phone Number"
        />

        {/* Client Email Input */}
        <Input
          label="Client Email"
          value={cemail}
          onChange={e => setcEmail(e.target.value)}
          placeholder="Client Email"
        />

        {/* Client Address Input */}
        <Input
          label="Client Address"
          value={caddress}
          onChange={e => setCAddress(e.target.value)}
          placeholder="Client Address"
        />

        {/* Items List Input */}
        {/* This input requires a bit more complex handling due to the nature of the items being an array */}
        {/* You might want to add functionalities to add/remove/edit items in the list */}
        {/* For simplicity, a basic input field is provided here */}
        <Input
          label="Items (JSON Format)"
          value={JSON.stringify(items)}
          onChange={e => setItems(JSON.parse(e.target.value))}
          placeholder='[{"item": "Service/Product", "price": "Price"}]'
        />

        {/* Total Amount Input */}
        <Input
          label="Total Amount"
          value={total}
          onChange={e => setTotal(e.target.value)}
          placeholder="Total Amount"
        />

        {/* Bank Name Input */}
        <Input
          label="Bank Name"
          value={bank}
          onChange={e => setBank(e.target.value)}
          placeholder="Bank Name"
        />

        {/* Account Name Input */}
        <Input
          label="Account Name"
          value={accountName}
          onChange={e => setAccountName(e.target.value)}
          placeholder="Account Holder's Name"
        />

        {/* Account Number Input */}
        <Input
          label="Account Number"
          value={accountNumber}
          onChange={e => setAccountNumber(e.target.value)}
          placeholder="Account Number"
        />

        {/* Routing Number Input */}
        <Input
          label="Routing Number"
          value={routingNumber}
          onChange={e => setRoutingNumber(e.target.value)}
          placeholder="Routing Number"
        />

        {/* Due Date Input */}
        <Input
          label="Due Date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          placeholder="Due Date"
          type="date"
        />
      </div>
    </div>
  );
}
