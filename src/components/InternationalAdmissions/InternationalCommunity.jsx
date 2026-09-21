import { motion } from "framer-motion";
import { Globe, Heart, Shield, Users, CheckCircle2 } from "lucide-react";
import communityImg from "../../assets/images/intl_forum.webp";
import "./InternationalCommunity.css";

export default function InternationalCommunity() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-950">
              <img
                src={communityImg}
                alt="International Student Community Forum"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Global Scholars Desk</div>
                <div className="text-xs text-slate-400">24/7 International Cell Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
              Cross-Cultural Belonging
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Community <br />
              <span className="text-orange-400">Without Borders.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Sandip University welcomes students from Nepal, Bhutan, Bangladesh, Sri Lanka, African nations, Middle Eastern countries, and beyond. We cultivate an inclusive, safe, and vibrant atmosphere where diversity is celebrated every single day.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Shield className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Full Security & Safety Protocols</h4>
                  <p className="text-xs text-slate-400">24/7 campus security, dedicated International Hostels, and medical assistance.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Heart className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Cultural & Festival Celebrations</h4>
                  <p className="text-xs text-slate-400">International Food Festivals, National Day Galas, and cultural exchange nights.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <Users className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Buddy System & Mentorship</h4>
                  <p className="text-xs text-slate-400">Pairing international arrivals with senior student ambassadors for seamless settling.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
