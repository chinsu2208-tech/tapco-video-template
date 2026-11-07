// Tonelux — tư vấn personal color + công cụ (vải drape, thẻ màu).
// Nguyên tắc thị giác: NỀN luôn trung tính sang (kem ngà / nâu espresso), VIỀN + CHỮ vàng champagne.
// Màu sắc rực rỡ chỉ xuất hiện TRONG các "mẫu màu" (thẻ, dải vải, chấm) → đa màu mà vẫn thanh lịch.
export const BRAND = 'TONELUX';
export const HANDLE = 'Personal Color Studio';

// Bảng màu nhận diện chung
export const BASE = {
  ivory: '#f6f0e6', // nền sáng
  paper: '#fbf8f2', // thẻ
  sand: '#e9dfcf', // viền nhạt, khối phụ
  ink: '#2b2420', // chữ chính (nâu espresso)
  muted: '#7b6d62', // chữ phụ
  gold: '#b08d57', // champagne gold
  goldLt: '#d9c19a',
  night: '#1f1a17', // nền tối (bản "đêm")
  nightCard: '#2c2521',
};

export type SeasonKey =
  | 'light-spring' | 'true-spring' | 'bright-spring'
  | 'light-summer' | 'true-summer' | 'soft-summer'
  | 'soft-autumn' | 'true-autumn' | 'dark-autumn'
  | 'dark-winter' | 'true-winter' | 'bright-winter';

export type Family = 'spring' | 'summer' | 'autumn' | 'winter';

export type Season = {
  key: SeasonKey;
  family: Family;
  vi: string; // tên tiếng Việt
  en: string; // tên quốc tế (in trên bảng màu Tonelux)
  traits: [string, string, string]; // nhiệt độ / độ sáng / độ trong
  colors: string[]; // 8 màu đại diện, xếp từ nhạt → đậm
};

