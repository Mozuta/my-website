/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  /*mySidebar: [
    {
      type: 'autogenerated',
      dirName: '.docs', // 从 docs 文件夹（或 versioned_docs/<version>）生成侧边栏
    },
  ],*/
  /*SerialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Serial',
      items: ['serial-fiction/DD'],
    },
  ],*/

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
