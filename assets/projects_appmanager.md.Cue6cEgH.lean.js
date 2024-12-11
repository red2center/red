import{_ as e,c as r,a2 as t,o as n}from"./chunks/framework.CJ3Fe3Yg.js";const h=JSON.parse('{"title":"HelloRed App Manager","description":"","frontmatter":{},"headers":[],"relativePath":"projects/appmanager.md","filePath":"projects/appmanager.md"}'),i={name:"projects/appmanager.md"};function l(o,a,s,d,u,m){return n(),r("div",null,a[0]||(a[0]=[t(`<h1 id="hellored-app-manager" tabindex="-1">HelloRed App Manager <a class="header-anchor" href="#hellored-app-manager" aria-label="Permalink to &quot;HelloRed App Manager&quot;">​</a></h1><p>HelloRed App Manager (HelloRed App Center) birçok uygulamayı merkezi olarak indirmenizi sağlar. Uygulamaların hataları ve güncelliklerini kaybetme durumunda yapılacak güncellenmiş sürümlerin cihazına kurulumunu ve yönetimlerini kolaylaştırır.</p><h2 id="gereksinimler" tabindex="-1">Gereksinimler <a class="header-anchor" href="#gereksinimler" aria-label="Permalink to &quot;Gereksinimler&quot;">​</a></h2><p>HelloRed App Manager sorunsuz çalışması için aşağıda bulunan araçlar gereklidir.</p><ul><li><a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer" target="_blank" rel="noreferrer">.NET Desktop Runtime 8.0.11 x64</a></li><li><a href="https://go.microsoft.com/fwlink/p/?LinkId=2124703" target="_blank" rel="noreferrer">WebView2 Runtime Evergreen Önyükleyicisi</a></li></ul><blockquote><p><strong>Not:</strong> Bu araçlar cihazınızda mevcut değilse hatalar alabilirsiniz.</p></blockquote><h2 id="kurulum" tabindex="-1">Kurulum <a class="header-anchor" href="#kurulum" aria-label="Permalink to &quot;Kurulum&quot;">​</a></h2><ul><li>Yüklü olmayan gereksinimleri yükleyiniz.</li><li>Bilgisayarınızda bulunan komut istemini ( CMD ) çalıştırınız.</li><li>Aşağıda bulunan kodu kopyalayıp komut istemine yapıştırın ve çalıştırın.</li></ul><div class="language-batch vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">batch</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">powershell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> -Command </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$url = &#39;https://raw.githubusercontent.com/red2center/appcenter/refs/heads/main/setup.bat&#39;; $tempFile = [System.IO.Path]::Combine($env:TEMP, &#39;downloaded_script.bat&#39;); Invoke-WebRequest -Uri $url -OutFile $tempFile; if (Test-Path $tempFile) {&amp; $tempFile; Remove-Item $tempFile} else {echo &#39;Dosya indirilemedi.&#39;}&quot;</span></span></code></pre></div><ul><li>Masaüstünüze gelen <strong><code>HelloRed App Center</code></strong> kısayolunu çalıştırın.</li></ul><h1 id="kullanım" tabindex="-1">Kullanım <a class="header-anchor" href="#kullanım" aria-label="Permalink to &quot;Kullanım&quot;">​</a></h1><p><img src="https://raw.githubusercontent.com/red2center/appcenter/refs/heads/main/other/9.png" alt="net"></p><table tabindex="0"><thead><tr><th>Bölüm</th><th>Açıklama</th></tr></thead><tbody><tr><td>Programlar sekmesi</td><td>Bilgisayarınızda yüklü olan ve olmayan programları görüntüleme, indirme ve yönetme işlemlerinin yapıldığı alandır.</td></tr><tr><td>Website</td><td><a href="https://hellored.pages.dev" target="_blank" rel="noreferrer">HelloRed.pages.dev</a> adresine erişmenizi sağlar.</td></tr><tr><td>Yama notları</td><td>Yapılan güncelleme ile beraber gelen özellikleri, değişikleri ve hata düzeltmelerinin detaylarının bulunduğu alandır.</td></tr><tr><td>Kaynak Linkler</td><td>Discord, Youtube gibi sosyal alanlara erişmenizi sağlar.</td></tr><tr><td>Yönet</td><td>Uygulamaların kendine özel yönetim sayfasını açar. Bu sayfada uygulamanın ayarları ve durumları görüntülenebilir, Çalıştır ve Durdur gibi eylemlerin gerçekleştirilmesi sağlanabilir.</td></tr></tbody></table><h2 id="programlar" tabindex="-1">Programlar <a class="header-anchor" href="#programlar" aria-label="Permalink to &quot;Programlar&quot;">​</a></h2><p>Bu alanda yüklü olmayan uygulamaların güncel sürümlerinin kurulumunu sağlayabilirsiniz.</p><p>Yüklü olan uygulamaların başlatılmasını sağlayabilirsiniz. Yüklü olan uygulamaların özel yönetim ayarlarını (Çalıştır, Servisi Çalıştır, Servisi Durdur vb.) Yönet butonunu kullanarak erişebilir ve değişiklik yapabilirsiniz.</p><blockquote><p><strong>Not:</strong> Her Uygulamanın özel bir sayfası olduğundan içeriklerinde ve durumlarında farklılıklar olabilir.</p></blockquote><h1 id="hatalar" tabindex="-1">Hatalar <a class="header-anchor" href="#hatalar" aria-label="Permalink to &quot;Hatalar&quot;">​</a></h1><h2 id="net-runtime" tabindex="-1">.NET Runtime <a class="header-anchor" href="#net-runtime" aria-label="Permalink to &quot;.NET Runtime&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/red2center/appcenter/refs/heads/main/other/1.png" alt="net"></p><p>Buu hata <strong><a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer" target="_blank" rel="noreferrer"><code>.NET 8.0.11 Desktop Runtime</code></a></strong> bilgisayarınızda mevct olmadığı için alınır.<strong><code>Download it now</code></strong> butonuna basarak veya</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer</span></span></code></pre></div><p>adresinden kurulum dosyasını indirip kurulum işlemlerini tamamladıktan sonra programı yeniden başlatarak hatanın giderilmesini sağlayabilirsiniz.</p><blockquote><p>.NET 8.0.11 Desktop Runtime, Microsoft&#39;un .NET platformunun bir parçasıdır ve .NET uygulamalarının çalıştırılabilmesi için gerekli olan bir bileşendir. Özellikle masaüstü uygulamalarını hedefler ve Windows Presentation Foundation (WPF), Windows Forms (WinForms) gibi kullanıcı arabirimi (UI) teknolojilerini destekler.</p></blockquote><h2 id="webview2-runtime" tabindex="-1">WebView2 Runtime <a class="header-anchor" href="#webview2-runtime" aria-label="Permalink to &quot;WebView2 Runtime&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/red2center/appcenter/refs/heads/main/other/6.png" alt="WebView2"><img src="https://raw.githubusercontent.com/red2center/appcenter/refs/heads/main/other/7.png" alt="WebView2"> Bu hata <strong><a href="https://go.microsoft.com/fwlink/p/?LinkId=2124703" target="_blank" rel="noreferrer"><code>WebView2 Runtime</code></a></strong> bilgisayarınızda mevct olmadığı için alınır.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-8.0.11-windows-x64-installer</span></span></code></pre></div><p>adresinden kurulum dosyasını indirip kurulum işlemlerini tamamladıktan sonra programı yeniden başlatarak hatanın giderilmesini sağlayabilirsiniz.</p><blockquote><p>WebView2 Runtime, Microsoft tarafından geliştirilen bir web denetimidir ve masaüstü uygulamalarında modern web içeriğini görüntülemek için Microsoft Edge (Chromium tabanlı) altyapısını kullanır.</p></blockquote>`,29)]))}const c=e(i,[["render",l]]);export{h as __pageData,c as default};
