import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Helmet from "react-helmet";

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://cra-ssr.herokuapp.com";

const seo = {
  SITE_URL,
  defaultTitle: "Price Center",
  defaultDescription:
    "This is a really awesome website where we can render on the server. Supa cool.",
  // defaultImage: `${SITE_URL}${logo}`,
  defaultSep: " | ",
};

interface HelmetLayoutProps {
  id: string;
  className: string;
}

class HelmetLayout extends Component<HelmetLayoutProps & RouteComponentProps> {
  getAttrs = (rest) => ({
    lang: "en",
    itemscope: undefined,
    itemtype: `http://schema.org/${rest.schema || "WebPage"}`,
  });

  getTitle = (rest) =>
    rest.title
      ? rest.title + seo.defaultSep + seo.defaultTitle
      : seo.defaultTitle;

  getLinks = (a, pathname) => [
    {
      rel: "canonical",
      href: seo.SITE_URL + pathname,
    },
  ];

  getMetaTags({
    title,
    description,
    image,
    noCrawl,
    published,
    updated,
    category,
    tags,
  }) {
    const theTitle = title
      ? (title + seo.defaultSep + seo.defaultTitle).substring(0, 60)
      : seo.defaultTitle;
    const theDescription = description
      ? description.substring(0, 155)
      : seo.defaultDescription;
    // const theImage = image ? `${SITE_URL}${image}` : seo.defaultImage;

    const metaTags = [
      { itemprop: "name", content: theTitle },
      { itemprop: "description", content: theDescription },
      // { itemprop: 'image', content: theImage },
      { name: "description", content: theDescription },
    ];

    if (noCrawl) {
      metaTags.push({ name: "robots", content: "noindex, nofollow" });
    }
    if (published) {
      metaTags.push({ name: "article:published_time", content: published });
    }
    if (updated) {
      metaTags.push({ name: "article:modified_time", content: updated });
    }
    if (category) {
      metaTags.push({ name: "article:section", content: category });
    }
    if (tags) {
      metaTags.push({ name: "article:tag", content: tags });
    }

    return metaTags;
  }

  render() {
    const { children, id, className, ...rest } = this.props;

    return (
      <main id={id} className={className}>
        <Helmet
          htmlAttributes={this.getAttrs(rest)}
          title={this.getTitle(rest)}
          // link={this.getLinks(rest, this.props.location.pathname)}
          // meta={this.getMetaTags(rest, this.props.location.pathname)}
        />
        {children}
      </main>
    );
  }
}

export default withRouter(HelmetLayout);
