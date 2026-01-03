export interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export const processContent = (htmlContent: string): { processedContent: string; toc: TOCItem[] } => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const headings = doc.querySelectorAll("h2, h3");
    const toc: TOCItem[] = [];

    headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        heading.id = id;
        toc.push({
            id,
            text: heading.textContent || "",
            level: parseInt(heading.tagName.substring(1)),
        });
    });

    return {
        processedContent: doc.body.innerHTML,
        toc,
    };
};
