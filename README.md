<!-- README rendered as HTML -->

<h1>Simple-Movie-Lookup</h1>

<p>
  A tiny <strong>vanilla HTML/CSS/JS</strong> app that searches movies on <strong>OMDb</strong> and shows the poster, IMDb rating, and key details
  (Title, Year, Type, Director, Genre, Language, Released, Runtime, Plot).
</p>



<hr>

<h2>✨ Features</h2>
<ul>
  <li>Clean, responsive UI (no frameworks)</li>
  <li>Poster + IMDb rating chip</li>
  <li>Extra fields: <strong>Title, Year, Type, Director, Genre, Language, Released, Runtime, Plot</strong></li>
  <li>Minimal JavaScript using <code>XMLHttpRequest</code> (beginner-friendly)</li>
  <li>Works locally without a build step</li>
</ul>

<hr>

<h2>📁 Project Structure</h2>
<pre><code>.
├─ index.html
├─ index.css
├─ index.js
└─ assets/
   └─ screenshot.png ← place your image here
</code></pre>

<hr>

<h2>🚀 Run Locally</h2>
<p>Open <code>index.html</code> directly in your browser <strong>or</strong> start a simple server (e.g., VS Code Live Server).</p>
<ol>
  <li>Clone:
    <pre><code>git clone https://github.com/&lt;your-username&gt;/Simple-Movie-Lookup.git
cd Simple-Movie-Lookup
</code></pre>
  </li>
  <li>(Optional) Serve with VS Code Live Server or any static server.</li>
</ol>

<hr>

<h2>🔗 OMDb endpoint used</h2>
<pre><code>https://www.omdbapi.com/?apikey=787dd8f9&amp;t=&lt;TITLE&gt;
</code></pre>
<p><em>Replace the key with your own OMDb key if you like.</em></p>

<hr>

<h2>🧠 How It Works</h2>
<ul>
  <li><code>index.html</code> defines the search input and placeholders (<strong>poster</strong>, <strong>rate</strong>, <strong>title</strong>, <strong>year</strong>, etc.).</li>
  <li><code>index.js</code> triggers on <strong>Search</strong>, sends an <strong>XHR</strong> to OMDb, and fills the fields from the JSON response.</li>
  <li><code>index.css</code> styles the <strong>header</strong>, <strong>form</strong>, <strong>poster card</strong>, <strong>rating badge</strong>, and <strong>details panel</strong>.</li>
</ul>

<hr>

<h2>🛠 Customize</h2>
<ul>
  <li>Update theme colors in <code>:root</code> inside <code>index.css</code>.</li>
  <li>Add more OMDb fields by:
    <ol>
      <li>Adding a new <code>&lt;span id="..."&gt;</code> in the details block in <code>index.html</code>.</li>
      <li>Assigning <code>document.getElementById("...").innerHTML = htmlRequest.response.&lt;FieldName&gt;</code> in <code>index.js</code>.</li>
    </ol>
  </li>
</ul>

<hr>

<h2>❗ Troubleshooting</h2>
<ul>
  <li><strong>Image not showing in README</strong>
    <ul>
      <li>Ensure the file exists at <code>assets/screenshot.png</code>.</li>
      <li>Path and filename are <strong>case-sensitive</strong>.</li>
      <li>Commit &amp; push the image:
        <pre><code>mkdir -p assets
# move/rename your PNG to assets/screenshot.png
git add assets/screenshot.png README.md
git commit -m "Add screenshot to README"
git push
</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>No results</strong>: Try a known title like “Inception”.</li>
  <li><strong>Rating shows “—”</strong>: Some entries don’t have IMDb ratings yet.</li>
  <li><strong>Mixed content warnings</strong>: Ensure the OMDb URL uses <strong>HTTPS</strong>.</li>
</ul>

<hr>

<h2>🤝 Contributing</h2>
<p>PRs welcome (error states, loading spinners, <code>fetch</code> + async/await version, tests, etc.).</p>

<hr>

<h2>📜 License</h2>
<p><strong>MIT</strong> — do whatever, just keep the notice.</p>
