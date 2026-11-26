import React from 'react';
import {P, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Tag, Burst, Block, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {House, Note} from './BaziR14';
import {Pillar, PF, PIL} from './BaziR17';
import cap from './capR48.json';

// ====== Dòng 48 · Bốn trụ mỗi trụ một tầng (năm · tháng · ngày · giờ) · 9 cảnh ======
// Khung trụ để trống (?), không có lá số thật. Mốc: src/capR48.json (align_dp)
export const R48_TOTAL = totalFrames(44.4);

const PX = [200, 400, 600, 800];

// cây con (môi trường lớn lên)
const Sprout: React.FC<{k: number}> = ({k}) => (
  <g>
    <path d="M-110 60 Q0 20 110 60 L90 120 H-90Z" fill={P.peach} {...L} />
    <path d={`M0 60 V${60 - 170 * k}`} stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
    {k > 0.5 && <path d="M0 -40 Q-90 -80 -100 -10 Q-40 0 0 -40Z" fill={P.mint} {...L} strokeWidth={5} />}
    {k > 0.8 && <path d="M0 -90 Q90 -140 100 -60 Q40 -50 0 -90Z" fill={P.mint} {...L} strokeWidth={5} />}
  </g>
);
// lá cờ (hướng tới)
const Flag: React.FC = () => (
  <g>
    <path d="M-50 160 V-150" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
    <path d="M-50 -150 L110 -100 L-50 -40Z" fill={P.coral} {...L} />
  </g>
);

// 1. HOOK 0–4.23
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Mới tìm hiểu bát tự" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={1.8 + i * 0.22} x={PX[i]} y={950} s={0.85}><Pillar name={n} fill={PF[i]} /></Pop>
      ))}
      <Pop t={t} at={3.0} x={760} y={680} s={0.8}><Burst txt="?" /></Pop>
      <Lbl at={3.5} t={t} x={480} y={1290} w={380} fill="#fff" r={-1} size={38}>đọc từ đâu?</Lbl>
    </g>
  </g>
);

// 2. MỖI TRỤ MỘT TẦNG 4.23–9.23
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.28} note="Ít ai để ý" text="Mỗi trụ một tầng" size={115} />
    <g filter="url(#wob)">
      {[3, 2, 1, 0].map((i, k) => (
        <Pop key={i} t={t} at={7.0 + k * 0.35} x={480} y={1260 - k * 150}>
          <g><rect x={-300 + k * 30} y={-62} width={600 - k * 60} height={124} rx={18} fill={PF[3 - i]} {...L} /><TT size={40} y={14}>tầng {k + 1}</TT></g>
        </Pop>
      ))}
      <Lbl at={8.6} t={t} x={480} y={1430} w={420} fill="#fff" r={1} size={36}>nói về chuyện khác nhau</Lbl>
    </g>
  </g>
);

// 3. TRỤ NĂM · GỐC GIA ĐÌNH 9.23–11.8
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={9.28} note="Tầng 1" text="Trụ năm" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={9.5} x={250} y={960} s={0.85}><Pillar name="năm" fill={PF[0]} /></Pop>
      <Pop t={t} at={10.6} x={640} y={900} s={1.3}><House /></Pop>
      <Lbl at={11.0} t={t} x={640} y={1150} w={340} fill="#fff" r={2} size={38}>gốc gia đình</Lbl>
    </g>
  </g>
);

// 4. TRỤ THÁNG · MÔI TRƯỜNG LỚN LÊN 11.8–18.05
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={11.85} note="Tầng 2" text="Trụ tháng" size={145} />
    <g filter="url(#wob)">
      <Pop t={t} at={12.0} x={220} y={900} s={0.75}><Pillar name="tháng" fill={PF[1]} /></Pop>
      <g transform="translate(610 830)"><Pop t={t} at={12.6} x={0} y={0}><Sprout k={A(t, 12.8, 1.6)} /></Pop></g>
      <Lbl at={13.5} t={t} x={610} y={1020} w={420} fill="#fff" r={-1} size={34}>môi trường mình lớn lên</Lbl>
      <Pop t={t} at={15.4} x={360} y={1200} r={-3}><Tag w={380} h={96} fill={P.sky}><TT size={34} y={12}>thói quen làm việc</TT></Tag></Pop>
      <Pop t={t} at={17.1} x={620} y={1340} r={3}><Tag w={380} h={96} fill={P.yellow}><TT size={34} y={12} x={30}>nhìn về tiền bạc</TT></Tag></Pop>
      <Pop t={t} at={17.4} x={455} y={1340} s={0.8}><Coin /></Pop>
    </g>
  </g>
);

