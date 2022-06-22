// // ButtonGroup.stories.js|jsx

// import React from 'react';

// import { ButtonGroupTest } from './ButtonGroup';

// //👇 Imports the Button stories
// import * as ButtonStories from './Button.stories';

// export default {
//   /* 👇 The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'ButtonGroup',
//   component: ButtonGroupTest,
// };

// const Template = (args) => <ButtonGroupTest {...args} />;

// export const Pair = Template.bind({});
// Pair.args = {
//   buttons: [
//     { ...ButtonStories.Primary.args },
//     { ...ButtonStories.Secondary.args }
//   ],
//   orientation: 'horizontal',
// };