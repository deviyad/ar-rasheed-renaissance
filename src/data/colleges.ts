import medicine from "@/assets/college-medicine.jpg";
import dentistry from "@/assets/college-dentistry.jpg";
import engineering from "@/assets/college-engineering.jpg";
import business from "@/assets/college-business.jpg";
import type { College } from "./types";

export const colleges: College[] = [
  {
    slug: "medicine",
    name: { ar: "كلية الطب والعلوم الصحية", en: "College of Medicine & Health Sciences" },
    short: {
      ar: "تعليم طبي وصحي يوازن بين الأساس العلمي والتدريب السريري.",
      en: "Medical and health education balancing scientific grounding with clinical training.",
    },
    overview: {
      ar: "تضم الكلية برامج في المجالات الطبية والصحية، وتعتمد على التدريب العملي في المختبرات والمنشآت الصحية. المحتوى التفصيلي قابل للتحرير من قِبل إدارة الكلية.",
      en: "The college offers programs across medical and health fields with practical training in laboratories and health facilities. Detailed content is editable by the college administration.",
    },
    image: medicine,
    imageAlt: {
      ar: "طلبة في معطف أبيض أثناء التدريب في مختبر طبي حديث",
      en: "Students in white coats training in a modern medical laboratory",
    },
    field: "medical",
    facilities: {
      ar: ["مختبرات المهارات السريرية", "مختبرات العلوم الأساسية", "قاعات محاكاة"],
      en: ["Clinical skills labs", "Basic science labs", "Simulation rooms"],
    },
    programSlugs: ["medical-laboratories", "nursing", "pharmacy"],
  },
  {
    slug: "dentistry",
    name: { ar: "كلية طب الأسنان", en: "College of Dentistry" },
    short: {
      ar: "تدريب سريري على وحدات أسنان حديثة ضمن بيئة تعليمية منظمة.",
      en: "Clinical training on modern dental units within a structured learning environment.",
    },
    overview: {
      ar: "تركّز الكلية على الجمع بين المعرفة النظرية والتطبيق السريري في عيادات تعليمية مجهزة. المحتوى التفصيلي قابل للتحرير.",
      en: "The college combines theoretical knowledge with clinical practice in equipped teaching clinics. Detailed content is editable.",
    },
    image: dentistry,
    imageAlt: {
      ar: "عيادة أسنان تعليمية حديثة يتدرب فيها الطلبة",
      en: "A modern dental teaching clinic where students train",
    },
    field: "medical",
    facilities: {
      ar: ["عيادات تعليمية", "مختبر تعويضات", "وحدات تصوير"],
      en: ["Teaching clinics", "Prosthodontics lab", "Imaging units"],
    },
    programSlugs: ["dentistry-bds"],
  },
  {
    slug: "engineering",
    name: { ar: "كلية الهندسة والتكنولوجيا", en: "College of Engineering & Technology" },
    short: {
      ar: "برامج هندسية وتقنية تربط الفكرة بالتطبيق داخل مختبرات متخصصة.",
      en: "Engineering and technology programs linking ideas to application in specialised labs.",
    },
    overview: {
      ar: "تقدّم الكلية برامج في الهندسة وتقنية المعلومات مع تركيز على المشاريع التطبيقية والابتكار الطلابي. المحتوى التفصيلي قابل للتحرير.",
      en: "The college offers engineering and IT programs with a focus on applied projects and student innovation. Detailed content is editable.",
    },
    image: engineering,
    imageAlt: {
      ar: "طلبة هندسة يعملون على دوائر إلكترونية في مختبر تقني",
      en: "Engineering students working on electronic circuits in a technology lab",
    },
    field: "engineering",
    facilities: {
      ar: ["مختبرات الحاسوب", "مختبر الإلكترونيات", "مساحة المشاريع"],
      en: ["Computer labs", "Electronics lab", "Project workshop"],
    },
    programSlugs: ["computer-science", "information-technology", "medical-engineering"],
  },
  {
    slug: "business",
    name: { ar: "كلية المال والأعمال", en: "College of Finance & Business" },
    short: {
      ar: "إدارة ومالية ومحاسبة بمنهج تطبيقي يواكب سوق العمل.",
      en: "Management, finance and accounting with an applied, market-oriented approach.",
    },
    overview: {
      ar: "تُعنى الكلية بإعداد كوادر إدارية ومالية عبر برامج تجمع بين التحليل والتطبيق العملي. المحتوى التفصيلي قابل للتحرير.",
      en: "The college prepares management and finance professionals through programs blending analysis with practice. Detailed content is editable.",
    },
    image: business,
    imageAlt: {
      ar: "طلبة إدارة أعمال في قاعة نقاش زجاجية حديثة",
      en: "Business students in a modern glass-walled seminar room",
    },
    field: "business",
    facilities: {
      ar: ["قاعات حالات دراسية", "مختبر تحليل بيانات", "مركز ريادة الأعمال"],
      en: ["Case-study rooms", "Data analysis lab", "Entrepreneurship centre"],
    },
    programSlugs: ["business-administration", "accounting", "finance-banking"],
  },
];

export const getCollege = (slug: string) => colleges.find((c) => c.slug === slug);