// 5. TRỤ NGÀY · BẢN THÂN · NHẬT CHỦ 18.05–22.14
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={18.1} note="Tầng 3" text="Trụ ngày" size={145} />
    <g filter="url(#wob)">
      <Pop t={t} at={18.3} x={260} y={960} s={0.9}><Pillar name="ngày" fill={PF[2]} hi={A(t, 20.6, 0.4)} /></Pop>
      <Pop t={t} at={19.4} x={660} y={1040} s={1.3}><Person c={P.blue} mood="smile" /></Pop>
      <Lbl at={19.6} t={t} x={660} y={1120} w={280} fill="#fff" r={2} size={36}>bản thân</Lbl>
      <Lbl at={21.2} t={t} x={480} y={1300} w={560} fill={P.yellow} r={-1} size={36}>thiên can = nhật chủ</Lbl>
    </g>
  </g>
);

// 6. TRỤ GIỜ · HƯỚNG TỚI VỀ SAU 22.14–25.36
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={22.19} note="Tầng 4" text="Trụ giờ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={22.4} x={240} y={960} s={0.85}><Pillar name="giờ" fill={PF[3]} /></Pop>
      {A(t, 23.6, 0.6) > 0.01 && <path d={`M380 1080 Q520 ${1080 - 120 * A(t, 23.6, 0.6)} ${380 + 260 * A(t, 23.6, 0.6)} 980`} fill="none" stroke={P.navy} strokeWidth={8} strokeDasharray="18 14" strokeLinecap="round" />}
      <Pop t={t} at={24.2} x={720} y={880}><Flag /></Pop>
      <Lbl at={24.4} t={t} x={600} y={1180} w={380} fill="#fff" r={-2} size={36}>hướng tới về sau</Lbl>
    </g>
  </g>
);

// 7. BỐN LỚP BỐI CẢNH · CÙNG ÁP LỰC MỖI NGƯỜI MỘT KIỂU 25.36–34.28
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={25.41} note="Nói đơn giản hơn" text="Bốn lớp bối cảnh" size={110} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={27.2 + i * 0.3} x={PX[i]} y={680}><Tag w={170} h={86} fill={PF[i]} r={i % 2 ? 3 : -3}><TT size={34} y={12}>{n}</TT></Tag></Pop>
      ))}
      <Pop t={t} at={31.6} x={480} y={900} s={0.8}><Block txt="áp lực" /></Pop>
      <Pop t={t} at={32.8} x={280} y={1340} s={1.0}><Person c={P.coral} mood="sad" /></Pop>
      <Pop t={t} at={33.2} x={680} y={1340} s={1.0}><Person c={P.mint} mood="smile" /></Pop>
      <Lbl at={33.7} t={t} x={480} y={1460} w={540} fill="#fff" r={-1} size={34}>mỗi người phản ứng một kiểu</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 34.28–38.85
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={34.28} strikeAt={35.4} gearAt={36.9} okAt={37.5} tint={P.mint} />;

// 9. CTA 38.85–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={38.9} note="Bạn tò mò" text="Trụ nào nhất?" size={125} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={39.3 + i * 0.2} x={PX[i]} y={820} s={0.6}><Pillar name={n} fill={PF[i]} /></Pop>
      ))}
      <CommentBar t={t} at={40.6} text="năm sinh … · nhật chủ …" y={1110} dur={1.4} />
      <Lbl at={43.0} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={43.3} x={480} y={1330} />
      <Note t={t} at={41.0} x={480} y={1460} size={26}>khung trụ để trống · không phải lá số thật</Note>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.23, C: S1}, {s: 4.23, e: 9.23, C: S2}, {s: 9.23, e: 11.8, C: S3}, {s: 11.8, e: 18.05, C: S4},
  {s: 18.05, e: 22.14, C: S5}, {s: 22.14, e: 25.36, C: S6}, {s: 25.36, e: 34.28, C: S7}, {s: 34.28, e: 38.85, C: S8},
  {s: 38.85, e: 44.8, C: S9},
];

export const BaziR48: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r48.mp3" phrases={cap.phrases} scenes={SCENES} />;
