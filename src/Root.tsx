import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {Video2} from './Video2';
import {Video3, Carousel} from './Video3';
import {Video4} from './Video4';
import {TapDong9, TapDong10, TapDong11} from './Video5';
export const Root: React.FC = () => (
  <>
  <Composition id="TapDong9" component={TapDong9} durationInFrames={746} fps={30} width={1080} height={1920} />
  <Composition id="TapDong10" component={TapDong10} durationInFrames={846} fps={30} width={1080} height={1920} />
  <Composition id="TapDong11" component={TapDong11} durationInFrames={861} fps={30} width={1080} height={1920} />
  <Composition id="Carousel" component={Carousel} durationInFrames={120} fps={30} width={1080} height={1350} defaultProps={{n: 1}} />
  <Composition id="TipsXit" component={Video4} durationInFrames={1360} fps={30} width={1080} height={1920} />
  <Composition id="ReviewTips3" component={Video3} durationInFrames={2712} fps={30} width={1080} height={1920} />
  <Composition id="ReviewTips" component={Video2} durationInFrames={1848} fps={30} width={1080} height={1920} />
  <Composition id="CrushTips" component={Video} durationInFrames={923} fps={30} width={1080} height={1920} />
  </>
);
