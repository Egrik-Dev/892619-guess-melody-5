import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from "prop-types";
import withAudio from './with-audio';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

MockComponent.propTypes = {
  children: PropTypes.element.isRequired
};

const MockComponentWrapped = withAudio(MockComponent);

it(`withAudio is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onPlayButtonClick={() => {}}
      src={``}
      id={2}
      isPlaying={true}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
