const API_URL = "https://page-pulse-1cnk.onrender.com/api/analyze";
async function analyze() {

    const urlInput = document.getElementById("url");
    const report = document.getElementById("report");
    const loader = document.getElementById("loader");

    const url = urlInput.value.trim();

    if (!url) {
        alert("Please enter a valid website URL.");
        urlInput.focus();
        return;
    }

    loader.innerHTML = `
        <div class="loading-card">
            <div class="spinner"></div>
            <p>Analyzing Website...</p>
        </div>
    `;

    report.innerHTML = "";

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        loader.innerHTML = "";

        if (!response.ok) {

            report.innerHTML = `
                <div class="error-card">
                    <h2>❌ Analysis Failed</h2>
                    <p>${data.error}</p>
                </div>
            `;

            return;
        }

        report.innerHTML = `

<div class="dashboard">

    <div class="dashboard-header">

        <h2>Website Audit Report</h2>

        <div class="seo-score">

            ${data.seoScore || 90}

            <span>SEO Score</span>

        </div>

    </div>

    <div class="grid">

        <div class="card">
            <h3>🌐 Website</h3>
            <p>${data.website}</p>
        </div>

        <div class="card">
            <h3>✅ HTTP Status</h3>
            <p>${data.status}</p>
        </div>

        <div class="card">
            <h3>⚡ Response Time</h3>
            <p>${data.responseTime}</p>
        </div>

        <div class="card">
            <h3>📦 Page Size</h3>
            <p>${data.pageSize || "Unknown"}</p>
        </div>

        <div class="card">
            <h3>📄 Title</h3>
            <p>${data.title || "Not Found"}</p>
        </div>

        <div class="card">
            <h3>📝 Meta Description</h3>
            <p>${data.metaDescription || "Not Found"}</p>
        </div>

        <div class="card">
            <h3>📚 Word Count</h3>
            <p>${data.wordCount}</p>
        </div>

        <div class="card">
            <h3>📑 H1 Count</h3>
            <p>${data.h1Count ?? "-"}</p>
        </div>

        <div class="card">
            <h3>🖼 Images</h3>
            <p>${data.images ?? "-"}</p>
        </div>

        <div class="card">
            <h3>⚠ Missing ALT</h3>
            <p>${data.imagesMissingAlt ?? "-"}</p>
        </div>

        <div class="card">
            <h3>🔗 Links</h3>
            <p>${data.links ?? "-"}</p>
        </div>

        <div class="card">
            <h3>🌍 Language</h3>
            <p>${data.language || "-"}</p>
        </div>

    </div>

    <div class="card full-width">

        <h3>📋 Heading Structure</h3>

        ${
            data.headings && data.headings.length
                ? `<ul>
                    ${data.headings
                        .map(item => `<li>${item}</li>`)
                        .join("")}
                  </ul>`
                : "<p>No headings found.</p>"
        }

    </div>

    <div class="card full-width">

        <h3>💡 Recommendations</h3>

        ${
            data.recommendations && data.recommendations.length
                ? `<ul class="recommendations">
                    ${data.recommendations
                        .map(item => `<li>${item}</li>`)
                        .join("")}
                  </ul>`
                : "<p>✅ No issues detected.</p>"
        }

    </div>

</div>

`;

    }

    catch (error) {

        loader.innerHTML = "";

        report.innerHTML = `
            <div class="error-card">

                <h2>❌ Server Error</h2>

                <p>
                    Unable to connect to the backend server.
                </p>

                <small>${error.message}</small>

            </div>
        `;

    }

}

const themeButton = document.getElementById("themeToggle");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        themeButton.textContent =
            document.body.classList.contains("dark")
                ? "☀️"
                : "🌙";

    });

}