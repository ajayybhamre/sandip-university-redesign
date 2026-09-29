import { FileText, ExternalLink, Mail } from "lucide-react";

export default function CommitteeMemberTable({ committee }) {
  if (!committee) return null;

  return (
    <div className="space-y-6 animate-fadeIn transition-opacity duration-300">
      {/* Committee Heading & Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-100 dark:border-stone-800">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-stone-100 tracking-tight">
            {committee.name}
          </h2>
          {/* Subtle Red Accent Line Under Heading */}
          <div className="w-12 h-0.5 bg-[#B32035] dark:bg-red-500 mt-2.5 rounded-full" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {committee.circularUrl && (
            <a
              href={committee.circularUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white dark:bg-stone-900 hover:bg-gray-50 dark:hover:bg-stone-800 text-gray-700 dark:text-stone-300 text-xs font-medium border border-gray-200 dark:border-stone-700 transition-colors duration-200"
            >
              <FileText size={14} className="text-[#B32035] dark:text-red-400" />
              <span>Committee Circulars PDF</span>
            </a>
          )}

          {committee.grievanceFormUrl && (
            <a
              href={committee.grievanceFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#B32035] hover:bg-[#951D30] text-white text-xs font-medium border border-[#B32035] transition-colors duration-200"
            >
              <span>Register Grievance</span>
              <ExternalLink size={13} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Official Email Contact Notice if Available */}
      {committee.email && (
        <div className="py-2.5 px-4 rounded-lg bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 flex items-center gap-2.5 text-xs text-gray-600 dark:text-stone-300">
          <Mail size={15} className="text-[#B32035] dark:text-red-400 flex-shrink-0" />
          <span>
            Official Committee Email:{" "}
            <a href={`mailto:${committee.email}`} className="font-semibold text-gray-900 dark:text-stone-200 hover:text-[#B32035] transition-colors">
              {committee.email}
            </a>
          </span>
        </div>
      )}

      {/* Desktop Member Table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 dark:border-stone-800 bg-white dark:bg-stone-900">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-stone-50 dark:bg-stone-800/60 border-b border-gray-200 dark:border-stone-800 text-gray-600 dark:text-stone-300 text-xs font-semibold uppercase tracking-wider">
              <th className="py-3.5 px-4 sm:px-6 w-16 text-center">Sr. No.</th>
              <th className="py-3.5 px-4 sm:px-6">Member Name</th>
              <th className="py-3.5 px-4 sm:px-6">Designation / Department</th>
              <th className="py-3.5 px-4 sm:px-6 w-44">Position / Role</th>
              <th className="py-3.5 px-4 sm:px-6">Contact & Email</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-stone-800 text-xs sm:text-sm text-gray-700 dark:text-stone-300">
            {committee.members.map((mem, idx) => {
              const isLead =
                mem.position.toLowerCase().includes("chair") ||
                mem.position.toLowerCase().includes("presiding") ||
                mem.position.toLowerCase().includes("leader") ||
                mem.position.toLowerCase().includes("coordinator");

              return (
                <tr
                  key={mem.srNo || idx}
                  className="hover:bg-gray-50/60 dark:hover:bg-stone-800/40 transition-colors duration-150"
                >
                  <td className="py-4 px-4 sm:px-6 text-center font-mono text-gray-500 dark:text-stone-400">
                    {mem.srNo}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900 dark:text-stone-100">
                    {mem.name}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-gray-600 dark:text-stone-300 leading-relaxed">
                    {mem.designation}
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium border ${
                        isLead
                          ? "bg-red-50 dark:bg-red-950/40 text-[#B32035] dark:text-red-300 border-[#B32035]/20 dark:border-red-800/40"
                          : "bg-gray-100 dark:bg-stone-800 text-gray-700 dark:text-stone-300 border-gray-200 dark:border-stone-700"
                      }`}
                    >
                      {mem.position}
                    </span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-mono text-xs text-gray-600 dark:text-stone-400">
                    {mem.contact}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Responsive Cards View */}
      <div className="md:hidden space-y-3">
        {committee.members.map((mem, idx) => {
          const isLead =
            mem.position.toLowerCase().includes("chair") ||
            mem.position.toLowerCase().includes("presiding") ||
            mem.position.toLowerCase().includes("leader") ||
            mem.position.toLowerCase().includes("coordinator");

          return (
            <div
              key={mem.srNo || idx}
              className="p-4 rounded-lg border border-gray-200 dark:border-stone-800 bg-white dark:bg-stone-900 space-y-2"
            >
              <div className="flex items-start justify-between gap-2 border-b border-gray-100 dark:border-stone-800 pb-2">
                <div>
                  <span className="text-xs font-mono text-gray-400 mr-1.5">#{mem.srNo}</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-stone-100">
                    {mem.name}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-medium px-2 py-0.5 rounded border whitespace-nowrap ${
                    isLead
                      ? "bg-red-50 text-[#B32035] border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900"
                      : "bg-gray-100 text-gray-700 border-gray-200 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700"
                  }`}
                >
                  {mem.position}
                </span>
              </div>
              <p className="text-xs text-gray-600 dark:text-stone-300">
                {mem.designation}
              </p>
              {mem.contact && (
                <p className="text-xs font-mono text-gray-500 dark:text-stone-400 pt-1 border-t border-dashed border-gray-100 dark:border-stone-800">
                  {mem.contact}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
