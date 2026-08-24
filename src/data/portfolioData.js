export const portfolioData = {
  personal: {
    name: "Rezky Widi Iskandar",
    nickname: "Rezky",
    role: "Web Development & UI/UX Design",
    shortRole: "Web Development",
    avatar: "/profile.jpg",
    roles: [
      "Web Development",
      "UI/UX Design",
      "Backend Development",
      "React & Next.js Specialist",
      "Mobile App Development"
    ],
    location: "Bogor / Jawa Barat, Indonesia",
    status: "Available for high-impact roles & collaborations",
    statusBadge: "Student at SMK WIKRAMA Bogor",
    email: "rwidiiskandar@gmail.com",
    github: "https://github.com/rezkywdiskandar",
    linkedin: "https://www.linkedin.com/in/rezky-widi-iskandar-011646417",
    instagram: "https://www.instagram.com/rezkywdiskandar/",
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Completed Projects", value: "28+" },
      { label: "Client Satisfaction", value: "99.4%" },
      { label: "Lighthouse Benchmark", value: "98/100" }
    ],
    bio: [
      "Saya adalah seorang software engineer dengan kepekaan estetika desain yang mendalam. Bagi saya, kode yang baik tidak hanya efisien dan kokoh secara arsitektural, tetapi juga mampu menghadirkan interaksi digital yang intuitif, cepat, dan bernilai tinggi.",
      "Spesialisasi saya mencakup arsitektur aplikasi React 19 / Next.js, Design Systems berbasis token, optimasi performa Core Web Vitals, serta integrasi API yang aman dan responsif."
    ],
    manifesto: [
      { text: "I architect", highlight: false },
      { text: "modern frontend systems", highlight: true },
      { text: "with bespoke", highlight: false },
      { text: "editorial aesthetics,", highlight: true },
      { text: "rock-solid", highlight: false },
      { text: "state management,", highlight: true },
      { text: "and", highlight: false },
      { text: "high-performance", highlight: true },
      { text: "Web Vitals — helping teams turn complex digital products into", highlight: false },
      { text: "intuitive, fast, and scalable", highlight: true },
      { text: "user experiences.", highlight: false }
    ]
  },

  skills: [
    "React 19",
    "Next.js",
    "Laravel",
    "Tailwind CSS",
    "Design Systems",
    "PHP",
    "MySQL",
    "HTML",
    "RESTful APIs",
    "Node.js",
    "Python",
    "Core Web Vitals",
    "Accessibility",
    "Framer Motion",
    "JavaScript",
    "Figma"
  ],

  experiences: [
    {
      id: "ipb-micro-tech-education",
      number: "01",
      period: "2026",
      duration: "6-7 Juni",
      type: "Training & Education",
      role: "Web Development Trainee",
      company: "Vokasi IPB University (Micro Tech Education)",
      location: "Bogor, Indonesia",
      summary: "Mengikuti program pelatihan intensif Website Development 'Next Gen Digital: Turning Ideas into Reality' yang diselenggarakan oleh Sekolah Vokasi IPB University. Memperdalam kemampuan arsitektur web modern, integrasi antarmuka responsif, dan problem solving berbasis web.",
      highlights: [
        "Mendalami fondasi pemrograman web modern, struktur semantik HTML5, dan implementasi layout responsif CSS3.",
        "Mengembangkan interaktivitas antarmuka web menggunakan JavaScript dan best practices arsitektur frontend.",
        "Berkolaborasi dalam studi kasus pengembangan web serta pemecahan masalah (problem solving) bersama tim.",
        "Menyelesaikan seluruh kurikulum pelatihan dan proyek akhir dengan sertifikasi resmi dari SV IPB University."
      ],
      tags: ["Web Development", "HTML5 & CSS3", "JavaScript", "Responsive Design", "UI Implementation", "IPB University"],
      image: "/experience/experience-1.JPG"
    },
    {
      id: "fintech-saas-solution",
      number: "02",
      period: "2021 — 2023",
      duration: "2 Tahun",
      type: "Senior Engineer",
      role: "Frontend Engineer & UI Designer",
      company: "Fintech & SaaS Solution",
      location: "Jakarta, Indonesia",
      summary: "Mengembangkan dashboard analitik transaksi finansial real-time, integrasi payment gateway multi-channel, serta merancang flow transaksi yang seamless dan aman.",
      highlights: [
        "Mengimplementasikan chart interaktif dengan rendering data real-time via WebSockets.",
        "Merancang antarmuka checkout yang menaikkan tingkat konversi pembayaran sebesar 18%.",
        "Membangun visualisasi data finansial berbasis Canvas dengan latensi di bawah 50ms.",
        "Menerapkan audit kepatuhan aksesibilitas WCAG 2.1 AA di seluruh modul utama."
      ],
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js / Canvas", "REST APIs", "WebSocket"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "creative-tech-agency",
      number: "03",
      period: "2020 — 2021",
      duration: "1 Tahun",
      type: "Agency Work",
      role: "Junior Web Developer",
      company: "Creative Tech Agency",
      location: "Bandung, Indonesia",
      summary: "Membangun website interaktif klien berskala global, integrasi headless CMS, serta memastikan responsivitas dan konsistensi lintas peramban modern.",
      highlights: [
        "Menyelesaikan 14+ website kustom dengan standar SEO dan performa tinggi tepat waktu.",
        "Menerapkan micro-animations yang halus dan responsif di berbagai resolusi layar.",
        "Mengurangi ukuran payload aset gambar rata-rata 60% menggunakan WebP conversion pipeline.",
        "Berkolaborasi langsung dengan desainer visual untuk merealisasikan layout asimetris yang presisi."
      ],
      tags: ["JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "PHP / Laravel", "Headless CMS"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
    }
  ],

  projects: [
    {
      id: "my-todo-list-app",
      number: "01",
      title: "My To-Do List Web Application",
      role: "Frontend Web Developer",
      category: "Web Application",
      featured: true,
      summary: "Aplikasi web manajemen tugas harian (To-Do List) interaktif yang dibangun menggunakan HTML, CSS, dan JavaScript murni. Menggunakan penyimpanan data lokal (LocalStorage API) bawaan browser untuk persistensi data secara offline-first. Proyek ini dikembangkan sebagai tugas kelulusan program Coding Camp.",
      problem: "Pengguna membutuhkan aplikasi pencatat aktivitas harian yang responsif, cepat, tanpa reload halaman, serta mampu menyimpan, mencari, dan memfilter daftar tugas secara lokal.",
      solution: "Mengembangkan arsitektur aplikasi berbasis Vanilla JavaScript dengan manipulasi DOM dinamis, validasi form tugas, pemfilteran multi-kriteria (judul & tanggal), serta sinkronisasi otomatis ke LocalStorage.",
      impact: "Menghasilkan aplikasi bebas dependensi berat dengan kecepatan loading instan, transisi interaktif yang mulus, dan keandalan penyimpanan offline.",
      highlights: [
        "Penyimpanan data lokal persisten menggunakan Web LocalStorage API bawaan browser",
        "Fitur pencarian dan penyaringan data dinamis (Filter by Title & Filter by Date)",
        "Operasi task management lengkap (Add Task, Reset Filter, and Clear All) dengan validasi form intuitif",
        "Tata letak antarmuka clean, responsif, dan adaptif untuk perangkat mobile maupun desktop"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API", "DOM Manipulation", "Responsive Design"],
      liveUrl: "https://rezkywdiskandar.github.io/CodingCamp-10Nov25-Rezky/",
      githubUrl: "https://github.com/rezkywdiskandar/CodingCamp-10Nov25-Rezky.git",
      images: [
        {
          src: "/project/project-1.png",
          label: "Empty State & Form Input",
          description: "Tampilan formulir input tugas baru, filter pencarian judul, pemilihan tanggal, dan aksi reset."
        },
        {
          src: "/project/project-1-1.png",
          label: "Active Task List & Action Controls",
          description: "Daftar to-do items tersimpan dengan status selesai (Done), fitur batalkan (Undo), dan hapus item (Delete)."
        }
      ]
    },
    {
      id: "rekap-hutang-piutang-arcepar",
      number: "02",
      title: "Rekap Hutang Piutang",
      role: "Frontend Web Developer",
      category: "Financial Web App",
      featured: true,
      summary: "Aplikasi web pencatatan dan manajemen rekapitulasi keuangan hutang piutang (Accounts Receivable & Payable). Dilengkapi ringkasan metrik saldo otomatis, kalkulasi bunga, jatuh tempo, dan persistensi data offline via LocalStorage.",
      problem: "Pengguna membutuhkan sistem pencatatan keuangan yang terstruktur untuk melacak tagihan piutang dan kewajiban hutang beserta bunga dan status pembayaran tanpa proses input yang rumit.",
      solution: "Merancang dashboard keuangan interaktif dengan formulir pencatatan terstruktur, ringkasan saldo realtime (Total Piutang, Total Hutang, Net Balance), kalkulasi bunga & sisa tagihan, serta penyimpanan LocalStorage.",
      impact: "Membantu visualisasi aliran kewajiban keuangan secara akurat dan transparan dengan antarmuka yang bersih dan interaktif.",
      highlights: [
        "Dashboard ringkasan keuangan real-time (Total Piutang, Total Hutang, dan Net Balance)",
        "Manajemen transaksi multi-kategori (Piutang AR & Hutang AP) dengan kalkulasi bunga dan jatuh tempo",
        "Tabel rekapitulasi data interaktif dengan tracking nominal terbayar, sisa tagihan, dan status pelunasan",
        "Penyimpanan data lokal persisten tanpa server backend menggunakan LocalStorage API"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "LocalStorage API", "Financial Calculation", "Responsive Design"],
      liveUrl: "https://rezkywdiskandar.github.io/Project-ATS-ARCEPAR/",
      githubUrl: "https://github.com/rezkywdiskandar/Project-ATS-ARCEPAR.git",
      images: [
        {
          src: "/project/project-2.png",
          label: "Dashboard & Form Input",
          description: "Formulir pencatatan transaksi hutang piutang, kalkulasi bunga otomatis, dan ringkasan metrik saldo keuangan."
        },
        {
          src: "/project/project-2-1.png",
          label: "Tabel Rekapitulasi & Status Pelunasan",
          description: "Tampilan tabel rekap data transaksi interaktif dengan tracking pelunasan tagihan, status lunas, dan aksi manajemen."
        }
      ]
    },
    {
      id: "nusantara-archive-sejarah",
      number: "03",
      title: "Nusantara Archive (1511 — 1942)",
      role: "Frontend Web Developer",
      category: "Interactive Educational Web",
      featured: true,
      summary: "Platform edukasi dan arsip sejarah interaktif yang mengulas jejak rempah, ekspedisi bangsa Eropa (Era 3G), masa kejayaan VOC, hingga era kolonialisme di Nusantara. Dilengkapi navigasi timeline, modul kuis interaktif, dan halaman profil tim pengembang 'The Trio'.",
      problem: "Materi sejarah era kolonialisme seringkali disajikan secara tekstual dan kurang interaktif, menyulitkan generasi muda untuk memahami kronologi dan konteks peristiwa bersejarah secara mendalam.",
      solution: "Mengembangkan web interaktif multi-halaman bertema arsip klasik maritim dengan animasi transisi, kuis pilihan ganda interaktif dengan sistem scoring instan, dan struktur kronologis yang jelas.",
      impact: "Menciptakan media pembelajaran sejarah yang menarik, imersif, dan mudah diakses lintas perangkat dengan feedback kuis yang responsif.",
      highlights: [
        "Arsitektur website interaktif multi-halaman (Era 3G, Masa VOC, Kolonial, Galeri Sejarah, dan Tim)",
        "Modul Kuis Interaktif 'Seberapa Paham Kamu Tentang VOC?' dengan validasi jawaban langsung",
        "Tipografi editorial klasik bertema arsip maritim Nusantara dengan layout responsif",
        "Showcase halaman tim pengembang 'The Trio' berdesain wanted poster retro"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Interactive Quiz", "Responsive Design", "Web Audio"],
      liveUrl: "https://rezkywdiskandar.github.io/website-project-sejarah/",
      githubUrl: "https://github.com/rezkywdiskandar/website-project-sejarah.git",
      images: [
        {
          src: "/project/project-3.png",
          label: "Hero & Eksplorasi Arsip Sejarah",
          description: "Antarmuka beranda Nusantara Archive dengan tipografi klasik, tema maritim, dan navigasi timeline eksplorasi."
        },
        {
          src: "/project/project-3-2.png",
          label: "Interactive History Quiz",
          description: "Modul kuis interaktif pengujian wawasan seputar era VOC dengan opsi pilihan ganda dan validasi jawaban langsung."
        },
        {
          src: "/project/project-3-3.png",
          label: "The Trio Developer Team",
          description: "Showcase tim pengembang 'The Trio' yang dibungkus dengan kartu profil kreatif bertema retro poster."
        }
      ]
    },
    {
      id: "rombelspot-figma-ui-ux",
      number: "04",
      title: "RombelSpot — Mobile Classroom Locator & Scheduling",
      role: "UI/UX Designer",
      category: "UI/UX Design / Mobile App",
      featured: true,
      summary: "Desain antarmuka (UI) dan prototipe interaktif aplikasi mobile RombelSpot yang dirancang untuk mempermudah pengecekan lokasi ruangan kelas rombel, jadwal pelajaran harian, pemantauan status ketersediaan ruangan, pelaporan kendala, serta sistem booking ruangan kosong secara instan.",
      problem: "Siswa dan guru kerap mengalami kendala saat mencari lokasi ruangan kelas yang berpindah atau mencari ruangan kosong yang tersedia untuk kegiatan belajar tanpa adanya sistem informasi terpusat.",
      solution: "Merancang pengalaman pengguna (UX) yang intuitif di Figma berbasis mobile-first, dilengkapi alur splash & login, dashboard jadwal kelas realtime, visualisasi detail fasilitas ruangan (PC, TV, WiFi, Proyektor), modul lapor kendala, dan fitur booking ruangan kosong.",
      impact: "Menghasilkan user flow interaktif komprehensif (Flow 1 & Flow 2) berstandar industri dengan spesifikasi desain modular siap handoff ke frontend engineer.",
      highlights: [
        "Desain sistem antarmuka mobile-first berbasis komponen modular dan auto-layout di Figma",
        "Alur interaksi lengkap (Flow 1 & Flow 2) dari Splash Screen, Login, hingga Booking Ruangan & Konfirmasi",
        "Fitur pencarian ruangan kosong, detail fasilitas ruangan, pelaporan kendala, dan notifikasi perubahan jadwal",
        "Prototipe interaktif Figma siap uji pengguna dan spesifikasi teknis lengkap via Figma Dev Mode"
      ],
      techStack: ["Figma", "UI/UX Design", "Wireframing", "Interactive Prototype", "Mobile Design", "Design System"],
      liveUrl: "https://www.figma.com/proto/gJMqXyM1BDgu2eDPdWLfjK/RombelSpot?node-id=0-1&t=Ct9SAtp3sl2VhJgt-1",
      liveUrlLabel: "Figma Prototype",
      githubUrl: "https://www.figma.com/design/gJMqXyM1BDgu2eDPdWLfjK/RombelSpot?node-id=0-1&m=dev&t=Ct9SAtp3sl2VhJgt-1",
      githubUrlLabel: "Figma Dev Mode",
      images: [
        {
          src: "/project/project-4.png",
          label: "RombelSpot Mobile Mockup",
          description: "Tampilan onboarding screen aplikasi mobile RombelSpot untuk pengecekan lokasi kelas rombel secara instan."
        },
        {
          src: "/project/project-4-2.png",
          label: "User Flow & Interactive Prototype Nodes",
          description: "Alur navigasi menyeluruh aplikasi (Flow 1 & Flow 2) mencakup Dashboard, Jadwal, Detail Ruangan, Lapor Kendala, dan Booking Ruangan."
        }
      ]
    }
  ],

  certificates: [
    {
      id: "cert-ibm-ai",
      title: "AI Literacy",
      issuer: "IBM SkillsBuild",
      issuerCode: "IBM",
      issueDate: "24 Juli 2026",
      expiryDate: "Lifetime",
      credentialId: "eOTI1AAd",
      credentialUrl: "https://www.credly.com/go/eOTI1AAd",
      skills: ["Artificial Intelligence", "AI Ethics", "Generative AI", "Machine Learning Literacy"],
      description: "Sertifikasi resmi literasi kecerdasan buatan dari IBM SkillsBuild dan Credly, membuktikan pemahaman konsep AI modern, etika penggunaan, dan implementasi teknologi cerdas.",
      image: "/certificates/serti-1.png"
    },
    {
      id: "cert-ilo-k3",
      title: "E-Learning Keselamatan dan Kesehatan Kerja (K3)",
      issuer: "International Labour Organization (ILO)",
      issuerCode: "ILO",
      issueDate: "20 September 2025",
      expiryDate: "Lifetime",
      credentialId: "ILO-K3-200925",
      credentialUrl: "https://www.ilo.org/",
      skills: ["Keselamatan Kerja (K3)", "Occupational Health", "Safety Standards", "Workplace Compliance"],
      description: "Sertifikasi resmi penyelesaian e-learning Keselamatan dan Kesehatan Kerja (K3) yang diselenggarakan oleh International Labour Organization (ILO) bersama mitra strategis kementerian.",
      image: "/certificates/serti-2.png"
    },
    {
      id: "cert-dicoding-pm",
      title: "Belajar Dasar Manajemen Proyek",
      issuer: "Dicoding Indonesia (Google Developers Partner)",
      issuerCode: "Dicoding",
      issueDate: "04 Oktober 2025",
      expiryDate: "04 Oktober 2028",
      credentialId: "JMZVV322RZN9",
      credentialUrl: "https://www.dicoding.com/certificates/JMZVV322RZN9",
      skills: ["Project Management", "Agile & Scrum", "Waterfall & Lean", "PMO Operations"],
      description: "Validasi kompetensi dasar manajemen proyek: metodologi Agile/Scrum, inisiasi & perencanaan proyek, manajemen lintas fungsi, dan penutupan proyek dari Dicoding & Google Developers Partner.",
      image: "/certificates/serti-3.png"
    },
    {
      id: "cert-dicoding-ai",
      title: "Belajar Dasar AI (Artificial Intelligence)",
      issuer: "Dicoding Indonesia (Google Cloud Partner)",
      issuerCode: "Dicoding",
      issueDate: "04 Oktober 2025",
      expiryDate: "04 Oktober 2028",
      credentialId: "81P25NGLYPOY",
      credentialUrl: "https://www.dicoding.com/certificates/81P25NGLYPOY",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Data for AI"],
      description: "Sertifikasi kompetensi penguasaan konsep fundamental AI, pemanfaatan data untuk AI, dasar Machine Learning, dan implementasi Deep Learning oleh Dicoding & Google Cloud Partner.",
      image: "/certificates/serti-4.png"
    },
    {
      id: "cert-komdigi-haki",
      title: "Pengenalan HAKI Dalam Perlindungan Karya & Inovasi Digital",
      issuer: "Komdigi — Digital Talent Scholarship 2025",
      issuerCode: "Komdigi",
      issueDate: "8 Oktober 2025",
      expiryDate: "Lifetime",
      credentialId: "2299826850-1611/MS/BLSDM.Komdigi/2025",
      credentialUrl: "https://digitalent.kominfo.go.id",
      skills: ["Hak Cipta Digital", "Konsep HAKI", "Inovasi Digital", "Legal Compliance"],
      description: "Pelatihan resmi Micro Skill Digital Talent Scholarship 2025 oleh Pusat Pengembangan Literasi Digital Komdigi mengenai konsep HAKI dan perlindungan hak cipta di era digital.",
      image: "/certificates/serti-5.png"
    },
    {
      id: "cert-revou-se",
      title: "Intro to Software Engineering (Coding Camp)",
      issuer: "RevoU (PT Revolusi Cita Edukasi)",
      issuerCode: "RevoU",
      issueDate: "14 November 2025",
      expiryDate: "Lifetime",
      credentialId: "CCSE 101125-01-1-00096",
      credentialUrl: "https://revou.co",
      skills: ["Software Engineering", "HTML & CSS", "JavaScript Basics", "Web Architecture"],
      description: "Sertifikat kelulusan program intensif 1-week certified online course Intro to Software Engineering yang diselenggarakan oleh RevoU Coding Camp.",
      image: "/certificates/serti-6.png"
    },
    {
      id: "cert-dicoding-web",
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia (Dicoding Academy)",
      issuerCode: "Dicoding",
      issueDate: "01 Maret 2026",
      expiryDate: "01 Maret 2029",
      credentialId: "N9ZON78WRXG5",
      credentialUrl: "https://www.dicoding.com/certificates/N9ZON78WRXG5",
      skills: ["HTML5 Semantic", "CSS3 Flexbox & Grid", "Responsive Web Design", "DOM Manipulation"],
      description: "Kurikulum standar industri penguasaan dasar pemrograman web modern, struktur semantik HTML5, layout responsif CSS3, dan interaktivitas JavaScript.",
      image: "/certificates/serti-7.png"
    },
    {
      id: "cert-ipb-webdev",
      title: "Peserta Website Development — Micro Tech Education 2026",
      issuer: "Sekolah Vokasi IPB University",
      issuerCode: "IPB",
      issueDate: "07 Juni 2026",
      expiryDate: "Lifetime",
      credentialId: "031/A.2/SERTIF/MTE/MICRO/VI/2026",
      credentialUrl: "https://sv.ipb.ac.id",
      skills: ["Web Development", "UI Implementation", "Problem Solving", "Modern Tech Stack"],
      description: "Sertifikat kepesertaan workshop intensif Website Development dalam acara Micro Technology Education 2026 'Next Gen Digital: Turning Ideas into Reality' di SV IPB University.",
      image: "/certificates/serti-8.png"
    },
    {
      id: "cert-code-org",
      title: "Computer Science Express Course",
      issuer: "Code.org",
      issuerCode: "Code.org",
      issueDate: "Verified Completion",
      expiryDate: "Lifetime",
      credentialId: "CODE-EXP-RWI",
      credentialUrl: "https://studio.code.org",
      skills: ["Computational Thinking", "Algorithms", "Programming Foundations", "Logic & Problem Solving"],
      description: "Sertifikat penyelesaian komprehensif pembelajaran konsep dasar ilmu komputer, algoritma pemrograman, dan logika pemecahan masalah.",
      image: "/certificates/serti-9.jpg"
    }
  ],

  github: {
    username: "rezkywdiskandar",
    totalContributions: "1,284",
    totalContributionsLabel: "contributions in the last year",
    longestStreak: "24 days",
    activeDays: "82%",
    profileUrl: "https://github.com/rezkywdiskandar"
  }
};
