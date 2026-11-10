import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Block, Person, Burst, Tick, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {BR, STEM} from './BaziHand';
import {GZ, Note, Heart} from './BaziR14';
import cap from './capR16.json';

// ====== Dòng 16 · Can chi cơ bản: con giáp chỉ là một nửa, 10 can × 12 chi = vòng 60 năm · 7 cảnh ======
// Can chi lấy từ bảng STEM/BR (1991 Tân Mùi, 1992 Nhâm Thân). Hai người "cùng tuổi Mùi" là ví dụ minh hoạ. Mốc: src/capR16.json
export const R16_TOTAL = totalFrames(51.22);

const MUI = BR['Mùi'][0];
const STEMS = Object.keys(STEM);
const BRS = Object.keys(BR);

// bánh răng n răng, có chữ giữa
const TGear: React.FC<{r: number; n: number; c: string; rot: number; label: string}> = ({r, n, c, rot, label}) => (
  <g>
    <g transform={`rotate(${rot})`}>
      {Array.from({length: n}).map((_, i) => <rect key={i} transform={`rotate(${(i * 360) / n})`} x={-r * 0.11} y={-r * 1.16} width={r * 0.22} height={r * 0.3} rx={5} fill={c} {...L} strokeWidth={5} />)}
      <circle r={r} fill={c} {...L} />
    </g>
    <circle r={r * 0.55} fill="#fff" {...L} strokeWidth={5} />
    <text y={r * 0.2} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={r * 0.5} fill={P.navy}>{label}</text>
  </g>
);

// 1. HOOK 0–8.69: hai người cùng tuổi Mùi mà khác nhau rõ rệt
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Mới tìm hiểu bát tự?" text="Cùng tuổi Mùi" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={3.6} x={500} y={700} r={-2}><Tag w={300} h={150} fill={P.yellow}><text y={20} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={90} fill={P.navy}>{MUI}</text><text y={62} textAnchor="middle" fontFamily={H} fontWeight={700} fontSize={32} fill={P.navy}>Mùi</text></Tag></Pop>
      <Pop t={t} at={3.9} x={280} y={1200} s={1.1}><Person c={P.coral} mood="talk" /></Pop>
      <Pop t={t} at={4.3} x={720} y={1200} s={1.1}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={6.4} x={500} y={1000} s={0.8}><Burst txt="≠" size={110} /></Pop>
      <Lbl at={6.0} t={t} x={280} y={1340} w={280} fill="#fff" r={-3} size={34}>làm nhanh</Lbl>
      <Lbl at={6.6} t={t} x={720} y={1340} w={280} fill={P.mint} r={3} size={34}>làm kỹ</Lbl>
      <Lbl at={7.4} t={t} x={500} y={1460} w={460} fill={P.yellow} r={-1} size={38}>khác nhau rõ rệt</Lbl>
      <Note t={t} at={7.0} x={500} y={860} size={28}>ví dụ minh hoạ</Note>
    </g>
  </g>
);

// 2. MỘT NỬA 8.69–15.40: con giáp = địa chi = nửa cái bánh; nửa kia = thiên can
const S2: React.FC<SP> = ({t}) => {
  const split = A(t, 13.9, 0.6);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={8.75} note="Nguyên nhân thường ở" text="Thiên can" size={150} />
      <g filter="url(#wob)">
        <g opacity={A(t, 9.4)} transform="translate(500 1000)">
          <g transform={`translate(${-40 * split} 0)`}>
            <path d="M0 -240 A240 240 0 0 0 0 240Z" fill={P.yellow} {...L} />
            <text x={-120} y={-10} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={44} fill={P.navy}>địa chi</text>
            <text x={-120} y={50} textAnchor="middle" fontFamily={H} fontWeight={600} fontSize={34} fill={P.navy}>(con giáp)</text>
          </g>
          <g transform={`translate(${40 * split} 0)`} opacity={0.35 + 0.65 * A(t, 15.4)}>
            <path d="M0 -240 A240 240 0 0 1 0 240Z" fill={P.coral} {...L} strokeDasharray={t < 15.4 ? '20 16' : undefined} />
            <text x={120} y={20} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={44} fill={P.navy}>{t < 14.6 ? '?' : 'thiên can'}</text>
          </g>
        </g>
        <Lbl at={14.0} t={t} x={300} y={1330} w={280} fill="#fff" r={-3} size={38}>một nửa</Lbl>
        <Pop t={t} at={11.6} x={800} y={700} r={4}><Tag w={200} h={90} fill="#fff"><TT size={50} y={18} font={CJK}>地支</TT></Tag></Pop>
      </g>
    </g>
  );
};

