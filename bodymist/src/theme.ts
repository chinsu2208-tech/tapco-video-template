// Dòng xịt body "Baby" 5 mùi — mỗi mùi 1 bảng màu + 1 họa tiết + tính cách.
// Brand lấy theo nhãn chai thật (SUMMER LAB). Đổi BRAND nếu cần (hoặc truyền `brand` trong spec).
export const BRAND = 'Summer Lab';
// Ảnh chai thật đã tách nền, dựng thẳng, cao 1000px: public/bm/bottle-<mùi>.png
export const BOTTLE_IMG = (k: ScentKey) => `bm/bottle-${k}.png`;
export const BOTTLE_RATIO = 0.325; // rộng / cao

export type ScentKey = 'puffy' | 'soft' | 'night' | 'angel' | 'joy';
export type ThemeKey = ScentKey | 'mix';

export type Theme = {
  key: ThemeKey;
  name: string; // tên hiển thị
  short: string; // chữ trên nhãn chai
  vibe: string; // 1 dòng mô tả hương
  tags: string[]; // tính cách (lấy đúng mô tả sản phẩm)
  dark?: boolean;
  bg: string; bg2: string; main: string; deep: string; light: string; accent: string; liquid: [string, string]; ink: string;
  motif: 'cloud' | 'petal' | 'moon' | 'pearl' | 'grape' | 'candy';
};

export const THEMES: Record<ThemeKey, Theme> = {
  puffy: {
    key: 'puffy', name: 'Baby Puffy', short: 'PUFFY', vibe: 'hương phấn em bé', tags: ['phấn em bé', 'mềm mại', 'trong trẻo'],
    bg: '#eaf5ff', bg2: '#fffaf0', main: '#7fb6e6', deep: '#3f72a6', light: '#d2e9fc', accent: '#fff0c2', liquid: ['#e3f1ff', '#a9d1f4'], ink: '#26476b', motif: 'cloud',
  },
  soft: {
    key: 'soft', name: 'Baby Soft', short: 'SOFT', vibe: 'hoa ngọt mềm, nhẹ nhàng', tags: ['hoa ngọt', 'nhẹ nhàng', 'nữ tính'],
    bg: '#fff9e8', bg2: '#fff3f1', main: '#f3b33a', deep: '#b9730f', light: '#ffe9a6', accent: '#ffd3de', liquid: ['#fff6d6', '#f7d27a'], ink: '#6a4510', motif: 'petal',
  },
  night: {
    key: 'night', name: 'Baby Night', short: 'NIGHT', vibe: 'ngọt sâu, ấm áp', tags: ['ngọt sâu', 'ấm áp', 'quyến rũ'], dark: true,
    bg: '#2b1842', bg2: '#3b2256', main: '#b39af0', deep: '#f2c46d', light: '#5b3a80', accent: '#f2c46d', liquid: ['#9a5bb8', '#4b1f63'], ink: '#fff3df', motif: 'moon',
  },
  angel: {
    key: 'angel', name: 'Baby Angel', short: 'ANGEL', vibe: 'tiểu thư sang chảnh', tags: ['tiểu thư', 'sang chảnh', 'hơi điệu đà'],
    bg: '#fff1f6', bg2: '#fffaf3', main: '#f08bb2', deep: '#cc4f7d', light: '#ffd8e6', accent: '#fff1cf', liquid: ['#ffe6ef', '#f6a9c6'], ink: '#6c2846', motif: 'pearl',
  },
  joy: {
    key: 'joy', name: 'Baby Joy', short: 'JOY', vibe: 'kẹo nho đáng yêu', tags: ['kẹo nho', 'đáng yêu', 'vui tươi'],
    bg: '#fff0f7', bg2: '#f3ecff', main: '#f07cb0', deep: '#a8459a', light: '#ffd5e9', accent: '#cdb6ff', liquid: ['#ffe2ef', '#c99cf2'], ink: '#57205f', motif: 'grape',
  },
  mix: {
    key: 'mix', name: 'Baby', short: 'BABY', vibe: '5 mùi, 5 tính cách', tags: [],
    bg: '#fff3f7', bg2: '#f5efff', main: '#f07fa6', deep: '#c2457a', light: '#ffd6e5', accent: '#ffe7a3', liquid: ['#ffe3ee', '#f3a6c4'], ink: '#57244a', motif: 'candy',
  },
};

export const SCENTS: ScentKey[] = ['puffy', 'soft', 'night', 'angel', 'joy'];
