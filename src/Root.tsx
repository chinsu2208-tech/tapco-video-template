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
import {tap21} from './memeSpecs/tap21';
import {tap20} from './memeSpecs/tap20';
import {tap19} from './memeSpecs/tap19';
import {tap18} from './memeSpecs/tap18';
import {tap17} from './memeSpecs/tap17';
import {tap46} from './memeSpecs/tap46';
import {tap27} from './memeSpecs/tap27';
import {tap26} from './memeSpecs/tap26';
import {tap25} from './memeSpecs/tap25';
import {tap24} from './memeSpecs/tap24';
import {tap23} from './memeSpecs/tap23';
import {tap22} from './memeSpecs/tap22';
import {tap4} from './memeSpecs/tap4';
import {tap5} from './memeSpecs/tap5';
import {tap7} from './memeSpecs/tap7';
import {tap8} from './memeSpecs/tap8';
import {tap9} from './memeSpecs/tap9';
import {tap10} from './memeSpecs/tap10';
import {tap11} from './memeSpecs/tap11';
import {tap12} from './memeSpecs/tap12';
import {tap13} from './memeSpecs/tap13';
import {tap2} from './memeSpecs/tap2';
import {tap28} from './memeSpecs/tap28';
import {tap29} from './memeSpecs/tap29';
import {tap53} from './memeSpecs/tap53';
import {tap54} from './memeSpecs/tap54';
import {tap55} from './memeSpecs/tap55';
import {tap56} from './memeSpecs/tap56';
import {tap57} from './memeSpecs/tap57';
import {tap58} from './memeSpecs/tap58';
import {tap59} from './memeSpecs/tap59';
import {tap60} from './memeSpecs/tap60';
import {tap61} from './memeSpecs/tap61';
import {tap62} from './memeSpecs/tap62';
import {tap63} from './memeSpecs/tap63';
import {tap64} from './memeSpecs/tap64';
import {tap65} from './memeSpecs/tap65';
import {tap66} from './memeSpecs/tap66';
import {tap67} from './memeSpecs/tap67';
import {tap76} from './memeSpecs/tap76';
import {tap75} from './memeSpecs/tap75';
import {tap74} from './memeSpecs/tap74';
import {tap70} from './memeSpecs/tap70';
import {tap69} from './memeSpecs/tap69';
import {tap68} from './memeSpecs/tap68';
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
  <Composition id="MemeTap21" component={MemeVideo} durationInFrames={820} fps={30} width={1080} height={1920} defaultProps={{spec: tap21}} />
  <Composition id="MemeTap20" component={MemeVideo} durationInFrames={827} fps={30} width={1080} height={1920} defaultProps={{spec: tap20}} />
  <Composition id="MemeTap19" component={MemeVideo} durationInFrames={866} fps={30} width={1080} height={1920} defaultProps={{spec: tap19}} />
  <Composition id="MemeTap18" component={MemeVideo} durationInFrames={847} fps={30} width={1080} height={1920} defaultProps={{spec: tap18}} />
  <Composition id="MemeTap17" component={MemeVideo} durationInFrames={735} fps={30} width={1080} height={1920} defaultProps={{spec: tap17}} />
  <Composition id="MemeTap46" component={MemeVideo} durationInFrames={856} fps={30} width={1080} height={1920} defaultProps={{spec: tap46}} />
  <Composition id="MemeTap27" component={MemeVideo} durationInFrames={866} fps={30} width={1080} height={1920} defaultProps={{spec: tap27}} />
  <Composition id="MemeTap26" component={MemeVideo} durationInFrames={817} fps={30} width={1080} height={1920} defaultProps={{spec: tap26}} />
  <Composition id="MemeTap25" component={MemeVideo} durationInFrames={1027} fps={30} width={1080} height={1920} defaultProps={{spec: tap25}} />
  <Composition id="MemeTap24" component={MemeVideo} durationInFrames={802} fps={30} width={1080} height={1920} defaultProps={{spec: tap24}} />
  <Composition id="MemeTap23" component={MemeVideo} durationInFrames={858} fps={30} width={1080} height={1920} defaultProps={{spec: tap23}} />
  <Composition id="MemeTap22" component={MemeVideo} durationInFrames={658} fps={30} width={1080} height={1920} defaultProps={{spec: tap22}} />
  <Composition id="MemeTap4" component={MemeVideo} durationInFrames={1380} fps={30} width={1080} height={1920} defaultProps={{spec: tap4}} />
  <Composition id="MemeTap5" component={MemeVideo} durationInFrames={942} fps={30} width={1080} height={1920} defaultProps={{spec: tap5}} />
  <Composition id="MemeTap7" component={MemeVideo} durationInFrames={1061} fps={30} width={1080} height={1920} defaultProps={{spec: tap7}} />
  <Composition id="MemeTap8" component={MemeVideo} durationInFrames={830} fps={30} width={1080} height={1920} defaultProps={{spec: tap8}} />
  <Composition id="MemeTap9" component={MemeVideo} durationInFrames={776} fps={30} width={1080} height={1920} defaultProps={{spec: tap9}} />
  <Composition id="MemeTap10" component={MemeVideo} durationInFrames={876} fps={30} width={1080} height={1920} defaultProps={{spec: tap10}} />
  <Composition id="MemeTap11" component={MemeVideo} durationInFrames={891} fps={30} width={1080} height={1920} defaultProps={{spec: tap11}} />
  <Composition id="MemeTap12" component={MemeVideo} durationInFrames={940} fps={30} width={1080} height={1920} defaultProps={{spec: tap12}} />
  <Composition id="MemeTap13" component={MemeVideo} durationInFrames={902} fps={30} width={1080} height={1920} defaultProps={{spec: tap13}} />
  <Composition id="MemeTap2" component={MemeVideo} durationInFrames={860} fps={30} width={1080} height={1920} defaultProps={{spec: tap2}} />
  <Composition id="MemeTap28" component={MemeVideo} durationInFrames={763} fps={30} width={1080} height={1920} defaultProps={{spec: tap28}} />
  <Composition id="MemeTap29" component={MemeVideo} durationInFrames={803} fps={30} width={1080} height={1920} defaultProps={{spec: tap29}} />
  <Composition id="MemeTap53" component={MemeVideo} durationInFrames={768} fps={30} width={1080} height={1920} defaultProps={{spec: tap53}} />
  <Composition id="MemeTap54" component={MemeVideo} durationInFrames={866} fps={30} width={1080} height={1920} defaultProps={{spec: tap54}} />
  <Composition id="MemeTap55" component={MemeVideo} durationInFrames={858} fps={30} width={1080} height={1920} defaultProps={{spec: tap55}} />
  <Composition id="MemeTap56" component={MemeVideo} durationInFrames={977} fps={30} width={1080} height={1920} defaultProps={{spec: tap56}} />
  <Composition id="MemeTap57" component={MemeVideo} durationInFrames={968} fps={30} width={1080} height={1920} defaultProps={{spec: tap57}} />
  <Composition id="MemeTap58" component={MemeVideo} durationInFrames={887} fps={30} width={1080} height={1920} defaultProps={{spec: tap58}} />
  <Composition id="MemeTap59" component={MemeVideo} durationInFrames={707} fps={30} width={1080} height={1920} defaultProps={{spec: tap59}} />
  <Composition id="MemeTap60" component={MemeVideo} durationInFrames={797} fps={30} width={1080} height={1920} defaultProps={{spec: tap60}} />
  <Composition id="MemeTap61" component={MemeVideo} durationInFrames={801} fps={30} width={1080} height={1920} defaultProps={{spec: tap61}} />
  <Composition id="MemeTap62" component={MemeVideo} durationInFrames={921} fps={30} width={1080} height={1920} defaultProps={{spec: tap62}} />
  <Composition id="MemeTap63" component={MemeVideo} durationInFrames={828} fps={30} width={1080} height={1920} defaultProps={{spec: tap63}} />
  <Composition id="MemeTap64" component={MemeVideo} durationInFrames={969} fps={30} width={1080} height={1920} defaultProps={{spec: tap64}} />
  <Composition id="MemeTap65" component={MemeVideo} durationInFrames={925} fps={30} width={1080} height={1920} defaultProps={{spec: tap65}} />
  <Composition id="MemeTap66" component={MemeVideo} durationInFrames={898} fps={30} width={1080} height={1920} defaultProps={{spec: tap66}} />
  <Composition id="MemeTap67" component={MemeVideo} durationInFrames={1034} fps={30} width={1080} height={1920} defaultProps={{spec: tap67}} />
  <Composition id="MemeTap76" component={MemeVideo} durationInFrames={815} fps={30} width={1080} height={1920} defaultProps={{spec: tap76}} />
  <Composition id="MemeTap75" component={MemeVideo} durationInFrames={815} fps={30} width={1080} height={1920} defaultProps={{spec: tap75}} />
  <Composition id="MemeTap74" component={MemeVideo} durationInFrames={913} fps={30} width={1080} height={1920} defaultProps={{spec: tap74}} />
  <Composition id="MemeTap70" component={MemeVideo} durationInFrames={860} fps={30} width={1080} height={1920} defaultProps={{spec: tap70}} />
  <Composition id="MemeTap69" component={MemeVideo} durationInFrames={780} fps={30} width={1080} height={1920} defaultProps={{spec: tap69}} />
  <Composition id="MemeTap68" component={MemeVideo} durationInFrames={814} fps={30} width={1080} height={1920} defaultProps={{spec: tap68}} />
  </>
);
