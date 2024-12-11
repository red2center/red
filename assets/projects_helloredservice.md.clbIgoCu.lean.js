import{_ as a,c as i,a2 as l,o as n}from"./chunks/framework.CJ3Fe3Yg.js";const k=JSON.parse('{"title":"HelloRedService","description":"","frontmatter":{},"headers":[],"relativePath":"projects/helloredservice.md","filePath":"projects/helloredservice.md"}'),r={name:"projects/helloredservice.md"};function s(t,e,o,d,h,c){return n(),i("div",null,e[0]||(e[0]=[l(`<h1 id="helloredservice" tabindex="-1">HelloRedService <a class="header-anchor" href="#helloredservice" aria-label="Permalink to &quot;HelloRedService&quot;">​</a></h1><p><strong>HelloRedService</strong>, Windows üzerinde çalışan bir hizmettir ve aşağıdaki işlevleri yerine getirir:</p><hr><h2 id="ozellikler" tabindex="-1">Özellikler <a class="header-anchor" href="#ozellikler" aria-label="Permalink to &quot;Özellikler&quot;">​</a></h2><ol><li><p><strong>Discord Bağlantı Yönlendirmesi</strong><br> HelloRedService, <em>discord.com</em> adresine yapılan bağlantıları bir DPI (Derin Paket İnceleme) işlemi ile analiz ederek farklı bir DNS sunucusuna yönlendirir. Bu işlem, Discord bağlantılarının belirli bir DNS yapılandırması üzerinden gerçekleşmesini sağlar.</p></li><li><p><strong>Normal Trafik Yönetimi</strong><br> Discord dışındaki tüm ağ trafiği, sistemde varsayılan olarak ayarlı DNS sunucusunu kullanarak çalışır. Bu, diğer tüm internet bağlantılarının normal şekilde işlev görmesini sağlar.</p></li></ol><hr><h2 id="dpi-deep-packet-inspection-nedir" tabindex="-1">DPI (Deep Packet Inspection) Nedir? <a class="header-anchor" href="#dpi-deep-packet-inspection-nedir" aria-label="Permalink to &quot;DPI (Deep Packet Inspection) Nedir?&quot;">​</a></h2><p><strong>DPI (Derin Paket İnceleme)</strong>, ağ trafiğini incelemek için kullanılan gelişmiş bir analiz yöntemidir. DPI, bir ağ üzerinden geçen verilerin yalnızca başlıklarını değil, aynı zamanda içeriğini de analiz edebilir. Bu, aşağıdaki amaçlar için kullanılabilir:</p><ul><li><strong>Trafik Yönlendirme</strong>: Belirli bir uygulama veya web sitesi için özel kurallar uygulayarak ağ trafiğini optimize eder.</li><li><strong>Güvenlik</strong>: Zararlı içerik, kötü amaçlı yazılım veya şüpheli etkinlikleri tespit edebilir.</li><li><strong>Sansür veya Kısıtlama</strong>: Belirli içeriklerin engellenmesi veya hızlarının düşürülmesi.</li></ul><hr><h2 id="iss-internet-servis-saglayıcısı-baglantıyı-nasıl-engeller" tabindex="-1">ISS (İnternet Servis Sağlayıcısı) Bağlantıyı Nasıl Engeller? <a class="header-anchor" href="#iss-internet-servis-saglayıcısı-baglantıyı-nasıl-engeller" aria-label="Permalink to &quot;ISS (İnternet Servis Sağlayıcısı) Bağlantıyı Nasıl Engeller?&quot;">​</a></h2><p>ISS&#39;ler, DPI teknolojisini veya DNS tabanlı engelleme yöntemlerini kullanarak belirli web sitelerine erişimi kısıtlayabilir. Yaygın yöntemler şunlardır:</p><h3 id="_1-dns-zehirlenmesi-dns-spoofing" tabindex="-1">1. <strong>DNS Zehirlenmesi (DNS Spoofing)</strong> <a class="header-anchor" href="#_1-dns-zehirlenmesi-dns-spoofing" aria-label="Permalink to &quot;1. **DNS Zehirlenmesi (DNS Spoofing)**&quot;">​</a></h3><p>ISS, bir alan adının doğru IP adresine çözülmesini engellemek için sahte DNS yanıtları döndürebilir.</p><p><strong>Örnek</strong>:<br> Kullanıcı <code>discord.com</code> adresine gitmek istediğinde, ISS sahte bir IP adresi döndürerek bağlantıyı keser.</p><h3 id="_2-paket-engelleme-packet-filtering" tabindex="-1">2. <strong>Paket Engelleme (Packet Filtering)</strong> <a class="header-anchor" href="#_2-paket-engelleme-packet-filtering" aria-label="Permalink to &quot;2. **Paket Engelleme (Packet Filtering)**&quot;">​</a></h3><p>ISS, ağdaki veri paketlerini analiz ederek belirli bir hedefe (örneğin, Discord) giden trafiği tamamen durdurabilir.</p><h3 id="_3-hız-kısıtlama-throttling" tabindex="-1">3. <strong>Hız Kısıtlama (Throttling)</strong> <a class="header-anchor" href="#_3-hız-kısıtlama-throttling" aria-label="Permalink to &quot;3. **Hız Kısıtlama (Throttling)**&quot;">​</a></h3><p>Belirli bir uygulamanın veya sitenin trafiği yavaşlatılarak erişim zorlaştırılır.</p><hr><h2 id="dpi-bu-sorunları-nasıl-cozer" tabindex="-1">DPI Bu Sorunları Nasıl Çözer? <a class="header-anchor" href="#dpi-bu-sorunları-nasıl-cozer" aria-label="Permalink to &quot;DPI Bu Sorunları Nasıl Çözer?&quot;">​</a></h2><p>HelloRedService, DPI teknolojisini kullanarak ISS&#39;nin uyguladığı bu kısıtlamaları aşar:</p><ol><li><p><strong>DNS Yeniden Yönlendirme</strong><br> Discord trafiği için özel bir DNS sunucusu belirlenerek ISS&#39;nin yanlış DNS yanıtlarını aşmak mümkün hale gelir.</p></li><li><p><strong>Protokol Analizi</strong><br> DPI, veri paketlerini inceleyerek Discord trafiğini tespit eder ve ISS&#39;nin engelleme mekanizmalarına karşı çözüm üretir.</p></li><li><p><strong>Şifreli Trafik Yönlendirme</strong><br> Trafik, şifreli bir protokolle (örneğin, HTTPS veya özel VPN tüneli) yeniden yönlendirilir, bu da ISS&#39;nin içeriği analiz etmesini zorlaştırır.</p></li></ol><hr><h2 id="baglantı-sorunları-ve-cozumler" tabindex="-1">Bağlantı Sorunları ve Çözümler <a class="header-anchor" href="#baglantı-sorunları-ve-cozumler" aria-label="Permalink to &quot;Bağlantı Sorunları ve Çözümler&quot;">​</a></h2><p>HelloRedService çalışırken, belirli durumlarda bağlantı sorunları yaşanabilir. Bu sorunları çözmek için aşağıdaki adımları izleyebilirsiniz:</p><h3 id="_1-dns-ayarlarını-kontrol-edin" tabindex="-1">1. <strong>DNS Ayarlarını Kontrol Edin</strong> <a class="header-anchor" href="#_1-dns-ayarlarını-kontrol-edin" aria-label="Permalink to &quot;1. **DNS Ayarlarını Kontrol Edin**&quot;">​</a></h3><ul><li>Sisteminizde DNS ayarlarını doğru şekilde yapılandırdığınızdan emin olun: <ul><li>Discord için kullanılan özel DNS sunucusunun adresini kontrol edin.</li><li>Varsayılan DNS sunucusunun doğru çalıştığından emin olun.</li></ul></li><li>Gerekirse aşağıdaki gibi DNS sunucularını manuel olarak ayarlayabilirsiniz: <ul><li><strong>Google DNS</strong>: <code>8.8.8.8</code> ve <code>8.8.4.4</code></li><li><strong>Cloudflare DNS</strong>: <code>1.1.1.1</code> ve <code>1.0.0.1</code></li></ul></li></ul><h3 id="_2-vpn-ayarlarını-kontrol-edin" tabindex="-1">2. <strong>VPN Ayarlarını Kontrol Edin</strong> <a class="header-anchor" href="#_2-vpn-ayarlarını-kontrol-edin" aria-label="Permalink to &quot;2. **VPN Ayarlarını Kontrol Edin**&quot;">​</a></h3><ul><li>Eğer bir VPN hizmeti kullanıyorsanız: <ul><li>VPN bağlantısını kapatın ve Discord’a yeniden bağlanmayı deneyin.</li><li>VPN, HelloRedService’in özel DNS yönlendirme işlemlerine engel olabilir.</li></ul></li></ul><h3 id="_3-hizmeti-yeniden-baslatın" tabindex="-1">3. <strong>Hizmeti Yeniden Başlatın</strong> <a class="header-anchor" href="#_3-hizmeti-yeniden-baslatın" aria-label="Permalink to &quot;3. **Hizmeti Yeniden Başlatın**&quot;">​</a></h3><ul><li>HelloRedService’in düzgün çalıştığından emin olun: <ol><li>Hizmeti yeniden başlatın:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HelloRedService</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HelloRedService</span></span></code></pre></div></li><li>Hizmetin çalışıp çalışmadığını kontrol edin:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HelloRedService</span></span></code></pre></div></li></ol></li></ul><h3 id="_4-firewall-ayarlarını-kontrol-edin" tabindex="-1">4. <strong>Firewall Ayarlarını Kontrol Edin</strong> <a class="header-anchor" href="#_4-firewall-ayarlarını-kontrol-edin" aria-label="Permalink to &quot;4. **Firewall Ayarlarını Kontrol Edin**&quot;">​</a></h3><ul><li>Windows Güvenlik Duvarı ya da başka bir güvenlik yazılımının <em>discord.com</em> bağlantılarını engelleyip engellemediğini kontrol edin. Eğer engelleniyorsa, Discord için bir istisna kuralı ekleyin.</li></ul><h3 id="_5-log-dosyalarını-inceleyin" tabindex="-1">5. <strong>Log Dosyalarını İnceleyin</strong> <a class="header-anchor" href="#_5-log-dosyalarını-inceleyin" aria-label="Permalink to &quot;5. **Log Dosyalarını İnceleyin**&quot;">​</a></h3><ul><li>HelloRedService, çalışırken bir hata meydana geldiyse, hizmetin log dosyalarını inceleyerek sorunun nedenini öğrenebilirsiniz. Log dosyasının varsayılan konumunu kontrol edin veya yapılandırma dosyalarından ayarları doğrulayın.</li></ul><h3 id="_6-windivert64-sys" tabindex="-1">6. <strong>WinDivert64.sys</strong> <a class="header-anchor" href="#_6-windivert64-sys" aria-label="Permalink to &quot;6. **WinDivert64.sys**&quot;">​</a></h3><ul><li><strong><code>WinDivert64.sys</code></strong> dosyasının silemiyorsanız veya program klasörünü silemiyorsanız (<code>bu dosya başka bir programda açık olduğundan bu eylem gerçekleştirilemiyor.</code>). WinDivert64.sys kernelde çalıştığı içindir.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sc stop WinDivert</span></span></code></pre></div><p>Bu komutu CMD (komut istemcisi) üzerinde çalıştırıp ardından dosyayı silebilirsiniz.</p><hr><h2 id="diagramlar" tabindex="-1">Diagramlar <a class="header-anchor" href="#diagramlar" aria-label="Permalink to &quot;Diagramlar&quot;">​</a></h2><h3 id="_1-iss-nin-dns-engellemesi" tabindex="-1">1. ISS&#39;nin DNS Engellemesi <a class="header-anchor" href="#_1-iss-nin-dns-engellemesi" aria-label="Permalink to &quot;1. ISS&#39;nin DNS Engellemesi&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[User Request] --&gt; B[ISP DNS]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[Fake Response]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt;|Returns Wrong IP| D[Connection Blocked]</span></span></code></pre></div><h3 id="_2-helloredservice-ile-dpi-yonlendirmesi" tabindex="-1">2. HelloRedService ile DPI Yönlendirmesi <a class="header-anchor" href="#_2-helloredservice-ile-dpi-yonlendirmesi" aria-label="Permalink to &quot;2. HelloRedService ile DPI Yönlendirmesi&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">graph TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[User Request] --&gt; B[HelloRedService DPI]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[Custom DNS]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[Correct IP Address]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[Discord Connection Established]</span></span></code></pre></div>`,46)]))}const u=a(r,[["render",s]]);export{k as __pageData,u as default};