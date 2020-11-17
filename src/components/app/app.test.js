import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

describe(`Render App`, () => {
  it(`Should App render correctly with WelcomeScreen component`, () => {
    const noop = () => {};
    const tree = renderer
      .create(<App
        isLoading={false}
        fetchQuestionsAction={noop}
        checkAuthAction={noop}
        loadDone={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should App render correctly with Loading`, () => {
    const noop = () => {};
    const tree = renderer
      .create(<App
        isLoading={true}
        fetchQuestionsAction={noop}
        checkAuthAction={noop}
        loadDone={noop}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
