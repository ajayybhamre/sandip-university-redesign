import { motion } from "framer-motion";
import { HiOutlineBuildingOffice2, HiOutlineCheckCircle, HiOutlineBeaker } from "react-icons/hi2";

const centreOfExcellencePartners = [
  "Giggle Galaxy Private Limited (ImaginXP), Pune",
  "Xebia IT Architects India Private Limited, New Delhi",
  "ESDS Software Solution, Nashik",
  "Center for Development of Advanced Computing (C-DAC), Pune",
  "CITIS Educon Private Limited, Pune",
  "IBM",
  "Technokeen",
  "Calibers Infotech",
  "NetLeap IT Training & Solutions",
  "Weeamo Technologies",
  "Konsola Infotech Pvt Ltd",
  "Bharat Soft Solutions, Jalgaon",
];

const cicHighlights = [
  "Research Labs equipped with modern equipment and power connections",
  "Optimal Space in the campus dedicated exclusively to research",
  "Collaborative atmosphere in PHD, Masters and Undergraduate Research",
];

const equipmentList = [
  "Spray Dryer",
  "Differential Scanning Calorimeter (DSC)",
  "Freeze Dryer (Lyophilizer)",
  "Particle Size Analyzer and Zeta Potential",
  "Max-XP Ultracentrifuge",
  "Powder Flow Tester",
  "Rotary Evaporator With Vacuum and Chiller",
  "Digital Plethysmograph",
  "Auto Analyzer",
  "RT PCR Equipment with Accessories",
  "Catalyst Microwave",
  "Ultrasonic Probe",
  "CHNS(O) Analyzer",
  "Vicker's Micro-Hardness Tester",
  "Wire Cut Electro-Discharge Machine",
  "Micro Plasma Arc Welding Machine",
  "Gas Sensing Unit",
  "Robotic Arm MIG Welding System",
  "Surface Roughness Tester",
  "Impact Testing Machine",
  "Micro Hardness Tester",
  "Metallurgical Microscope with Reflected, Transmitted Light, CMOS Camera",
  "Metallographic Optical Microscope",
  "Gel Documentation System",
  "Gas Chromatography",
  "UV Visible Spectrophotometer",
  "HPLC",
  "FTIR",
  "Dissolution Apparatus",
];

const InfrastructureTab = () => (
  <div className="space-y-14">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        Centre of Excellence — Industry Partners
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          centreOfExcellencePartners.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5"
            >
              <HiOutlineBuildingOffice2 className="text-red-600 w-5 h-5 shrink-0" />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{partner}</span>
            </div>
          ))
        }
      </div>
    </motion.div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Central Instrumentation Center (CIC)
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
        University Centre for Research and development has researchers
        working in various thrust areas using sophisticated research
        facilities located inside the campus.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {
          cicHighlights.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5">
              <HiOutlineCheckCircle className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700 dark:text-gray-300 leading-6">{item}</span>
            </div>
          ))
        }
      </div>

      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-5">
        Equipment
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {
          equipmentList.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: (index % 12) * 0.03 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3"
            >
              <HiOutlineBeaker className="text-red-600 w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-100 leading-4">{item}</span>
            </motion.div>
          ))
        }
      </div>
    </div>

  </div>
);

export default InfrastructureTab;
