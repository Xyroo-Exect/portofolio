(() => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const glyph = document.getElementById('menu-glyph');

  if (!nav || !toggle || !menu || !glyph) return;

  const setMenu = (open) => {
    menu.classList.toggle('is-hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    glyph.textContent = open ? '×' : '☰';
  };

  toggle.addEventListener('click', () => setMenu(menu.classList.contains('is-hidden')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
  window.addEventListener('scroll', () => nav.classList.toggle('is-scrolled', window.scrollY > 18), { passive: true });
  setMenu(false);
})();

// Local-only cybersecurity glossary + intent-based assistant. No fetch, API, or backend.
(() => {
  const glossary = [
    {term:'Phishing', aliases:['phishing','social engineering','penipuan email'], category:'SOCIAL ENGINEERING', definition:'Serangan manipulasi yang menyamar sebagai pihak tepercaya untuk mendorong korban membagikan data, membuka tautan berbahaya, atau mengirim uang.', risk:'Kredensial dicuri, akun diambil alih, atau malware terpasang.', defense:'Periksa domain dan pengirim lewat kanal terpisah, jangan buka lampiran tak terduga, gunakan password manager dan MFA, serta laporkan pesan mencurigakan.'},
    {term:'Cross-Site Scripting (XSS)', aliases:['xss','cross site scripting'], category:'WEB APPLICATION SECURITY', definition:'Kelemahan ketika input yang tidak tepercaya ditampilkan sebagai kode aktif di browser pengguna lain.', risk:'Pencurian sesi, perubahan konten, atau tindakan tanpa persetujuan pengguna.', defense:'Gunakan output encoding sesuai konteks, sanitasi HTML bila memang dibutuhkan, hindari sink berbahaya, dan terapkan Content Security Policy sebagai lapisan tambahan.'},
    {term:'Multi-Factor Authentication (MFA)', aliases:['mfa','2fa','two factor','autentikasi dua faktor'], category:'IDENTITY & ACCESS', definition:'Login memakai lebih dari satu faktor, misalnya sesuatu yang diketahui dan sesuatu yang dimiliki.', risk:'Password bocor saja tidak semestinya cukup untuk mengambil alih akun.', defense:'Utamakan passkey atau security key tahan phishing; aktifkan MFA, simpan recovery code secara aman, dan jangan menyetujui prompt login yang tidak diminta.'},
    {term:'SQL Injection', aliases:['sql injection','sqli','injection sql'], category:'WEB APPLICATION SECURITY', definition:'Kelemahan ketika input pengguna digabung ke query SQL sebagai sintaks, bukan diperlakukan sebagai data.', risk:'Pembacaan atau perubahan data tanpa izin, bergantung pada hak akses aplikasi dan database.', defense:'Gunakan parameterized queries atau prepared statements, validasi input, batasi hak akun database, dan hindari menampilkan error database ke pengguna.'},
    {term:'Zero Trust', aliases:['zero trust','trust model'], category:'SECURITY ARCHITECTURE', definition:'Prinsip bahwa tidak ada akses yang otomatis dipercaya hanya karena berasal dari jaringan internal.', risk:'Akses berlebihan dan pergerakan penyerang setelah satu akun atau perangkat kompromi.', defense:'Verifikasi identitas dan kondisi perangkat, terapkan least privilege, segmentasi, serta evaluasi akses secara berkelanjutan.'},
    {term:'Least Privilege', aliases:['least privilege','hak akses minimum','principle of least privilege'], category:'ACCESS CONTROL', definition:'Setiap akun, proses, dan layanan hanya diberi izin minimum yang diperlukan untuk tugasnya.', risk:'Jika akun atau proses disalahgunakan, dampaknya dibatasi.', defense:'Audit izin secara berkala, pisahkan akun admin, hilangkan akses yang tidak diperlukan, dan gunakan akses sementara bila memungkinkan.'},
    {term:'Firewall', aliases:['firewall','packet filtering'], category:'NETWORK DEFENSE', definition:'Kontrol jaringan yang mengizinkan atau menolak lalu lintas berdasarkan aturan dan konteks yang dikonfigurasi.', risk:'Aturan terlalu terbuka dapat mengekspos layanan; aturan terlalu ketat bisa memutus layanan sah.', defense:'Terapkan default-deny yang sesuai, buka hanya port yang diperlukan, catat aktivitas relevan, dan tinjau aturan secara berkala.'},
    {term:'Ransomware', aliases:['ransomware','pemerasan malware'], category:'MALWARE & RECOVERY', definition:'Malware yang biasanya mengenkripsi atau mengancam membocorkan data untuk memeras korban.', risk:'Gangguan operasional, kehilangan data, dan kebocoran informasi.', defense:'Simpan backup offline atau immutable dan uji pemulihan, patch sistem, batasi hak admin, aktifkan EDR, serta latih respons insiden.'},
    {term:'Threat Modeling', aliases:['threat modeling','model ancaman','stride'], category:'SECURE DESIGN', definition:'Proses terstruktur untuk mengenali aset, batas kepercayaan, pelaku ancaman, jalur serangan, dan mitigasi sebelum atau selama desain sistem.', risk:'Masalah arsitektur penting baru ditemukan setelah rilis.', defense:'Petakan aliran data, identifikasi trust boundary, prioritaskan ancaman berdasarkan dampak dan kemungkinan, lalu verifikasi mitigasinya.'},
    {term:'Content Security Policy (CSP)', aliases:['csp','content security policy'], category:'WEB HARDENING', definition:'Kebijakan browser yang membatasi sumber skrip, gaya, gambar, dan resource lain yang boleh dimuat halaman.', risk:'Membantu mengurangi dampak beberapa injeksi konten, terutama XSS, tetapi bukan pengganti output encoding.', defense:'Mulai dengan Report-Only, susun allowlist yang ketat, hindari unsafe-inline bila memungkinkan, lalu pantau laporan sebelum enforcement.'},
    {term:'HTTPS / TLS', aliases:['https','tls','ssl','transport layer security'], category:'TRANSPORT SECURITY', definition:'TLS melindungi data saat transit dan membantu browser memverifikasi identitas server melalui sertifikat.', risk:'Tanpa transport yang aman, data dapat disadap atau diubah di jaringan yang tidak tepercaya.', defense:'Paksa HTTPS, perbarui konfigurasi TLS dan sertifikat, hindari mixed content, serta aktifkan HSTS setelah konfigurasi siap.'},
    {term:'Hashing Password', aliases:['password hashing','hash password','bcrypt','argon2'], category:'CREDENTIAL STORAGE', definition:'Mengubah password menjadi nilai satu arah menggunakan fungsi hash yang dirancang untuk penyimpanan kredensial.', risk:'Hash cepat atau tanpa salt lebih mudah diserang jika database bocor.', defense:'Gunakan Argon2id atau algoritme password-hashing modern yang dikonfigurasi benar, salt unik, dan parameter biaya yang sesuai; jangan simpan password plaintext.'},
    {term:'Patch Management', aliases:['patch management','update keamanan','security patch'], category:'VULNERABILITY MANAGEMENT', definition:'Proses melacak, menguji, dan memasang pembaruan yang memperbaiki kerentanan perangkat lunak.', risk:'Komponen usang dapat memiliki celah yang sudah diketahui publik.', defense:'Inventaris aset dan dependency, prioritaskan kerentanan yang terekspos atau dieksploitasi, uji pembaruan, dan verifikasi hasil pemasangan.'},
    {term:'Incident Response', aliases:['incident response','respons insiden','insiden keamanan'], category:'SECURITY OPERATIONS', definition:'Rangkaian persiapan, deteksi, analisis, containment, eradication, recovery, dan pembelajaran setelah insiden.', risk:'Respons lambat dapat memperluas dampak dan menghilangkan bukti penting.', defense:'Siapkan kontak dan playbook, simpan log yang relevan, isolasi sistem terdampak secara terukur, jaga bukti, dan dokumentasikan timeline.'}
  ];
  const byId = id => document.getElementById(id);
  const normalize = text => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9+#.\s-]/g,' ').replace(/\s+/g,' ').trim();
  const findTerms = query => { const q=normalize(query); return glossary.filter(item => [item.term,...item.aliases].some(alias => q.includes(normalize(alias)) || normalize(alias).includes(q))); };
  const renderGlossary = (query) => {
    const out=byId('cyber-results'); if(!out) return;
    const q=normalize(query); const results=glossary.filter(item => [item.term,item.category,item.definition,...item.aliases].some(value => normalize(value).includes(q)));
    if(!q){out.innerHTML='<div class="cyber-empty"><span>⌕</span><strong>Ketik istilah untuk mulai</strong><p>Semua pencarian diproses lokal di perangkat ini.</p></div>';return;}
    if(!results.length){out.innerHTML='<div class="cyber-empty"><span>?</span><strong>Istilah belum tersedia</strong><p>Coba kata kunci seperti phishing, XSS, MFA, firewall, CSP, atau threat modeling.</p></div>';return;}
    out.innerHTML=results.slice(0,4).map(item=>`<article class="cyber-result"><div class="term-kicker">${item.category}</div><h3>${item.term}</h3><p>${item.definition}</p><p><b>RISIKO:</b> ${item.risk}</p><p><b>MITIGASI:</b> ${item.defense}</p></article>`).join('');
  };
  const log=byId('local-chat-log');
  const addMessage=(text,role='assistant')=>{if(!log)return;const el=document.createElement('div');el.className=`local-message ${role==='user'?'user-message':'assistant-message'}`;const label=document.createElement('span');label.className='message-role';label.textContent=role==='user'?'YOU / LOCAL':'SENTINEL / LOCAL';const p=document.createElement('p');p.textContent=text;el.append(label,p);log.appendChild(el);log.scrollTop=log.scrollHeight;};
  const answerLocal = raw => {
    const q=normalize(raw);
    if(/^(hi|hai|halo|hello|pagi|siang|malam|hey)\b/.test(q)) return 'Halo! Aku Sentinel, mesin penjelas keamanan lokal. Tanyakan istilah seperti XSS, phishing, MFA, firewall, atau minta checklist mengamankan website/akun.';
    if(/(amankan akun|lindungi akun|akun aman|secure account)/.test(q)) return 'Checklist akun: 1) pakai password unik dari password manager, 2) aktifkan passkey atau MFA, 3) simpan recovery code offline, 4) periksa sesi/perangkat yang login, 5) cabut aplikasi pihak ketiga yang tidak dikenal, 6) waspadai permintaan kode OTP. Jangan bagikan kode pemulihan kepada siapa pun.';
    if(/(amankan website|secure website|hardening|keamanan website)/.test(q)) return 'Checklist hardening web: 1) paksa HTTPS dan perbarui TLS, 2) validasi input dan lakukan output encoding, 3) gunakan parameterized SQL, 4) aktifkan CSP secara bertahap, 5) cookie Secure/HttpOnly/SameSite, 6) MFA dan least privilege untuk admin, 7) patch dependency, 8) backup teruji, 9) log tanpa menyimpan secret, 10) uji hanya di lingkungan yang diizinkan.';
    if(/(password|kata sandi|passphrase)/.test(q)) return 'Password yang baik itu unik untuk tiap layanan dan panjang. Gunakan password manager atau passphrase acak, aktifkan passkey/MFA, dan jangan mengirim password lewat chat. Untuk aplikasi yang kamu bangun, simpan hash password memakai Argon2id atau opsi modern yang dikonfigurasi benar—bukan plaintext.';
    if(/(ai lokal|local ai|backend|privasi|privacy|data dikirim)/.test(q)) return 'Sentinel berjalan dari JavaScript dan knowledge pack yang dibundel di halaman. Tidak ada fetch, API key, atau backend untuk menjawab pertanyaan. Ini rule-based retrieval, bukan model bahasa besar; jawaban dibatasi pada konsep yang sudah disimpan di source. Jangan masukkan data rahasia ke situs publik meski mesin ini lokal.';
    if(/(belajar|mulai cyber|roadmap|pemula|mulai dari mana)/.test(q)) return 'Roadmap pemula: 1) dasar jaringan, DNS, HTTP/TLS, 2) Linux dan command line, 3) dasar JavaScript/Python dan SQL, 4) kontrol akses, autentikasi, enkripsi, 5) OWASP Top 10 dan secure coding, 6) logging dan respons insiden. Praktikkan di lab sendiri, CTF, atau lingkungan yang secara eksplisit mengizinkan pengujian.';
    if(/(xss|phishing|sql injection|mfa|zero trust|least privilege|firewall|ransomware|threat modeling|content security policy|\bcsp\b|https|\btls\b|password hashing|bcrypt|argon2|patch management|incident response)/.test(q)) {const matches=findTerms(q);if(matches.length)return matches.slice(0,2).map(item=>`${item.term} — ${item.definition}\n\nRisiko: ${item.risk}\n\nMitigasi: ${item.defense}`).join('\n\n---\n\n');}
    if(/(scan|hack|exploit|bypass|bobol|serang|ddos|malware)/.test(q)) return 'Aku bisa membantu dari sisi defensif: jelaskan risiko, cara mendeteksi, hardening, atau rencana pengujian yang terotorisasi. Sebutkan aset dan lingkungan lab milikmu agar aku bisa menyarankan checklist aman tanpa instruksi menyerang target pihak lain.';
    return 'Belum ada jawaban spesifik untuk pertanyaan itu di knowledge pack lokal. Coba tanyakan “apa itu XSS?”, “cara mengamankan website”, “cara melindungi akun”, “roadmap belajar cyber security”, atau cari istilah lewat panel glossary. Mesin ini rule-based, bukan LLM generatif.';
  };
  const searchBtn=byId('cyber-search-btn'), searchInput=byId('cyber-search');
  if(searchBtn&&searchInput){searchBtn.addEventListener('click',()=>renderGlossary(searchInput.value));searchInput.addEventListener('keydown',e=>{if(e.key==='Enter')renderGlossary(searchInput.value)});document.querySelectorAll('[data-term]').forEach(btn=>btn.addEventListener('click',()=>{searchInput.value=btn.dataset.term;renderGlossary(btn.dataset.term)}));}
  const form=byId('local-ai-form'), input=byId('local-ai-input');
  if(form&&input){form.addEventListener('submit',event=>{event.preventDefault();const q=input.value.trim();if(!q)return;addMessage(q,'user');input.value='';byId('local-engine-state').textContent='LOCAL MATCH · NO NETWORK';addMessage(answerLocal(q));});}
})();
