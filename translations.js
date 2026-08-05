const translations = {
    tr: {
        // Navbar
        "nav_home": "Ana Sayfa",
        "nav_about": "Hakkımda",
        "nav_skills": "Yetenekler",
        "nav_resume": "Özgeçmiş",
        "nav_projects": "Projeler",
        "nav_contact": "Bana Ulaşın",

        // Index / Home Page
        "home_welcome": "Hoş Geldiniz, Ben",
        "home_role": "Backend & Sistem Geliştirici Adayı",
        "home_desc": "C++, Java ve SQL dünyasında kendi mutfağımda projeler üretiyor, tasarım kalıplarını ve temiz kod prensiplerini bu yolculuğun pusulası yapıyorum. Belki yolun başındayım ama attığım her adımın, kurduğum her veritabanının hikayesi burada. Keşfettikçe ve ürettikçe bu sayfayı birlikte dolduracağız!",
        "home_btn_explore": "Keşfetmeye Başla",
        "home_btn_cv": "CV'mi İncele",
        
        "home_about_title": "Kısaca Ben",
        "home_about_desc": "Yazılım dünyasına, karmaşık sistemlerin mutfağı olan Backend tarafına duyduğum merakla adım attım. Kod yazmak benim için sadece çalışan bir program üretmek değil, aynı zamanda <strong class='text-white fw-bold'>sürdürülebilir, verimli ve temiz bir mimari</strong> inşa etmektir. Öğrenme tutkumla, her satır kodda kendimi geliştirmeye devam ediyorum.",
        "home_about_btn": "Hikayemin Tamamını Oku <i class='fas fa-arrow-right ms-2'></i>",
        
        "home_what_i_do_title": "Neler Yapıyorum?",
        "home_what_i_do_subtitle": "Yazılım geliştirme sürecindeki temel odak noktalarım.",
        "home_skill1_title": "Sistem Geliştirme",
        "home_skill1_desc": "C++ ve Java ile sağlam, sürdürülebilir ve verimli arka uç (backend) mimarileri tasarlıyorum.",
        "home_skill2_title": "Temiz Kod",
        "home_skill2_desc": "SOLID prensiplerine ve Design Patterns (Tasarım Kalıpları) standartlarına uygun, okunabilir kodlar yazıyorum.",
        "home_skill3_title": "Modern Arayüzler",
        "home_skill3_desc": "HTML, CSS ve Bootstrap kullanarak kullanıcı dostu ve responsive (mobil uyumlu) tasarımlar geliştiriyorum.",

        "home_cta_title": "Yeni Bir Proje mi Düşünüyorsunuz?",
        "home_cta_desc": "Birlikte çalışmak veya projeler hakkında fikir alışverişinde bulunmak için harika bir zaman!",

        // Projects Page
        "projects_empty_title": "Geliştirdiğim Projeler",
        "projects_empty_desc": "Şu an portföyümde aktif olarak sergilenen tamamlanmış bir projem bulunmamaktadır. Ancak C++, Java, SQL ve Web Teknolojileri (HTML, CSS, Bootstrap) üzerinde kendimi geliştirmeye, yeni mimariler tasarlamaya ve kodlamaya tam gaz devam ediyorum.<br><br>Çok yakında üzerinde çalıştığım backend projeleri, veritabanı yönetim sistemleri ve web uygulamaları kaynak kodları ile birlikte bu sayfada yer alacak. Takipte kalın!",
        "projects_ongoing_title": "Devam Eden Projeler",
        "projects_ongoing_desc": "Şu an aktif olarak kodladığım ve mutfakta pişmeye devam eden çalışmalarım.",
        "projects_back_btn": "<i class='fas fa-arrow-left me-2'></i> Ana Sayfaya Geri Dön",
        "project_dev_stage": "Geliştirme Aşamasında",
        "project_progress": "Genel İlerleme",
        "project_status_title": "Mevcut Durum ve Planlama",

        // About Page
        "about_short_facts": "Kısa Bilgiler",
        "about_turkey": "Türkiye",
        "about_languages": "Türkçe, İngilizce",
        "about_title": "Hakkımda",
        "about_desc": "Yazılım dünyasına, karmaşık sistemlerin mutfağı olan Backend tarafına duyduğum merakla adım attım. <strong>C++, Java ve SQL</strong> üzerindeki yetkinliklerimi, sadece çalışan değil; aynı zamanda sürdürülebilir ve verimli kodlar yazmak üzerine kurguluyorum. Projelerimde <strong>SOLID</strong> prensiplerini ve <strong>Design Patterns</strong> (Tasarım Kalıpları) disiplinini rehber edinerek, yazılım mimarisi konusunda kendimi sürekli geliştiriyorum. Veri modellerinden mantıksal süreçlere kadar her adımda, geleceğin büyük sistemlerini inşa etmek için gereken temelleri bugünden atıyorum.",
        "about_edu_title": "Eğitim Bilgileri",
        "about_edu_degree": "Yazılım Mühendisliği",
        "about_edu_uni": "Gümüşhane Üniversitesi",
        "about_edu_desc": "C++, JAVA, SQL dillerinde eğitim aldım. Veri yapıları, algoritmalar, yazılım test ve doğrulama, OOP, veritabanı sistemleri gibi dersler aldım.",

        // Skills Page
        "skills_title": "Yeteneklerim",
        "skills_subtitle": "Kendimi geliştirmeye devam ettiğim ve kullandığım teknolojiler.",
        "skills_c++": "Sistem Programlama",
        "skills_java": "OOP & Backend Algoritması",
        "skills_sql": "Veritabanı Yönetimi",
        "skills_arch": "Yazılım Mimarisi",
        "skills_arch_desc": "Design Patterns (Tasarım Kalıpları)",
        "skills_clean": "Temiz Kod",
        "skills_clean_desc": "SOLID Prensipleri",
        "skills_web": "Web",
        "skills_web_desc": "HTML, CSS, Bootstrap",

        // Contact Page
        "contact_title": "Benimle İletişime Geçin",
        "contact_subtitle": "Yeni bir proje fikriniz mi var? Veya sadece merhaba demek mi istiyorsunuz? Formu doldurun, size en kısa sürede dönüş yapayım.",
        "contact_email_title": "E-posta",
        "contact_social_title": "Sosyal Medya Hesaplarım",
        "contact_form_name_label": "Adınız Soyadınız",
        "contact_form_name_ph": "Adınız Soyadınız",
        "contact_form_email_label": "E-posta Adresiniz",
        "contact_form_email_ph": "ornek@mail.com",
        "contact_form_subject_label": "Konu",
        "contact_form_subject_ph": "Proje Teklifi",
        "contact_form_message_label": "Mesajınız",
        "contact_form_message_ph": "Mesajınızı buraya yazın...",
        "contact_form_submit": "Gönder <i class='fas fa-paper-plane ms-2'></i>",

        // Footer
        "footer_rights": "© 2026 Pınar Yılmaz. Tüm Hakları Saklıdır.",
        "footer_made_with": "HTML, CSS ve Bootstrap ile sevgiyle tasarlandı."
    },
    en: {
        // Navbar
        "nav_home": "Home",
        "nav_about": "About Me",
        "nav_skills": "Skills",
        "nav_resume": "Resume",
        "nav_projects": "Projects",
        "nav_contact": "Contact Me",

        // Index / Home Page
        "home_welcome": "Welcome, I am",
        "home_role": "Backend & System Developer Candidate",
        "home_desc": "I create projects in the world of C++, Java, and SQL in my own kitchen, using design patterns and clean code principles as my compass on this journey. I may be at the beginning of my path, but the story of every step I take and every database I build is here. As we explore and produce, we will fill this page together!",
        "home_btn_explore": "Start Exploring",
        "home_btn_cv": "View My CV",

        "home_about_title": "Briefly Me",
        "home_about_desc": "I stepped into the software world out of curiosity for the Backend, the kitchen of complex systems. For me, writing code is not just producing a working program, but also building a <strong class='text-white fw-bold'>sustainable, efficient, and clean architecture</strong>. With my passion for learning, I continue to improve myself in every line of code.",
        "home_about_btn": "Read My Full Story <i class='fas fa-arrow-right ms-2'></i>",

        "home_what_i_do_title": "What Do I Do?",
        "home_what_i_do_subtitle": "My main focus areas in the software development process.",
        "home_skill1_title": "System Development",
        "home_skill1_desc": "I design robust, sustainable, and efficient backend architectures with C++ and Java.",
        "home_skill2_title": "Clean Code",
        "home_skill2_desc": "I write readable codes that comply with SOLID principles and Design Patterns standards.",
        "home_skill3_title": "Modern Interfaces",
        "home_skill3_desc": "I develop user-friendly and responsive (mobile compatible) designs using HTML, CSS, and Bootstrap.",

        "home_cta_title": "Thinking of a New Project?",
        "home_cta_desc": "It's a great time to work together or brainstorm about projects!",

        // Projects Page
        "projects_empty_title": "My Projects",
        "projects_empty_desc": "Currently, I do not have a completed project actively displayed in my portfolio. However, I continue to develop myself, design new architectures, and code at full speed on C++, Java, SQL, and Web Technologies (HTML, CSS, Bootstrap).<br><br>Very soon, the backend projects, database management systems, and web applications I am working on will be on this page along with their source codes. Stay tuned!",
        "projects_ongoing_title": "Ongoing Projects",
        "projects_ongoing_desc": "My works that I am actively coding and continue to cook in the kitchen.",
        "projects_back_btn": "<i class='fas fa-arrow-left me-2'></i> Back to Home",
        "project_dev_stage": "In Development",
        "project_progress": "Overall Progress",
        "project_status_title": "Current Status and Planning",

        // About Page
        "about_short_facts": "Quick Facts",
        "about_turkey": "Turkey",
        "about_languages": "Turkish, English",
        "about_title": "About Me",
        "about_desc": "I stepped into the software world with a curiosity for Backend, the kitchen of complex systems. I build my competencies in <strong>C++, Java, and SQL</strong> not only to write working code, but also sustainable and efficient code. By guiding myself with <strong>SOLID</strong> principles and <strong>Design Patterns</strong>, I continuously improve myself in software architecture. In every step, from data models to logical processes, I lay the foundations for building the great systems of the future today.",
        "about_edu_title": "Education",
        "about_edu_degree": "Software Engineering",
        "about_edu_uni": "Gumushane University",
        "about_edu_desc": "I studied C++, JAVA, and SQL languages. I took courses such as Data Structures, Algorithms, Software Testing and Verification, OOP, and Database Systems.",

        // Skills Page
        "skills_title": "My Skills",
        "skills_subtitle": "The technologies I use and continue to develop myself in.",
        "skills_c++": "Systems Programming",
        "skills_java": "OOP & Backend Algorithms",
        "skills_sql": "Database Management",
        "skills_arch": "Software Architecture",
        "skills_arch_desc": "Design Patterns",
        "skills_clean": "Clean Code",
        "skills_clean_desc": "SOLID Principles",
        "skills_web": "Web",
        "skills_web_desc": "HTML, CSS, Bootstrap",

        // Contact Page
        "contact_title": "Get In Touch",
        "contact_subtitle": "Do you have a new project idea? Or just want to say hi? Fill out the form, and I will get back to you as soon as possible.",
        "contact_email_title": "Email",
        "contact_social_title": "My Social Media",
        "contact_form_name_label": "Full Name",
        "contact_form_name_ph": "Your Name",
        "contact_form_email_label": "Email Address",
        "contact_form_email_ph": "example@mail.com",
        "contact_form_subject_label": "Subject",
        "contact_form_subject_ph": "Project Proposal",
        "contact_form_message_label": "Message",
        "contact_form_message_ph": "Write your message here...",
        "contact_form_submit": "Send <i class='fas fa-paper-plane ms-2'></i>",

        // Footer
        "footer_rights": "© 2026 Pinar Yilmaz. All Rights Reserved.",
        "footer_made_with": "Designed with love using HTML, CSS, and Bootstrap."
    }
};
