import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

configure({adapter: new Adapter()});

it(`Click by Play button calls callback`, () => {
  const handlePlayButtonClicl = jest.fn();

  const wrapper = shallow(
      <AudioPlayer
        id={2}
        isPlaying={true}
        isLoading={false}
        onPlayButtonClick={handlePlayButtonClicl}>
        <audio />
      </AudioPlayer>
  );

  wrapper.find(`.track__button`).simulate(`click`);
  expect(handlePlayButtonClicl).toHaveBeenCalledTimes(1);
});

