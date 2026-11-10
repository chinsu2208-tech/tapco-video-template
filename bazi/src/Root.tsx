import React from 'react';
import {Composition} from 'remotion';
import {BaziScript, BZ_TOTAL} from './BaziScript';
import {Bazi1992, BZ_TOTAL as T1992} from './Bazi1992';
import {BaziThucThuong, TT_TOTAL} from './BaziThucThuong';
import {BaziR8, R8_TOTAL} from './BaziR8';
import {BaziR9, R9_TOTAL} from './BaziR9';
import {BaziR10, R10_TOTAL} from './BaziR10';
import {BaziR11, R11_TOTAL} from './BaziR11';
import {BaziR12, R12_TOTAL} from './BaziR12';
import {BaziR13, R13_TOTAL} from './BaziR13';
import {BaziR14, R14_TOTAL} from './BaziR14';
import {BaziR15, R15_TOTAL} from './BaziR15';
import {BaziR16, R16_TOTAL} from './BaziR16';

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
    <Composition id="BaziR11" component={BaziR11} width={1080} height={1920} fps={30} durationInFrames={R11_TOTAL} />
    <Composition id="BaziR11-15" component={BaziR11} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R11_TOTAL / 2)} />
    <Composition id="BaziR11-guide" component={BaziR11} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R11_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR12" component={BaziR12} width={1080} height={1920} fps={30} durationInFrames={R12_TOTAL} />
    <Composition id="BaziR12-15" component={BaziR12} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R12_TOTAL / 2)} />
    <Composition id="BaziR12-guide" component={BaziR12} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R12_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR13" component={BaziR13} width={1080} height={1920} fps={30} durationInFrames={R13_TOTAL} />
    <Composition id="BaziR13-15" component={BaziR13} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R13_TOTAL / 2)} />
    <Composition id="BaziR13-guide" component={BaziR13} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R13_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR14" component={BaziR14} width={1080} height={1920} fps={30} durationInFrames={R14_TOTAL} />
    <Composition id="BaziR14-15" component={BaziR14} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R14_TOTAL / 2)} />
    <Composition id="BaziR14-guide" component={BaziR14} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R14_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR15" component={BaziR15} width={1080} height={1920} fps={30} durationInFrames={R15_TOTAL} />
    <Composition id="BaziR15-15" component={BaziR15} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R15_TOTAL / 2)} />
    <Composition id="BaziR15-guide" component={BaziR15} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R15_TOTAL / 2)} defaultProps={{guide: true}} />
    <Composition id="BaziR16" component={BaziR16} width={1080} height={1920} fps={30} durationInFrames={R16_TOTAL} />
    <Composition id="BaziR16-15" component={BaziR16} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R16_TOTAL / 2)} />
    <Composition id="BaziR16-guide" component={BaziR16} width={1080} height={1920} fps={15} durationInFrames={Math.ceil(R16_TOTAL / 2)} defaultProps={{guide: true}} />
  </>
);
