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
import {spec as s16} from './specs/v16';
import {spec as s30} from './specs/v30';
import {spec as s31} from './specs/v31';
import {spec as s32} from './specs/v32';
import {spec as s33} from './specs/v33';
import {spec as s34} from './specs/v34';
import {spec as s2} from './specs/v2';
import {spec as s35} from './specs/v35';
import {VideoGen} from './VideoGen';
import {MemeVideo} from './MemeVideo';
import {demo} from './memeSpecs/demo';
import {series} from './memeSpecs/series';
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
  <Composition id="MemeDemo" component={MemeVideo} durationInFrames={786} fps={30} width={1080} height={1920} defaultProps={{spec: demo}} />
  <Composition id="Series100" component={MemeVideo} durationInFrames={915} fps={30} width={1080} height={1920} defaultProps={{spec: series}} />
  <Composition id="Gen16" component={VideoGen} durationInFrames={770} fps={30} width={1080} height={1920} defaultProps={{spec: s16}} />
  <Composition id="Gen30" component={VideoGen} durationInFrames={803} fps={30} width={1080} height={1920} defaultProps={{spec: s30}} />
  <Composition id="Gen31" component={VideoGen} durationInFrames={782} fps={30} width={1080} height={1920} defaultProps={{spec: s31}} />
  <Composition id="Gen32" component={VideoGen} durationInFrames={940} fps={30} width={1080} height={1920} defaultProps={{spec: s32}} />
  <Composition id="Gen33" component={VideoGen} durationInFrames={726} fps={30} width={1080} height={1920} defaultProps={{spec: s33}} />
  <Composition id="Gen34" component={VideoGen} durationInFrames={807} fps={30} width={1080} height={1920} defaultProps={{spec: s34}} />
  <Composition id="Gen2" component={VideoGen} durationInFrames={912} fps={30} width={1080} height={1920} defaultProps={{spec: s2}} />
  <Composition id="Gen35" component={VideoGen} durationInFrames={973} fps={30} width={1080} height={1920} defaultProps={{spec: s35}} />
  </>
);
