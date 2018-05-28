import { configure, addDecorator } from '@storybook/react';

// add padding to avoid edge-sticking
addDecorator( story => (
  <div style={{padding: '20px'}}>
    {story()}
  </div>
));

// stories are defined in src/stories
function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);