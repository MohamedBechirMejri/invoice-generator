// TODO: allow user to tweak positions

export default function Home() {
  return (
    <div className="grid grid-cols-[7rem,35rem] h-max border w-max">
      <header className="relative bg-gradient-to-tl from-pink-200 to-blue-200 grid grid-rows-2 grid-cols-1 place-items-center w-[7rem]">
        <div className="min-w-max -rotate-90 font-semibold text-base font-mono">
          <p>NO. 123</p>
          <p>Issued on September 1, 2021</p>
        </div>
        <div className="min-w-max -rotate-90 font-[500] text-base font-mono">
          <p>www.content.com • (123) 456-7890</p>
          <p>500 main street, brooklym, NY 11211</p>
        </div>
      </header>
      <main className="flex flex-col justify-between h-screen p-8 bg-[#fffffe]">
        {/* Header Section */}
        <section className="flex justify-between items-start">
          <h1 className="text-4xl font-bold">Invoice</h1>

          <div className="text-right">
            <p>Your logo here!</p>
            <p>(No logo? Feel free to delete me!)</p>
          </div>
        </section>

        {/* Billing Section */}
        <section className="my-6">
          <h2 className="text-lg font-bold">BILLED TO</h2>
          <p>Mrs. Client</p>
          <p>(123) 456-7890</p>
          <p>client@mail.com</p>
          <p>100 Fifth Avenue, New York, NY 10023</p>
        </section>

        {/* Description Section */}
        <section>
          <h3 className="text-lg font-bold">DESCRIPTION OF ITEM</h3>
          <div className="flex justify-between">
            <p>1 IGTV Video</p>
            <p>$1,000</p>
          </div>
          <div className="flex justify-between">
            <p>3 Instagram Stories</p>
            <p>$650</p>
          </div>
          <div className="flex justify-between">
            <p>1 Newsletter Shout Out</p>
            <p>$350</p>
          </div>
        </section>

        {/* Total Amount Section */}
        <section className="my-6">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">TOTAL AMOUNT DUE</h2>
            <p>$2,000</p>
          </div>
        </section>

        {/* Payment Details Section */}
        <section className="my-6">
          <h2 className="text-lg font-bold">PAYMENT DETAILS</h2>
          <p>Content Creator Inc.</p>
          <p>Best Bank</p>
          <p>Account Number: 123456789</p>
          <p>Routing Number: 987654321</p>
        </section>

        {/* Footer Section */}
        <footer className="text-center">
          <p>*DUE BY OCTOBER 1, 2021</p>
          <p>Thank you!</p>
        </footer>
      </main>
    </div>
  );
}
