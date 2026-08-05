var currentLang = "tr";
try {
    if (localStorage.getItem("preferredLanguage")) {
        currentLang = localStorage.getItem("preferredLanguage");
    }
} catch (e) {
    console.warn("LocalStorage erişimi engellendi (Muhtemelen file:// protokolünden dolayı).");
}

document.addEventListener("DOMContentLoaded", () => {
    // Sayfa yüklendiğinde dili ayarla
    if (typeof translations !== 'undefined') {
        setLanguage(currentLang);
    } else {
        console.error("translations.js yüklenemedi veya bulunamadı!");
    }

    // AOS Animasyonlarını Başlat
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Karanlık mod (Dark Mode) başlangıç ayarı
    initTheme();
});

// Tema Ayarları
function initTheme() {
    var savedTheme = "light";
    try {
        if (localStorage.getItem("preferredTheme")) {
            savedTheme = localStorage.getItem("preferredTheme");
        }
    } catch (e) {
        console.warn("LocalStorage erişimi engellendi (Tema).");
    }
    
    if (savedTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    updateThemeButtonIcon(savedTheme);
}

function toggleTheme() {
    var currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var newTheme = currentTheme === "dark" ? "light" : "dark";
    
    if (newTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    
    try {
        localStorage.setItem("preferredTheme", newTheme);
    } catch (e) {}
    
    updateThemeButtonIcon(newTheme);
}

function updateThemeButtonIcon(theme) {
    var themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
        if (theme === "dark") {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    }
}

function setLanguage(lang) {
    currentLang = lang;
    try {
        localStorage.setItem("preferredLanguage", lang);
    } catch (e) {
        // file:// protokolünde localStorage hatası yoksayılır
    }

    // HTML lang özelliğini güncelle
    document.documentElement.lang = lang;

    // Seçili dilin çevirilerini al
    var currentTranslations = translations[lang];
    if (!currentTranslations) return;

    // data-i18n niteliğine sahip tüm öğeleri bul ve içeriğini güncelle
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function(element) {
        var key = element.getAttribute("data-i18n");
        if (currentTranslations[key]) {
            // Eğer içerik HTML içeriyorsa innerHTML, sadece metinse innerText kullanmak güvenlidir
            // Şimdilik tasarım bozulmaması için innerHTML kullanıyoruz.
            element.innerHTML = currentTranslations[key];
        }
    });

    // Placeholder çevirileri (form inputları için)
    var phElements = document.querySelectorAll("[data-i18n-ph]");
    phElements.forEach(function(element) {
        var key = element.getAttribute("data-i18n-ph");
        if (currentTranslations[key]) {
            element.setAttribute("placeholder", currentTranslations[key]);
        }
    });

    // Dil butonlarının aktiflik durumunu güncelle
    var btnTR = document.getElementById("btn-lang-tr");
    var btnEN = document.getElementById("btn-lang-en");
    if (btnTR && btnEN) {
        if (lang === "tr") {
            btnTR.classList.add("fw-bold", "text-white");
            btnTR.classList.remove("text-white-50");
            btnEN.classList.remove("fw-bold", "text-white");
            btnEN.classList.add("text-white-50");
        } else {
            btnEN.classList.add("fw-bold", "text-white");
            btnEN.classList.remove("text-white-50");
            btnTR.classList.remove("fw-bold", "text-white");
            btnTR.classList.add("text-white-50");
        }
    }
}

// Mobil menü açıkken sayfanın boş bir yerine veya bir menü linkine tıklandığında menüyü kapat
document.addEventListener('click', function (event) {
    var navbarCollapse = document.getElementById('navbarNav');
    var navbarToggler = document.querySelector('.navbar-toggler');
    
    // Eğer navbar açıksa (show class'ı varsa)
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Tıklanan yer menünün veya toggler butonunun dışındaysa
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
        // Eğer tıklanan yer menünün içindeki bir linkse de kapat (Dil butonları hariç)
        else if (event.target.classList.contains('nav-link')) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    }
});