// 3. VÒNG 60 NĂM 15.40–22.86: bánh răng 10 răng ăn khớp bánh răng 12 răng
const S3: React.FC<SP> = ({t}) => {
  const spin = Math.max(0, t - 18.5);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={15.45} note="10 can ghép 12 chi" text="Vòng 60 năm" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={18.3} x={320} y={880}><TGear r={150} n={10} c={P.coral} rot={spin * 36} label="10" /></Pop>
        <Pop t={t} at={19.6} x={660} y={1060}><TGear r={175} n={12} c={P.yellow} rot={-spin * 30 + 15} label="12" /></Pop>
        <Lbl at={18.6} t={t} x={300} y={1120} w={280} fill="#fff" r={-3} size={34}>thiên can</Lbl>
        <Lbl at={19.9} t={t} x={680} y={790} w={260} fill="#fff" r={3} size={34}>địa chi</Lbl>
        <Pop t={t} at={21.6} x={330} y={1360} r={-3}><Tag w={380} h={120} fill={P.mint}><TT size={52} y={18}>60 năm lặp lại</TT></Tag></Pop>
        <g opacity={A(t, 16.2) * 0.85}>
          {STEMS.map((s, i) => <text key={s} x={130 + i * 74} y={590} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={44} fill={P.navy}>{STEM[s][0]}</text>)}
        </g>
        <g opacity={A(t, 17.0) * 0.85}>
          {BRS.map((b, i) => <text key={b} x={120 + i * 62} y={655} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={40} fill={P.navy}>{BR[b][0]}</text>)}
        </g>
      </g>
    </g>
  );
};

// 4. VÍ DỤ 22.86–32.13: 1991 Tân Mùi (can Kim) · 1992 Nhâm Thân (can Thủy)
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={22.9} note="Chẳng hạn" text="Hai năm liền" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={23.8} x={290} y={950} s={0.9} r={-3}><GZ can="Tân" chi="Mùi" year="1991" /></Pop>
      <Lbl at={26.9} t={t} x={290} y={1250} w={300} fill={P.silver} r={-2} size={36}>can Tân · Kim</Lbl>
      <Pop t={t} at={28.4} x={710} y={950} s={0.9} r={3}><GZ can="Nhâm" chi="Thân" year="1992" /></Pop>
      <Lbl at={31.3} t={t} x={710} y={1250} w={320} fill={P.blue} r={2} size={36}>can Nhâm · Thủy</Lbl>
      <Note t={t} at={27.5} x={500} y={1380} size={30}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 5. KHÁC CAN → KHÁC CÁCH 32.13–41.62: tiền bạc, áp lực, tình cảm
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={32.2} note="Cùng con giáp, khác can" text="Khác cách" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={32.8} x={230} y={900} s={0.8}><Person c={P.silver} mood="smile" /></Pop>
      <Pop t={t} at={33.1} x={230} y={1250} s={0.8}><Person c={P.blue} mood="flat" /></Pop>
      <Lbl at={33.4} t={t} x={230} y={950} w={200} fill="#fff" r={-2} size={30}>can A</Lbl>
      <Lbl at={33.6} t={t} x={230} y={1300} w={200} fill="#fff" r={2} size={30}>can B</Lbl>
      <Pop t={t} at={36.8} x={460} y={1080}><Coin r={60} /></Pop>
      <Lbl at={37.0} t={t} x={460} y={1190} w={240} fill={P.yellow} r={-2} size={32}>tiền bạc</Lbl>
      <Pop t={t} at={39.0} x={660} y={860} s={0.55} r={3}><Block txt="áp lực" w={420} /></Pop>
      <Pop t={t} at={40.8} x={760} y={1150} s={0.9}><Heart /></Pop>
      <Lbl at={41.0} t={t} x={760} y={1260} w={240} fill={P.peach} r={-1} size={32}>tình cảm</Lbl>
      <Note t={t} at={34.0} x={500} y={1420} size={28}>ví dụ minh hoạ, không phải lá số thật</Note>
    </g>
  </g>
);

// 6. KHÔNG PHẢI SỐ PHẬN 41.62–47.55
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={41.62} strikeAt={43.2} gearAt={45.0} okAt={45.7} tint={P.peach} />;

// 7. CTA 47.55–hết
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={47.6} note="Bạn sinh năm can chi nào?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={48.0} x={300} y={800} s={0.7} r={-3}><GZ can="Tân" chi="Mùi" year="1991" /></Pop>
      <Pop t={t} at={48.3} x={700} y={800} s={0.7} r={3}><GZ can="Nhâm" chi="Thân" year="1992" /></Pop>
      <CommentBar t={t} at={48.9} text="Mình là … (năm + can chi)" y={1110} dur={1.6} />
      <Pop t={t} at={50.0} x={880} y={1110} s={0.9}><Tick /></Pop>
      <Lbl at={49.6} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={50.4} x={500} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 8.69, C: S1}, {s: 8.69, e: 15.4, C: S2}, {s: 15.4, e: 22.86, C: S3}, {s: 22.86, e: 32.13, C: S4},
  {s: 32.13, e: 41.62, C: S5}, {s: 41.62, e: 47.55, C: S6}, {s: 47.55, e: 51.7, C: S7},
];

export const BaziR16: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r16.mp3" phrases={cap.phrases} scenes={SCENES} />;
