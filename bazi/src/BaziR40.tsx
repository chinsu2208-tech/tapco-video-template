import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Jar, Briefcase, Block, Calendar, Clock, Tag, Tick, Cross, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR40.json';

// ====== Dòng 40 · Chưa biết giờ sinh, mẹ còn nhớ: trụ giờ là 1/4 lá số · 9 cảnh ======
// Bốn trụ để trống "?" (chưa có dữ liệu thật); nhân vật mẹ/con là minh hoạ.
// Mốc: src/capR40.json (align_dp)
export const R40_TOTAL = totalFrames(43.464);

// hình tròn 4 phần, k = số phần đã tô (0..4)
const Pie: React.FC<{k: number}> = ({k}) => {
  const cols = [P.yellow, P.mint, P.coral, P.blue];
  return (
    <g>
      <circle r={180} fill="#fff" {...L} />
      {cols.map((c, i) => {
        const o = Math.max(0, Math.min(1, k - i));
        if (o < 0.01) return null;
        const a0 = -90 + i * 90, a1 = a0 + 90;
        const p = (a: number) => `${Math.cos((a * Math.PI) / 180) * 180} ${Math.sin((a * Math.PI) / 180) * 180}`;
        return <path key={i} d={`M0 0 L${p(a0)} A180 180 0 0 1 ${p(a1)}Z`} fill={c} {...L} opacity={o} />;
      })}
      {k < 3.99 && <text x={-90} y={-60} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={70} fill={P.navy} opacity={A(k, 3, 0.5)}>?</text>}
    </g>
  );
};

// 1. HOOK 0–3.75
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Bạn chưa biết" text="Giờ sinh?" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.5} x={280} y={1220} s={0.95}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={0.9} x={280} y={900} r={-4}><Tag w={110} h={100} fill="#fff"><TT size={70} y={24}>?</TT></Tag></Pop>
      <Pop t={t} at={1.5} x={700} y={1220} s={1.1}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={1.7} t={t} x={700} y={1330} w={140} fill={P.yellow} r={2} size={34}>mẹ</Lbl>
      <Pop t={t} at={2.5} x={700} y={820} s={0.6}><Clock t={t} /></Pop>
      <Pop t={t} at={3.1} x={840} y={980}><Heart /></Pop>
      <Note t={t} at={3.2} x={500} y={1460} size={30}>nhớ rõ như mới hôm qua</Note>
    </g>
  </g>
);

// 2. GIỜ SINH LÀ 1 TRONG 4 TRỤ 3.75–6.48
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={3.8} note="Ít người để ý" text="Trụ giờ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={4.6} x={420} y={1020}><Pillar name="giờ" fill={P.blue} hi={A(t, 5.3, 0.4)} /></Pop>
      <Pop t={t} at={4.9} x={720} y={860} s={0.6}><Clock t={t} /></Pop>
      <Lbl at={5.6} t={t} x={720} y={1080} w={280} fill={P.yellow} r={2} size={34}>1 trong 4 trụ</Lbl>
    </g>
  </g>
);

// 3. BỐN TRỤ · THIÊN CAN + ĐỊA CHI 6.48–14.64
const PAT = [7.9, 8.6, 10.4, 11.1];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={6.53} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={1000} s={0.85}><Pillar name={n} fill={PF[i]} hi={i === 3 ? A(t, 11.4, 0.4) : 0} /></Pop>
      ))}
      <Lbl at={13.2} t={t} x={300} y={1290} w={260} fill={P.yellow} r={-2} size={34}>thiên can ↑</Lbl>
      <Lbl at={14.0} t={t} x={680} y={1290} w={260} fill="#fff" r={2} size={34}>địa chi ↓</Lbl>
      <Note t={t} at={8.2} x={500} y={1420} size={24}>khung trụ trống · minh hoạ</Note>
    </g>
  </g>
);

// 4. THIẾU TRỤ GIỜ = 3/4 BỨC TRANH 14.64–18.23
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={14.7} note="Thiếu trụ giờ" text="Ba phần tư" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={15.2} x={500} y={1000}><Pie k={Math.min(3, A(t, 16.2, 1.4) * 3)} /></Pop>
      <Pop t={t} at={17.6} x={360} y={820}><Cross /></Pop>
      <Note t={t} at={17.6} x={500} y={1260} size={32}>thiếu một góc bức tranh</Note>
    </g>
  </g>
);

