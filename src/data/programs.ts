import type { Program } from "./types";

const bachelor = { ar: "بكالوريوس", en: "Bachelor" };

const genericObjectives = {
  ar: [
    "بناء أساس علمي متين في التخصص",
    "تنمية المهارات التطبيقية من خلال التدريب العملي",
    "تطوير مهارات التواصل والعمل الجماعي",
  ],
  en: [
    "Build a solid scientific foundation in the discipline",
    "Develop applied skills through practical training",
    "Strengthen communication and teamwork skills",
  ],
};

const genericRequirements = {
  ar: [
    "شهادة الثانوية العامة أو ما يعادلها",
    "استيفاء شروط القبول المعلنة من إدارة القبول",
    "استكمال المستندات المطلوبة",
  ],
  en: [
    "High school certificate or equivalent",
    "Meeting the admission criteria published by the admissions office",
    "Submission of the required documents",
  ],
};

const genericStructure = {
  ar: ["متطلبات الجامعة", "متطلبات الكلية", "متطلبات التخصص", "تدريب عملي / مشروع تخرج"],
  en: [
    "University requirements",
    "College requirements",
    "Major requirements",
    "Practical training / graduation project",
  ],
};

function program(
  slug: string,
  name: { ar: string; en: string },
  collegeSlug: string,
  field: Program["field"],
  summary: { ar: string; en: string },
  careers: { ar: string[]; en: string[] },
): Program {
  return {
    slug,
    name,
    collegeSlug,
    field,
    degree: bachelor,
    summary,
    objectives: genericObjectives,
    careers,
    structure: genericStructure,
    requirements: genericRequirements,
  };
}

export const programs: Program[] = [
  program(
    "medical-laboratories",
    { ar: "المختبرات الطبية", en: "Medical Laboratories" },
    "medicine",
    "medical",
    {
      ar: "برنامج يركّز على التحاليل المخبرية وتقنيات التشخيص المعملي.",
      en: "A program focused on laboratory analysis and diagnostic techniques.",
    },
    {
      ar: ["مختبرات المستشفيات", "مراكز التشخيص", "مختبرات البحث"],
      en: ["Hospital laboratories", "Diagnostic centres", "Research labs"],
    },
  ),
  program(
    "nursing",
    { ar: "التمريض", en: "Nursing" },
    "medicine",
    "medical",
    {
      ar: "إعداد كوادر تمريضية للرعاية الصحية في المنشآت الطبية.",
      en: "Preparing nursing professionals for care delivery in health facilities.",
    },
    {
      ar: ["المستشفيات", "المراكز الصحية", "رعاية المجتمع"],
      en: ["Hospitals", "Health centres", "Community care"],
    },
  ),
  program(
    "pharmacy",
    { ar: "الصيدلة", en: "Pharmacy" },
    "medicine",
    "medical",
    {
      ar: "دراسة علوم الأدوية وصرفها والرعاية الصيدلانية.",
      en: "The study of pharmaceutical sciences, dispensing and pharmaceutical care.",
    },
    {
      ar: ["الصيدليات", "المستشفيات", "شركات الأدوية"],
      en: ["Pharmacies", "Hospitals", "Pharmaceutical companies"],
    },
  ),
  program(
    "dentistry-bds",
    { ar: "طب وجراحة الفم والأسنان", en: "Dentistry & Oral Surgery" },
    "dentistry",
    "medical",
    {
      ar: "برنامج سريري يجمع بين علوم الأسنان الأساسية والتطبيق العملي.",
      en: "A clinical program combining basic dental sciences with hands-on practice.",
    },
    {
      ar: ["العيادات التخصصية", "المستشفيات", "الممارسة الخاصة"],
      en: ["Specialist clinics", "Hospitals", "Private practice"],
    },
  ),
  program(
    "computer-science",
    { ar: "علوم الحاسوب", en: "Computer Science" },
    "engineering",
    "engineering",
    {
      ar: "أسس البرمجة والخوارزميات وهندسة البرمجيات وتحليل البيانات.",
      en: "Foundations of programming, algorithms, software engineering and data analysis.",
    },
    {
      ar: ["تطوير البرمجيات", "تحليل البيانات", "أنظمة المعلومات"],
      en: ["Software development", "Data analysis", "Information systems"],
    },
  ),
  program(
    "information-technology",
    { ar: "تقنية المعلومات", en: "Information Technology" },
    "engineering",
    "engineering",
    {
      ar: "الشبكات وأمن المعلومات وإدارة الأنظمة والبنية التحتية الرقمية.",
      en: "Networks, information security, systems administration and digital infrastructure.",
    },
    {
      ar: ["إدارة الشبكات", "أمن المعلومات", "الدعم التقني"],
      en: ["Network administration", "Information security", "Technical support"],
    },
  ),
  program(
    "medical-engineering",
    { ar: "الهندسة الطبية", en: "Medical Engineering" },
    "engineering",
    "engineering",
    {
      ar: "تطبيق المبادئ الهندسية على الأجهزة والتقنيات الطبية.",
      en: "Applying engineering principles to medical devices and technologies.",
    },
    {
      ar: ["صيانة الأجهزة الطبية", "المستشفيات", "شركات التجهيزات"],
      en: ["Medical device maintenance", "Hospitals", "Equipment suppliers"],
    },
  ),
  program(
    "business-administration",
    { ar: "إدارة الأعمال", en: "Business Administration" },
    "business",
    "business",
    {
      ar: "الإدارة والتسويق والموارد البشرية والسلوك التنظيمي.",
      en: "Management, marketing, human resources and organisational behaviour.",
    },
    {
      ar: ["الإدارة", "التسويق", "الموارد البشرية"],
      en: ["Management", "Marketing", "Human resources"],
    },
  ),
  program(
    "accounting",
    { ar: "المحاسبة", en: "Accounting" },
    "business",
    "business",
    {
      ar: "المحاسبة المالية والتكاليف والمراجعة والتقارير المالية.",
      en: "Financial and cost accounting, auditing and financial reporting.",
    },
    {
      ar: ["المحاسبة", "المراجعة الداخلية", "الرقابة المالية"],
      en: ["Accounting", "Internal audit", "Financial control"],
    },
  ),
  program(
    "finance-banking",
    { ar: "العلوم المالية والمصرفية", en: "Finance & Banking" },
    "business",
    "business",
    {
      ar: "التمويل والأسواق المالية والعمليات المصرفية وإدارة المخاطر.",
      en: "Finance, financial markets, banking operations and risk management.",
    },
    {
      ar: ["البنوك", "المؤسسات المالية", "التحليل المالي"],
      en: ["Banks", "Financial institutions", "Financial analysis"],
    },
  ),
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
export const programsByCollege = (slug: string) => programs.filter((p) => p.collegeSlug === slug);
