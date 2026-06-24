import { ShieldCheck } from "lucide-react";

export default function VerifyOtpPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-[32px] border border-[#ECE6DB] bg-white p-10 shadow-sm">

        <div className="text-center">

           

          <div className="mt-6 flex justify-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF8EB]">

              <ShieldCheck
                size={32}
                className="text-[#D6A354]"
              />

            </div>

          </div>

          <h1 className="mt-5 text-3xl font-serif">
            Verify OTP
          </h1>

          <p className="mt-3 text-gray-500">
            Enter the verification code sent to your email.
          </p>

        </div>

        <div className="mt-8 flex justify-center gap-3">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <input
              key={item}
              maxLength={1}
              className="h-14 w-14 rounded-xl border border-[#ECE6DB] text-center text-xl outline-none"
            />
          ))}

        </div>

        <button className="mt-8 w-full rounded-xl bg-[#D6A354] py-4 font-medium text-white hover:bg-[#C69649]">
          Verify OTP
        </button>

        <button className="mt-4 w-full text-[#D6A354]">
          Resend Code
        </button>

      </div>

    </div>
  );
}