import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {Video2} from './Video2';
import {Video3, Carousel} from './Video3';
import {Video4} from './Video4';
import {Video12} from './Video12';
import {Video13} from './Video13';
import {Video14} from './Video14';
import {Video15} from './Video15';
export const Root: React.FC = () => (
  <>
  <Composition id="Carousel" component={Carousel} durationInFrames={120} fps={30} width={1080} height={1350} defaultProps={{n: 1}} />
  <Composition id="TipsXit" component={Video4} durationInFrames={1360} fps={30} width={1080} height={1920} />
  <Composition id="ReviewTips3" component={Video3} durationInFrames={2712} fps={30} width={1080} height={1920} />
  <Composition id="ReviewTips" component={Video2} durationInFrames={1848} fps={30} width={1080} height={1920} />
  <Composition id="CrushTips" component={Video} durationInFrames={923} fps={30} width={1080} height={1920} />
  <Composition id="Tips12" component={Video12} durationInFrames={921} fps={30} width={1080} height={1920} />
  <Composition id="Tips13" component={Video13} durationInFrames={883} fps={30} width={1080} height={1920} />
  <Composition id="Tips14" component={Video14} durationInFrames={786} fps={30} width={1080} height={1920} />
  <Composition id="Tips15" component={Video15} durationInFrames={909} fps={30} width={1080} height={1920} />
  </>
);
