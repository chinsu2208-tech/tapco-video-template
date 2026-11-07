import {VideoData} from './make';
import ToneOverviewDemo from './specs/ToneOverviewDemo';
import ToneAutumnDemo from './specs/ToneAutumnDemo';
import ToneNamTest from './specs/ToneNamTest';

// Thêm spec mới: tạo src/specs/<ID>.ts rồi import + thêm vào mảng dưới.
export const VIDEOS: VideoData[] = [ToneOverviewDemo, ToneAutumnDemo, ToneNamTest];
