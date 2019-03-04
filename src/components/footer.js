import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata;
        const { github, instagram, linkedin } = social;
        return (
          <footer>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a> &#8259;&nbsp;
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              photos
            </a> &#8259;&nbsp;
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </footer>
        )
      }}
    />
  );
}

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          github,
          instagram,
          linkedin
        }
      }
    }
  }
`;

export default Footer;