import type { Localized, LocalizedList, Person } from "./types";

/**
 * Central university content. Every value here is intended to be replaced by
 * the university's own official data (or wired to a CMS / backend later).
 * Nothing in this file should be presented as a verified fact.
 */
export const university = {
  name: { ar: "جامعة الرشيد الذكية", en: "Ar-Rasheed Smart University" } satisfies Localized,
  shortName: { ar: "الرشيد", en: "Ar-Rasheed" } satisfies Localized,
  tagline: {
    ar: "نصنع المعرفة… ونُمكّن المستقبل",
    en: "We create knowledge… and empower the future",
  } satisfies Localized,
  intro: {
    ar: "بيئة أكاديمية ذكية تجمع بين التميّز العلمي والتقنيات الحديثة والتعلّم التطبيقي، لإعداد خريجين قادرين على خدمة المجتمع وبناء المستقبل.",
    en: "A smart academic environment combining scholarly excellence, modern technology and applied learning to prepare graduates who serve their community and build the future.",
  } satisfies Localized,
  story: {
    ar: "تأسست الجامعة لتقديم تعليم عالٍ نوعي يوازن بين المعرفة النظرية والممارسة العملية، وتوسّعت برامجها لتشمل التخصصات الصحية والهندسية والإدارية ضمن حرم جامعي مجهّز بالتقنيات الحديثة.",
    en: "The university was founded to deliver distinctive higher education balancing theory and practice, expanding into health, engineering and business disciplines within a technology-equipped campus.",
  } satisfies Localized,
  vision: {
    ar: "أن نكون مؤسسة تعليمية رائدة في التعليم الذكي والبحث التطبيقي على المستوى الوطني والإقليمي.",
    en: "To be a leading institution in smart education and applied research nationally and regionally.",
  } satisfies Localized,
  mission: {
    ar: "تقديم برامج أكاديمية معتمدة على معايير الجودة، ودعم البحث العلمي، وتنمية مهارات الطلبة المهنية والرقمية واللغوية بما يخدم احتياجات المجتمع.",
    en: "To deliver quality-driven academic programs, support scientific research, and develop students' professional, digital and language skills in service of community needs.",
  } satisfies Localized,
  values: {
    ar: ["النزاهة الأكاديمية", "التميّز", "الابتكار", "المسؤولية المجتمعية", "العمل بروح الفريق"],
    en: ["Academic integrity", "Excellence", "Innovation", "Community responsibility", "Teamwork"],
  } satisfies LocalizedList,
  objectives: {
    ar: [
      "تطوير المناهج بما يواكب سوق العمل",
      "توسيع البنية التحتية الذكية للحرم الجامعي",
      "تعزيز البحث العلمي والشراكات",
      "رفع كفاءة الكادر الأكاديمي والإداري",
      "تحسين تجربة الطالب وخدماته",
    ],
    en: [
      "Modernize curricula in line with the labour market",
      "Expand the smart campus infrastructure",
      "Strengthen research and partnerships",
      "Develop academic and administrative staff",
      "Improve the student experience and services",
    ],
  } satisfies LocalizedList,
  /**
   * Statistics are intentionally unset (value: null) because no verified
   * figures were available. Set a number to display and animate it.
   */
  stats: [
    { key: "colleges", label: { ar: "الكليات", en: "Colleges" }, value: 4 },
    { key: "programs", label: { ar: "البرامج الأكاديمية", en: "Academic programs" }, value: 12 },
    { key: "faculty", label: { ar: "أعضاء هيئة التدريس", en: "Faculty members" }, value: null },
    { key: "years", label: { ar: "سنوات التميّز", en: "Years of excellence" }, value: null },
  ] as { key: string; label: Localized; value: number | null }[],
  strengths: [
    {
      icon: "building",
      title: { ar: "بنية تحتية حديثة", en: "Modern infrastructure" },
      text: {
        ar: "قاعات ومختبرات مجهّزة تدعم التعلّم التطبيقي والتدريب العملي.",
        en: "Equipped halls and laboratories supporting applied learning and hands-on training.",
      },
    },
    {
      icon: "cpu",
      title: { ar: "تقنيات ذكية", en: "Smart technologies" },
      text: {
        ar: "أنظمة رقمية لإدارة التعلّم وخدمات الطلبة داخل الحرم الجامعي.",
        en: "Digital systems for learning management and on-campus student services.",
      },
    },
    {
      icon: "users",
      title: { ar: "كادر أكاديمي مؤهل", en: "Qualified faculty" },
      text: {
        ar: "هيئة تدريس متخصصة تشرف على المسار الأكاديمي والمهني للطالب.",
        en: "Specialised faculty guiding each student's academic and professional path.",
      },
    },
    {
      icon: "book",
      title: { ar: "مناهج متجددة", en: "Modern curricula" },
      text: {
        ar: "خطط دراسية تُراجع دورياً لمواكبة التطور المعرفي واحتياجات سوق العمل.",
        en: "Study plans reviewed regularly to match knowledge advances and market needs.",
      },
    },
    {
      icon: "flask",
      title: { ar: "بحث وابتكار", en: "Research & innovation" },
      text: {
        ar: "دعم المشاريع البحثية التطبيقية ومبادرات الطلبة الابتكارية.",
        en: "Support for applied research projects and student innovation initiatives.",
      },
    },
    {
      icon: "languages",
      title: { ar: "المهارات اللغوية والرقمية", en: "Language & digital skills" },
      text: {
        ar: "برامج مساندة في اللغة الإنجليزية ومهارات الحاسوب لكل الطلبة.",
        en: "Supporting programs in English language and computer skills for all students.",
      },
    },
  ],
  timeline: [
    {
      year: "—",
      title: { ar: "تأسيس الجامعة", en: "Founding of the university" },
      text: {
        ar: "محتوى قابل للتحرير: يُضاف تاريخ التأسيس الرسمي.",
        en: "Editable content: add the official founding date.",
      },
    },
    {
      year: "—",
      title: { ar: "افتتاح الكليات الصحية", en: "Health colleges opened" },
      text: {
        ar: "محتوى قابل للتحرير: تفاصيل انطلاق البرامج الصحية.",
        en: "Editable content: details of the health programs launch.",
      },
    },
    {
      year: "—",
      title: { ar: "التوسع في الهندسة والأعمال", en: "Engineering & business expansion" },
      text: {
        ar: "محتوى قابل للتحرير: تفاصيل التوسع الأكاديمي.",
        en: "Editable content: details of the academic expansion.",
      },
    },
    {
      year: "—",
      title: { ar: "مبادرة الحرم الذكي", en: "Smart campus initiative" },
      text: {
        ar: "محتوى قابل للتحرير: مراحل التحوّل الرقمي في الجامعة.",
        en: "Editable content: the university's digital transformation stages.",
      },
    },
  ],
  contact: {
    address: {
      ar: "العنوان الرسمي — يُضاف من إدارة الجامعة",
      en: "Official address — to be provided by the university",
    } satisfies Localized,
    phone: "—",
    email: "—",
    hours: {
      ar: "أوقات العمل — تُضاف من إدارة الجامعة",
      en: "Office hours — to be provided by the university",
    } satisfies Localized,
  },
};

export const leadership: Person[] = [
  {
    id: "president",
    name: { ar: "رئيس الجامعة", en: "University President" },
    role: { ar: "رئيس الجامعة", en: "President" },
    message: {
      ar: "نص كلمة رئيس الجامعة — يُضاف من الجهة الرسمية. هذه مساحة مخصصة للكلمة الرسمية دون أي محتوى مُفترض.",
      en: "The president's message — to be supplied officially. This is a reserved slot; no content has been assumed.",
    },
  },
  {
    id: "vp-academic",
    name: { ar: "نائب الرئيس للشؤون الأكاديمية", en: "Vice President for Academic Affairs" },
    role: { ar: "الشؤون الأكاديمية", en: "Academic Affairs" },
  },
  {
    id: "vp-student",
    name: { ar: "عميد شؤون الطلاب", en: "Dean of Student Affairs" },
    role: { ar: "شؤون الطلاب", en: "Student Affairs" },
  },
];
