import React from 'react';
import {Composition} from 'remotion';
import {BaziScript, BZ_TOTAL} from './BaziScript';
import {Bazi1992, BZ_TOTAL as T1992} from './Bazi1992';
import {BaziThucThuong, TT_TOTAL} from './BaziThucThuong';
import {BaziR8, R8_TOTAL} from './BaziR8';
import {BaziR9, R9_TOTAL} from './BaziR9';
import {BaziR10, R10_TOTAL} from './BaziR10';

export const Root: React.FC = () => (
  <>
    <Composition id="BaziScript" component={BaziScript} width={1080} height={1920} fps={30} durationInFrames={BZ_TOTAL} />
    <Composition id="BaziScript15" component={BaziScript} width={1080} height={1920} fps={15} durationInFrames={Math.round(BZ_TOTAL / 2)} />
    <Composition id="Bazi1992" component={Bazi1992} width={1080} height={1920} fps={30} durationInFrames={T1992} />
    <Composition id="Bazi1992-15" component={Bazi1992} width={1080} height={1920} fps={15} durationInFrames={Math.round(T1992 / 2)} />
    <Composition id="BaziThucThuong" component={BaziThucThuong} width={1080} height={1920} fps={30} durationInFrames={TT_TOTAL} />
    <Composition id="BaziThucThuong-15" component={BaziThucThuong} width={1080} height={1920} fps={15} durationInFrames={Math.round(TT_TOTAL / 2)} />
    <Composition id="BaziThucThuong-guide" component={BaziThucThuong} width={1080} height={1920} fps={15} durationInFrames={Math.round(TT_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR8" component={BaziR8} width={1080} height={1920} fps={30} durationInFrames={R8_TOTAL} />
    <Composition id="BaziR8-15" component={BaziR8} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R8_TOTAL / 2)} />
    <Composition id="BaziR8-guide" component={BaziR8} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R8_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR9" component={BaziR9} width={1080} height={1920} fps={30} durationInFrames={R9_TOTAL} />
    <Composition id="BaziR9-15" component={BaziR9} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R9_TOTAL / 2)} />
    <Composition id="BaziR9-guide" component={BaziR9} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R9_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR10" component={BaziR10} width={1080} height={1920} fps={30} durationInFrames={R10_TOTAL} />
    <Composition id="BaziR10-15" component={BaziR10} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R10_TOTAL / 2)} />
    <Composition id="BaziR10-guide" component={BaziR10} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R10_TOTAL / 2)} defaultProps={{guide: true}} />
  </>
);
