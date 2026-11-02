import React from 'react';
import {Composition} from 'remotion';
import {BaziScript, BZ_TOTAL} from './BaziScript';
import {Bazi1992, BZ_TOTAL as T1992} from './Bazi1992';

export const Root: React.FC = () => (
  <>
    <Composition id="BaziScript" component={BaziScript} width={1080} height={1920} fps={30} durationInFrames={BZ_TOTAL} />
    <Composition id="BaziScript15" component={BaziScript} width={1080} height={1920} fps={15} durationInFrames={Math.round(BZ_TOTAL / 2)} />
    <Composition id="Bazi1992" component={Bazi1992} width={1080} height={1920} fps={30} durationInFrames={T1992} />
    <Composition id="Bazi1992-15" component={Bazi1992} width={1080} height={1920} fps={15} durationInFrames={Math.round(T1992 / 2)} />
  </>
);