export const SEASONS: Record<SeasonKey, Season> = {
  'light-spring': {key: 'light-spring', family: 'spring', vi: 'Xuân Nhạt', en: 'Light Spring', traits: ['Ấm nhẹ', 'Sáng', 'Trong trẻo'],
    colors: ['#fbe3b8', '#f9cfae', '#ffb8a0', '#f5d97f', '#b6e0c3', '#9fd3e6', '#f3a9b9', '#e88f7a']},
  'true-spring': {key: 'true-spring', family: 'spring', vi: 'Xuân Ấm', en: 'True Spring', traits: ['Ấm', 'Tươi', 'Rạng rỡ'],
    colors: ['#ffd77a', '#ffc72c', '#ff9f43', '#ff7f50', '#e8505b', '#4cbb6c', '#30b0c7', '#c9752b']},
  'bright-spring': {key: 'bright-spring', family: 'spring', vi: 'Xuân Sáng', en: 'Bright Spring', traits: ['Ấm-trung tính', 'Rực', 'Tương phản'],
    colors: ['#ffe14d', '#ff8a3d', '#ff4f79', '#e3263c', '#13b07a', '#00a6a6', '#2e6fd8', '#7a3fd0']},
  'light-summer': {key: 'light-summer', family: 'summer', vi: 'Hạ Nhạt', en: 'Light Summer', traits: ['Lạnh nhẹ', 'Sáng', 'Mềm'],
    colors: ['#eef0f6', '#dfe7f5', '#c9d7ee', '#cfc4e6', '#e7c1d3', '#b8dccb', '#a9b8d6', '#9c8fc4']},
  'true-summer': {key: 'true-summer', family: 'summer', vi: 'Hạ Lạnh', en: 'True Summer', traits: ['Lạnh', 'Trung bình', 'Dịu'],
    colors: ['#d7deea', '#a9bfd8', '#d995a8', '#c17a9e', '#8e7fb5', '#5f9ea0', '#6f8fb8', '#4a5f80']},
  'soft-summer': {key: 'soft-summer', family: 'summer', vi: 'Hạ Dịu', en: 'Soft Summer', traits: ['Lạnh-trung tính', 'Trung bình', 'Mờ khói'],
    colors: ['#e3dcd6', '#c5a3a0', '#b28c9a', '#9d8aa5', '#a3b1ae', '#8e9aaf', '#7f9183', '#5e6470']},
  'soft-autumn': {key: 'soft-autumn', family: 'autumn', vi: 'Thu Dịu', en: 'Soft Autumn', traits: ['Ấm-trung tính', 'Trung bình', 'Mờ khói'],
    colors: ['#efe0c8', '#d8b78e', '#c8a47e', '#d29b84', '#b58a6e', '#a3a380', '#8c9b7a', '#7c6a58']},
  'true-autumn': {key: 'true-autumn', family: 'autumn', vi: 'Thu Ấm', en: 'True Autumn', traits: ['Ấm', 'Trung bình-đậm', 'Đất'],
    colors: ['#e9c46a', '#d99e2b', '#c1622e', '#b5651d', '#8a4b2a', '#6b7f3a', '#2f6a5c', '#5a3a22']},
  'dark-autumn': {key: 'dark-autumn', family: 'autumn', vi: 'Thu Đậm', en: 'Dark Autumn', traits: ['Ấm-trung tính', 'Đậm', 'Sâu'],
    colors: ['#c99a4b', '#9c6b1b', '#8b3a2f', '#7b2d26', '#8b3a62', '#556b2f', '#1f4e4a', '#3e2c22']},
  'dark-winter': {key: 'dark-winter', family: 'winter', vi: 'Đông Đậm', en: 'Dark Winter', traits: ['Lạnh-trung tính', 'Đậm', 'Sâu'],
    colors: ['#e8e4ec', '#9b1b4a', '#7a0f2b', '#5b2c83', '#2e1a47', '#0b5d4a', '#1b2a49', '#232022']},
  'true-winter': {key: 'true-winter', family: 'winter', vi: 'Đông Lạnh', en: 'True Winter', traits: ['Lạnh', 'Tương phản cao', 'Trong'],
    colors: ['#f7f7fb', '#e0115f', '#c8102e', '#6a1fb0', '#0047ab', '#00875a', '#1a1f3a', '#111111']},
  'bright-winter': {key: 'bright-winter', family: 'winter', vi: 'Đông Sáng', en: 'Bright Winter', traits: ['Lạnh-trung tính', 'Rực', 'Trong'],
    colors: ['#fdf6ff', '#ff4fb0', '#ff1458', '#8a2be2', '#00bfff', '#00c08b', '#1e3a8a', '#16131c']},
};

export const ORDER: SeasonKey[] = [
  'light-spring', 'true-spring', 'bright-spring',
  'light-summer', 'true-summer', 'soft-summer',
  'soft-autumn', 'true-autumn', 'dark-autumn',
  'dark-winter', 'true-winter', 'bright-winter',
];

export const FAMILY: Record<Family, {vi: string; en: string; seasons: SeasonKey[]}> = {
  spring: {vi: 'Xuân', en: 'Spring', seasons: ['light-spring', 'true-spring', 'bright-spring']},
  summer: {vi: 'Hạ', en: 'Summer', seasons: ['light-summer', 'true-summer', 'soft-summer']},
  autumn: {vi: 'Thu', en: 'Autumn', seasons: ['soft-autumn', 'true-autumn', 'dark-autumn']},
  winter: {vi: 'Đông', en: 'Winter', seasons: ['dark-winter', 'true-winter', 'bright-winter']},
};

// Bảng màu "cầu vồng" 12 mùa (lấy màu giữa mỗi mùa) cho cảnh tổng
export const RAINBOW = ORDER.map((k) => SEASONS[k].colors[3]);

// Chữ
export const SERIF = '"Playfair Display", serif';
export const ITALIC = '"Cormorant Garamond", serif';
export const SANS = '"Be Vietnam Pro", sans-serif';
