import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {Video2} from './Video2';
import {Video3, Carousel} from './Video3';
import {Video4} from './Video4';
import {VideoD5} from './VideoD5';
import {VideoD6} from './VideoD6';
import {VideoD7} from './VideoD7';
import {VideoD8} from './VideoD8';
export const Root: React.FC = () => (
  <>
  <Composition id="Carousel" component={Carousel} durationInFrames={120} fps={30} width={1080} height={1350} defaultProps={{n: 1}} />
  <Composition id="TipsXit" component={Video4} durationInFrames={1360} fps={30} width={1080} height={1920} />
  <Composition id="ReviewTips3" component={Video3} durationInFrames={2712} fps={30} width={1080} height={1920} />
  <Composition id="ReviewTips" component={Video2} durationInFrames={1848} fps={30} width={1080} height={1920} />
  <Composition id="CrushTips" component={Video} durationInFrames={923} fps={30} width={1080} height={1920} />
  <Composition id="D5" component={VideoD5} durationInFrames={932} fps={30} width={1080} height={1920} />
  <Composition id="D6" component={VideoD6} durationInFrames={1052} fps={30} width={1080} height={1920} />
  <Composition id="D7" component={VideoD7} durationInFrames={1051} fps={30} width={1080} height={1920} />
  <Composition id="D8" component={VideoD8} durationInFrames={820} fps={30} width={1080} height={1920} />
  </>
);
