<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
            <head>
                <title><xsl:value-of select="/rss/channel/title"/> - RSS Feed</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style type="text/css">
                    body {
                        font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        background-color: #fdfbf7;
                        color: #4a3728;
                        line-height: 1.6;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 800px;
                        margin: 40px auto;
                        padding: 20px;
                    }
                    .header {
                        text-align: center;
                        padding-bottom: 40px;
                        border-bottom: 2px solid #f5e1a4;
                        margin-bottom: 40px;
                    }
                    .header h1 {
                        color: #b45309;
                        margin: 0;
                        font-size: 2.5rem;
                    }
                    .header p {
                        color: #78350f;
                        font-size: 1.1rem;
                    }
                    .item {
                        background: white;
                        padding: 30px;
                        border-radius: 12px;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                        margin-bottom: 30px;
                        border: 1px solid #f5e1a4;
                    }
                    .item h2 a {
                        color: #b45309;
                        text-decoration: none;
                        font-size: 1.5rem;
                    }
                    .item h2 a:hover {
                        text-decoration: underline;
                    }
                    .meta {
                        font-size: 0.9rem;
                        color: #92400e;
                        margin-bottom: 15px;
                    }
                    .description {
                        color: #4a3728;
                        margin-bottom: 20px;
                    }
                    .btn {
                        display: inline-block;
                        background: #b45309;
                        color: white;
                        padding: 10px 20px;
                        border-radius: 6px;
                        text-decoration: none;
                        font-weight: 600;
                        transition: background 0.2s;
                    }
                    .btn:hover {
                        background: #92400e;
                    }
                    .alert {
                        background: #fffbeb;
                        border: 1px solid #fef3c7;
                        padding: 15px;
                        border-radius: 8px;
                        margin-bottom: 30px;
                        font-size: 0.9rem;
                        color: #92400e;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1><xsl:value-of select="/rss/channel/title"/></h1>
                        <p><xsl:value-of select="/rss/channel/description"/></p>
                    </div>

                    <div class="alert">
                        This is an RSS Feed. Subscribe to this URL in your favorite RSS reader to get the latest updates from Gauswarn India.
                    </div>

                    <xsl:for-each select="/rss/channel/item">
                        <div class="item">
                            <div class="meta">
                                <xsl:value-of select="pubDate"/> | <xsl:value-of select="category"/>
                            </div>
                            <h2>
                                <a href="{link}"><xsl:value-of select="title"/></a>
                            </h2>
                            <div class="description">
                                <xsl:value-of select="description"/>
                            </div>
                            <a href="{link}" class="btn">Read Full Article</a>
                        </div>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
