import {VideoData} from './make';
import MistLineupDemo from './specs/MistLineupDemo';
import MistNightDemo from './specs/MistNightDemo';
import MistAngelDemo from './specs/MistAngelDemo';
import BM62 from './specs/BM62';
import BM63 from './specs/BM63';
import BM64 from './specs/BM64';
import BM65 from './specs/BM65';
import BM94 from './specs/BM94';
import BM95 from './specs/BM95';
import BM96 from './specs/BM96';
import BM97 from './specs/BM97';

// Thêm spec mới: tạo src/specs/<ID>.ts rồi import + thêm vào mảng dưới.
export const VIDEOS: VideoData[] = [MistLineupDemo, MistNightDemo, MistAngelDemo, BM62, BM63, BM64, BM65, BM94, BM95, BM96, BM97];
