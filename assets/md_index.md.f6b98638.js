import{o as a,c as e,a as n}from"./app.8e4620e7.js";const s='{"title":"Markdown\'i juhend","description":"","frontmatter":{},"headers":[{"level":2,"title":"Pealkiri h2","slug":"pealkiri-h2"},{"level":3,"title":"Pealkiri h3","slug":"pealkiri-h3"},{"level":2,"title":"Bold","slug":"bold"},{"level":2,"title":"Kursiiv/Italic","slug":"kursiiv-italic"},{"level":2,"title":"Kood","slug":"kood"},{"level":2,"title":"Lingid","slug":"lingid"},{"level":2,"title":"pildid","slug":"pildid"}],"relativePath":"md/index.md","lastUpdated":1615934065842}',i={},t=n('<h1 id="markdown-i-juhend"><a class="header-anchor" href="#markdown-i-juhend" aria-hidden="true">#</a> Markdown&#39;i juhend</h1><p>MD juhend: <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" rel="noopener noreferrer">https://www.markdownguide.org/basic-syntax/</a><br> MD juhend Githubis: <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank" rel="noopener noreferrer">https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet</a></p><p>Markdowni nipid:<br> Reavahetus – reavahetuseks lisa rea lõppu kaks tühikut.</p><p>Kirjutan lause ja vajutan enterit. Mitte midagi ei juhtu</p><p>Aga kirjutan lause ja lisan kaks tühikut ja vajutan enterit<br> Vahetab rida</p><p>Trellid on h1 taseme pealkiri:</p><div class="language-markdown"><pre><code><span class="token title important"><span class="token punctuation">#</span> Pealkiri h1</span>\n</code></pre></div><p>Tulemus:</p><h1 id="pealkiri-h1"><a class="header-anchor" href="#pealkiri-h1" aria-hidden="true">#</a> Pealkiri h1</h1><p>Kahekordsed trellid on h2 taseme pealkiri jne:</p><div class="language-markdown"><pre><code><span class="token title important"><span class="token punctuation">##</span> Pealkiri h2</span>\n\n<span class="token title important"><span class="token punctuation">###</span> Pealkiri h3</span>\n\n<span class="token title important"><span class="token punctuation">####</span> PEalkiri h4</span>\n</code></pre></div><p>tulemus:</p><h2 id="pealkiri-h2"><a class="header-anchor" href="#pealkiri-h2" aria-hidden="true">#</a> Pealkiri h2</h2><h3 id="pealkiri-h3"><a class="header-anchor" href="#pealkiri-h3" aria-hidden="true">#</a> Pealkiri h3</h3><h4 id="pealkiri-h4"><a class="header-anchor" href="#pealkiri-h4" aria-hidden="true">#</a> PEalkiri h4</h4><h2 id="bold"><a class="header-anchor" href="#bold" aria-hidden="true">#</a> Bold</h2><p>Boldiks muutmiseks tuleb tekst panna mõlemalt poolt kahge tärni vahele:</p><div class="language-markdown"><pre><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">Jäme tekst</span><span class="token punctuation">**</span></span>\n</code></pre></div><p>tulemus:<br><strong>Jäme tekst</strong></p><h2 id="kursiiv-italic"><a class="header-anchor" href="#kursiiv-italic" aria-hidden="true">#</a> Kursiiv/Italic</h2><p>Kui on vaja tekst kaldu nügida, pista see alakriipsude vahele:</p><div class="language-markdown"><pre><code><span class="token italic"><span class="token punctuation">_</span><span class="token content">italic</span><span class="token punctuation">_</span></span>\n</code></pre></div><p>tulemus:<br><em>italic</em></p><h2 id="kood"><a class="header-anchor" href="#kood" aria-hidden="true">#</a> Kood</h2><p>Lühikese koodijupi eristamiseks kasuta tagurpidi ülakoma nt nii:</p><div class="language-markdown"><pre><code><span class="token code keyword">`kood`</span>\n</code></pre></div><p>tulemus:<br><code>kood</code></p><p>Koodiploki kirjutamiseks, kasuta 3x tagurpidi ülakoma:</p><div class="language-markdown"><pre><code><span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">koodijupp</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div><p>tulemus:</p><div class="language-markdown"><pre><code>koodijupp\n</code></pre></div><p>Kui tahad, et mustas kastis kuvataks koodujuppi vastava keele vormingus, lisa nimetus ülemiste tagurpidi ülakomade järg:</p><div class="language-"><pre><code>```markdown\n## pealkiri\n```\n</code></pre></div><p>tulemus:</p><div class="language-markdown"><pre><code><span class="token title important"><span class="token punctuation">##</span> pealkiri</span>\n</code></pre></div><p>või:</p><div class="language-"><pre><code>```bash\nnpm run install\n```\n</code></pre></div><p>tulemus:</p><div class="language-bash"><pre><code><span class="token function">npm</span> run <span class="token function">install</span>\n</code></pre></div><p>või:</p><div class="language-"><pre><code>```css\nbody {\n    background: #ccc\n}\n```\n</code></pre></div><p>tulemus:</p><div class="language-css"><pre><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>jne</p><h2 id="lingid"><a class="header-anchor" href="#lingid" aria-hidden="true">#</a> Lingid</h2><div class="language-md"><pre><code><span class="token url">[<span class="token content">lingi nimi</span>](<span class="token url">https://jubejuss.github.io/learn-docs/md</span>)</span>\n</code></pre></div><p>tulemus:<br><a href="https://jubejuss.github.io/learn-docs/md" target="_blank" rel="noopener noreferrer">lingi nimi</a></p><h2 id="pildid"><a class="header-anchor" href="#pildid" aria-hidden="true">#</a> pildid</h2><p>Piltide lisamiseks:</p><div class="language-markdown"><pre><code><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/learn-docs/images/kass.png</span>)</span>\n</code></pre></div>',50);i.render=function(n,s,i,p,r,l){return a(),e("div",null,[t])};export default i;export{s as __pageData};
