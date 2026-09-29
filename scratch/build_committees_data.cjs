const fs = require('fs');
const html = fs.readFileSync('scratch/official_committees.html', 'utf8');

// Parse official categories and member tables
const regexTag = /<[^>]+>/g;

// Let's find each div with id (like sc, mc, gr, icc, oc, sg, wg, bk, nt, sd) or committee section
const committeesList = [
  { id: 'sc', name: 'SC / ST Committee', iconName: 'ShieldCheck', code: 'sc' },
  { id: 'mc', name: 'Minority Cell', iconName: 'Users', code: 'mc' },
  { id: 'gr', name: 'Student Grievance Redressal Committee (SGRC)', iconName: 'FileText', code: 'gr' },
  { id: 'icc', name: 'Internal Complaint Committee (ICC) / Vishakha Committee', iconName: 'Scale', code: 'icc' },
  { id: 'oc', name: 'OBC Cell', iconName: 'Landmark', code: 'oc' },
  { id: 'sg', name: 'Staff Grievance Redressal Committee', iconName: 'UserCheck', code: 'sg' },
  { id: 'wg', name: "Women's Grievance Redressal Committee", iconName: 'HeartHandshake', code: 'wg' },
  { id: 'bk', name: 'Anti-Ragging Committee', iconName: 'ShieldAlert', code: 'bk' },
  { id: 'nt', name: 'Anti-Ragging Squad', iconName: 'Compass', code: 'nt' },
  { id: 'sd', name: 'Socio-Economically Disadvantaged Groups (SEDG) Cell', iconName: 'GraduationCap', code: 'sd' },
];

console.log('Total categories:', committeesList.length);
