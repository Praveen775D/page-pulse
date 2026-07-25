const axios = require("axios");
const parseHTML = require("../utils/parser");
const validateUrl = require("../utils/validator");

exports.analyzeWebsite = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            success: false,
            error: "URL is required."
        });
    }

    if (!validateUrl(url)) {
        return res.status(400).json({
            success: false,
            error: "Invalid URL."
        });
    }

    try {

        const start = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
            maxRedirects: 5,
            responseType: "text",
            headers: {
                "User-Agent": "PagePulse/1.0"
            }
        });

        const end = Date.now();

        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            return res.status(415).json({
                success: false,
                error: "The URL does not return an HTML page."
            });
        }

        const pageSize =
            (
                Buffer.byteLength(response.data, "utf8") / 1024
            ).toFixed(2);

        const report = parseHTML(response.data);

        const recommendations = [];

        if (!report.title)
            recommendations.push("Missing page title.");

        if (!report.metaDescription)
            recommendations.push("Missing meta description.");

        if (report.h1Count === 0)
            recommendations.push("No H1 heading found.");

        if (report.h1Count > 1)
            recommendations.push("Multiple H1 headings detected.");

        if (report.imagesMissingAlt > 0)
            recommendations.push(
                `${report.imagesMissingAlt} image(s) missing ALT text.`
            );

        if (report.wordCount < 300)
            recommendations.push(
                "Very little content on the page."
            );

        const seoScore =
            Math.max(
                100 - recommendations.length * 8,
                40
            );

        res.json({

            success: true,

            website: url,

            status: response.status,

            responseTime: `${end - start} ms`,

            pageSize: `${pageSize} KB`,

            seoScore,

            ...report,

            recommendations

        });

    }

    catch (err) {

        if (err.code === "ECONNABORTED") {

            return res.status(408).json({

                success: false,

                error: "Request timed out."

            });

        }

        if (err.response) {

            return res.status(err.response.status).json({

                success: false,

                error: `Website returned HTTP ${err.response.status}`

            });

        }

        return res.status(500).json({

            success: false,

            error: "Unable to analyze website."

        });

    }

};