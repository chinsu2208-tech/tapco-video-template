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
import {MemeVideo} from './MemeVideo';
import {demo} from './memeSpecs/demo';
import {series} from './memeSpecs/series';
import {tap16} from './memeSpecs/tap16';
import {tap30} from './memeSpecs/tap30';
import {tap31} from './memeSpecs/tap31';
import {tap32} from './memeSpecs/tap32';
import {tap33} from './memeSpecs/tap33';
import {tap34} from './memeSpecs/tap34';
import {tap39} from './memeSpecs/tap39';
import {tap40} from './memeSpecs/tap40';
import {tap41} from './memeSpecs/tap41';
import {tap42} from './memeSpecs/tap42';
import {tap43} from './memeSpecs/tap43';
import {tap44} from './memeSpecs/tap44';
import {tap45} from './memeSpecs/tap45';
import {tap4} from './memeSpecs/tap4';
import {tap5} from './memeSpecs/tap5';
import {tap7} from './memeSpecs/tap7';
import {tap8} from './memeSpecs/tap8';
import {tap9} from './memeSpecs/tap9';
import {tap10} from './memeSpecs/tap10';
import {tap11} from './memeSpecs/tap11';
import {tap12} from './memeSpecs/tap12';
import {tap13} from './memeSpecs/tap13';
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
  <Composition id="MemeTap16" component={MemeVideo} durationInFrames={762} fps={30} width={1080} height={1920} defaultProps={{spec: tap16}} />
  <Composition id="MemeTap30" component={MemeVideo} durationInFrames={795} fps={30} width={1080} height={1920} defaultProps={{spec: tap30}} />
  <Composition id="MemeTap31" component={MemeVideo} durationInFrames={774} fps={30} width={1080} height={1920} defaultProps={{spec: tap31}} />
  <Composition id="MemeTap32" component={MemeVideo} durationInFrames={931} fps={30} width={1080} height={1920} defaultProps={{spec: tap32}} />
  <Composition id="MemeTap33" component={MemeVideo} durationInFrames={717} fps={30} width={1080} height={1920} defaultProps={{spec: tap33}} />
  <Composition id="MemeTap34" component={MemeVideo} durationInFrames={798} fps={30} width={1080} height={1920} defaultProps={{spec: tap34}} />
  <Composition id="MemeTap39" component={MemeVideo} durationInFrames={873} fps={30} width={1080} height={1920} defaultProps={{spec: tap39}} />
  <Composition id="MemeTap40" component={MemeVideo} durationInFrames={792} fps={30} width={1080} height={1920} defaultProps={{spec: tap40}} />
  <Composition id="MemeTap41" component={MemeVideo} durationInFrames={981} fps={30} width={1080} height={1920} defaultProps={{spec: tap41}} />
  <Composition id="MemeTap42" component={MemeVideo} durationInFrames={968} fps={30} width={1080} height={1920} defaultProps={{spec: tap42}} />
  <Composition id="MemeTap43" component={MemeVideo} durationInFrames={822} fps={30} width={1080} height={1920} defaultProps={{spec: tap43}} />
  <Composition id="MemeTap44" component={MemeVideo} durationInFrames={915} fps={30} width={1080} height={1920} defaultProps={{spec: tap44}} />
  <Composition id="MemeTap45" component={MemeVideo} durationInFrames={983} fps={30} width={1080} height={1920} defaultProps={{spec: tap45}} />
  <Composition id="MemeTap4" component={MemeVideo} durationInFrames={1380} fps={30} width={1080} height={1920} defaultProps={{spec: tap4}} />
  <Composition id="MemeTap5" component={MemeVideo} durationInFrames={942} fps={30} width={1080} height={1920} defaultProps={{spec: tap5}} />
  <Composition id="MemeTap7" component={MemeVideo} durationInFrames={1061} fps={30} width={1080} height={1920} defaultProps={{spec: tap7}} />
  <Composition id="MemeTap8" component={MemeVideo} durationInFrames={830} fps={30} width={1080} height={1920} defaultProps={{spec: tap8}} />
  <Composition id="MemeTap9" component={MemeVideo} durationInFrames={776} fps={30} width={1080} height={1920} defaultProps={{spec: tap9}} />
  <Composition id="MemeTap10" component={MemeVideo} durationInFrames={876} fps={30} width={1080} height={1920} defaultProps={{spec: tap10}} />
  <Composition id="MemeTap11" component={MemeVideo} durationInFrames={891} fps={30} width={1080} height={1920} defaultProps={{spec: tap11}} />
  <Composition id="MemeTap12" component={MemeVideo} durationInFrames={940} fps={30} width={1080} height={1920} defaultProps={{spec: tap12}} />
  <Composition id="MemeTap13" component={MemeVideo} durationInFrames={902} fps={30} width={1080} height={1920} defaultProps={{spec: tap13}} />
  </>
);
