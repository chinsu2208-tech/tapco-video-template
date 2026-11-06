import {VideoData} from './make';
import MistLineupDemo from './specs/MistLineupDemo';
import MistNightDemo from './specs/MistNightDemo';
import MistAngelDemo from './specs/MistAngelDemo';

// Thêm spec mới: tạo src/specs/<ID>.ts rồi import + thêm vào mảng dưới.
export const VIDEOS: VideoData[] = [MistLineupDemo, MistNightDemo, MistAngelDemo];
