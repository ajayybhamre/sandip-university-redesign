import { useState } from "react";
import { Copy, Check, Landmark, ShieldCheck } from "lucide-react";
import SpotlightCard from "../Animated/SpotlightCard";
import TiltCard from "../Animated/TiltCard";
import "./WireTransferDetails.css";

const bankDetails = [
  { label: "Bank Name", value: "ICICI Bank Ltd." },
  { label: "Account Name", value: "Sandip University - International Admissions" },
  { label: "Account Number", value: "002705012548" },
  { label: "IFSC Code", value: "ICIC0000027" },
  { label: "SWIFT Code", value: "ICICINBBXXX" },
  { label: "Branch", value: "Nashik Main Branch, Maharashtra, India" },
  { label: "Country", value: "India" },
];

export default function WireTransferDetails() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="wire-transfer-details" className="py-20 bg-[#FAF8F5] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            OFFICIAL BANKING CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            International Wire Transfer (<span className="text-[#C8102E]">SWIFT</span>)
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Use the exact banking credentials below to initiate your telegraphic wire transfer from your foreign bank.
          </p>
        </div>

        {/* Structured Bank Card UI with SpotlightCard */}
        <TiltCard>
          <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            
            {/* Card Title Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#C8102E] text-white flex items-center justify-center shadow-lg">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Sandip University Official Bank Account</h3>
                  <p className="text-xs text-slate-400 font-medium">For International Student Tuition & Admission Fee Remittance</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold self-start sm:self-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Bank Account</span>
              </div>
            </div>

            {/* Bank Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bankDetails.map((item, idx) => {
                const isCopied = copiedField === item.label;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between gap-3 group hover:border-[#C8102E] transition-colors"
                  >
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm font-black text-white font-mono">
                        {item.value}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-[#C8102E] hover:bg-[#C8102E] transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                      title="Copy value"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="hidden sm:inline text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

          </SpotlightCard>
        </TiltCard>

      </div>
    </section>
  );
}
