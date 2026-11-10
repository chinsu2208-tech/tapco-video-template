import {VideoData} from './make';
import MistLineupDemo from './specs/MistLineupDemo';
import MistNightDemo from './specs/MistNightDemo';
import MistAngelDemo from './specs/MistAngelDemo';
import BM62 from './specs/BM62';
import BM63 from './specs/BM63';
import BM64 from './specs/BM64';
import BM65 from './specs/BM65';

// Thêm spec mới: tạo src/specs/<ID>.ts rồi import + thêm vào mảng dưới.
export const VIDEOS: VideoData[] = [MistLineupDemo, MistNightDemo, MistAngelDemo, BM62, BM63, BM64, BM65];
