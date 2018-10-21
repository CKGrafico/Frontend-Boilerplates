/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    className="pt-0"
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="threeColumn">
    {[
      {
        content: '<a href="#">Docs</a> - <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/basic" target="_blank">Repo</a>',
        image: 'https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/spa.png',
        imageAlign: 'top',
        title: 'Basic SPA',
      },
      {
        content: '<a href="#">Docs</a> - <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/ts" target="_blank">Repo</a>',
        image: 'https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/ts.png',
        imageAlign: 'top',
        title: 'TypeScript',
      },
      {
        content: '<a href="#">Docs</a> - <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/vue" target="_blank">Repo</a>',
        image: 'https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/vue.png',
        imageAlign: 'top',
        title: 'Vue',
      },
      {
        content: '<a href="#">Docs</a> - <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/nuxt" target="_blank">Repo</a>',
        image: 'https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nuxt.png',
        imageAlign: 'top',
        title: 'Nuxt',
      },
      {
        content: '<a href="#">Docs</a> - <a href="https://github.com/CKGrafico/Frontend-Boilerplates/tree/node-ts" target="_blank">Repo</a>',
        image: 'https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nodets.png',
        imageAlign: 'top',
        title: 'NodeJS + TS',
      },
    {
      content: '',
      image: '',
      imageAlign: 'top',
      title: '',
    },
    ]}
  </Block>
);


class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer p-0 homePage">
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
