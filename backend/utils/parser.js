const cheerio = require("cheerio");

function parseHTML(html) {

    const $ = cheerio.load(html);

    const title = $("title").text().trim();

    const metaDescription =
        $('meta[name="description"]').attr("content") || "";

    const h1Count = $("h1").length;
    const h2Count = $("h2").length;
    const h3Count = $("h3").length;

    const headings = [];

    $("h1,h2,h3").each((i, el) => {
        headings.push($(el).text().trim());
    });

    const images = $("img").length;

    let imagesMissingAlt = 0;

    $("img").each((i, img) => {

        if (!$(img).attr("alt")) {

            imagesMissingAlt++;

        }

    });

    const links = $("a").length;

    const scripts = $("script").length;

    const stylesheets =
        $('link[rel="stylesheet"]').length;

    const language =
        $("html").attr("lang") || "Unknown";

    const canonical =
        $('link[rel="canonical"]').attr("href") || "";

    const favicon =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href") ||
        "";

    const text = $("body").text();

    const wordCount = text
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter(Boolean).length;

    return {

        title,

        metaDescription,

        h1Count,

        h2Count,

        h3Count,

        headings,

        images,

        imagesMissingAlt,

        links,

        scripts,

        stylesheets,

        language,

        canonical,

        favicon,

        wordCount

    };

}

module.exports = parseHTML;