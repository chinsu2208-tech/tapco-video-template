import React from 'react';
import {Composition} from 'remotion';
import {BodyMist} from './BodyMist';
import {VIDEOS} from './data';

export const Root: React.FC = () => (
  <>
    {VIDEOS.map((d) => (
      <Composition key={d.id} id={d.id} component={BodyMist as any} durationInFrames={Math.ceil(d.dur * 30)} fps={30} width={1080} height={1920} defaultProps={{data: d}} />
    ))}
  </>
);