// 5. THIẾU CHI TIẾT: VIỆC · KIẾM · GIỮ TIỀN · ÁP LỰC · QUAN HỆ 18.23–27.57
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={18.28} note="Điều này có nghĩa là" text="Thiếu chi tiết" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={20.9} x={220} y={800} s={0.5}><Briefcase /></Pop>
      <Note t={t} at={21.0} x={220} y={890} size={26}>làm việc</Note>
      <Pop t={t} at={21.7} x={500} y={790}><Coin r={50} /></Pop>
      <Note t={t} at={21.8} x={500} y={890} size={26}>kiếm tiền</Note>
      <Pop t={t} at={22.4} x={780} y={790} s={0.4}><Jar lid fill={0.6} /></Pop>
      <Note t={t} at={22.5} x={780} y={890} size={26}>giữ tiền</Note>
      <Pop t={t} at={23.6} x={330} y={1070} s={0.45}><Block txt="áp lực" /></Pop>
      <Pop t={t} at={24.5} x={670} y={1070}><Heart /></Pop>
      <Note t={t} at={24.6} x={670} y={1150} size={26}>các mối quan hệ</Note>
      <Lbl at={26.0} t={t} x={500} y={1330} w={460} fill="#fff" r={-1} size={36}>chi tiết quan trọng</Lbl>
      <Pop t={t} at={26.6} x={790} y={1260} r={6}><Tag w={90} h={90} fill={P.yellow}><TT size={60} y={20}>?</TT></Tag></Pop>
    </g>
  </g>
);

// 6. CHỈ NHỚ NĂM SINH, QUÊN HỎI GIỜ 27.57–32.13
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={27.62} note="Nhiều người chỉ nhớ" text="Năm sinh" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={29.6} x={300} y={1000} s={0.9}><Calendar label="năm" /></Pop>
      <Pop t={t} at={30.2} x={420} y={880}><Tick /></Pop>
      <Pop t={t} at={31.2} x={700} y={1000} s={0.75}><Clock t={t} /></Pop>
      <Pop t={t} at={31.7} x={820} y={880}><Cross /></Pop>
      <Lbl at={31.5} t={t} x={500} y={1300} w={300} fill={P.coral} r={1} size={36}>quên hỏi giờ</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 32.13–36.56
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={32.13} strikeAt={33.2} gearAt={34.4} okAt={35.4} tint={P.mint} />;

// 8. HỎI MẸ MỘT LẦN 36.56–39.63
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={36.6} note="Hãy hỏi mẹ" text="Một lần" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={36.9} x={300} y={1180} s={0.95}><Person c={P.blue} mood="talk" /></Pop>
      <Pop t={t} at={37.3} x={700} y={1180} s={1.1}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={37.9} x={500} y={820}><Heart /></Pop>
      <Lbl at={38.6} t={t} x={500} y={1380} w={460} fill={P.yellow} r={-1} size={36}>ký ức vẫn còn nguyên</Lbl>
    </g>
  </g>
);

// 9. CTA 39.63–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={39.68} note="Bạn biết chưa?" text="Giờ sinh" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.0} x={500} y={840} s={0.8}><Clock t={t} ring={t > 40.4 && t < 41.4} /></Pop>
      <CommentBar t={t} at={41.4} text="mình sinh lúc … giờ" y={1160} dur={1.2} />
      <Lbl at={42.4} t={t} x={500} y={1310} w={380} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={42.6} x={500} y={1370} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.75, C: S1}, {s: 3.75, e: 6.48, C: S2}, {s: 6.48, e: 14.64, C: S3}, {s: 14.64, e: 18.23, C: S4},
  {s: 18.23, e: 27.57, C: S5}, {s: 27.57, e: 32.13, C: S6}, {s: 32.13, e: 36.56, C: S7}, {s: 36.56, e: 39.63, C: S8},
  {s: 39.63, e: 43.864, C: S9},
];

export const BaziR40: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r40.mp3" phrases={cap.phrases} scenes={SCENES} />;
