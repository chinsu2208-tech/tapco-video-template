import React from 'react';
import {P, H, HAND, CJK, L, Page, Star, A, cl, Pop, TT, Tag, Lbl, Head, Person, Coin, Clock, Book, Block, Burst, Tick, Card, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Doodle, EC, El} from './BaziHand';
import cap from './capR11.json';

// ====== Dòng 11 · Bát tự là gì: 4 trụ năm-tháng-ngày-giờ, 8 chữ · 9 cảnh ======
// Khung trụ là minh hoạ trống (dấu ?), KHÔNG phải lá số thật. Mốc: src/capR11.json
export const R11_TOTAL = totalFrames(51.96); // 1571

const PIL = ['năm', 'tháng', 'ngày', 'giờ'];
const PX = [210, 410, 610, 810];

// Một trụ: tên trụ + ô thiên can (trên) + ô địa chi (dưới), để trống
const Pillar: React.FC<{name: string; fill: string; can?: number; chi?: number; hi?: number}> = ({name, fill, can = 0, chi = 0, hi = 0}) => (
  <g>
    <rect x={-85} y={-230} width={170} height={460} rx={18} fill={fill} {...L} />
    <text y={-178} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={42} fill={P.navy}>{name}</text>
    {hi > 0.01 && <rect x={-78} y={-150} width={156} height={170} rx={14} fill="none" stroke={P.red} strokeWidth={10} opacity={hi} />}
    <rect x={-62} y={-135} width={124} height={140} rx={12} fill="#fff" {...L} strokeWidth={5} opacity={0.4 + 0.6 * can} />
    <text y={-45} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={70} fill={P.navy} opacity={can}>?</text>
    <rect x={-62} y={30} width={124} height={140} rx={12} fill="#fff" {...L} strokeWidth={5} opacity={0.4 + 0.6 * chi} />
    <text y={120} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={70} fill={P.navy} opacity={chi}>?</text>
  </g>
);
const PF = [P.yellow, P.mint, P.coral, P.blue];

// 1. HOOK 0–8.08
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Nghe người ta nói xem" text="Bát tự" size={160} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.9} x={300} y={1280} s={1.3}><Person c={P.coral} mood="talk" /></Pop>
      <Pop t={t} at={2.6} x={680} y={1280} s={1.3}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={1.4} x={330} y={830} r={-3}><Card x={-170} y={-60} w={340} h={120} fill="#fff"><TT x={170} y={76} size={40}>xem bát tự đi!</TT></Card></Pop>
      <Pop t={t} at={4.2} x={720} y={840} s={1}><Burst txt="?" size={110} /></Pop>
      <Lbl at={4.4} t={t} x={720} y={1030} w={300} fill={P.yellow} r={2} size={38}>xem gì ta?</Lbl>
      <Lbl at={7.4} t={t} x={500} y={1450} w={460} fill={P.mint} r={-1} size={42}>khá đơn giản</Lbl>
      <Star x={880} y={620} s={A(t, 7.5) * 1.2} />
    </g>
  </g>
);

// 2. BỐN TRỤ 8.08–13.73
const AT2 = [10.0, 11.0, 11.8, 12.9];
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={8.15} note="Bát tự là" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={AT2[i]} x={PX[i]} y={1000} r={(i % 2 ? 2 : -2)}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={12.9} t={t} x={510} y={1360} w={520} fill="#fff" r={-1} size={40}>năm · tháng · ngày · giờ sinh</Lbl>
    </g>
  </g>
);

// 3. CAN + CHI = 8 CHỮ 13.73–18.96
const S3: React.FC<SP> = ({t}) => {
  const can = A(t, 15.2, 0.5), chi = A(t, 16.4, 0.5);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={13.8} note="Mỗi trụ có can + chi" text="Tám chữ" size={150} />
      <g filter="url(#wob)">
        {PIL.map((n, i) => <g key={n} transform={`translate(${PX[i]} 960)`}><Pillar name={n} fill={PF[i]} can={can} chi={chi} /></g>)}
        <text x={510} y={640} textAnchor="middle" fontFamily={HAND} fontSize={44} fill={P.navy} opacity={can}>trên: thiên can<tspan opacity={chi}> · dưới: địa chi</tspan></text>
        <Pop t={t} at={18.3} x={830} y={600} s={0.75}><Burst txt="8" size={120} /></Pop>
        <Lbl at={15.4} t={t} x={510} y={1330} w={600} fill="#fff" r={-1} size={34}>khung minh hoạ · chưa phải lá số thật</Lbl>
      </g>
    </g>
  );
};

// 4. BỐN LỚP THÔNG TIN 18.96–25.38
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={19.05} note="Nói đơn giản hơn" text="Bốn lớp" size={150} />
    <g filter="url(#wob)">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${330 + (i % 2 ? 12 : -12)} ${1180 - i * 78})`} opacity={A(t, 20.8 + i * 0.3, 0.25)}>
          <Book c={PF[3 - i]} w={360} />
          <text x={0} y={14} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={34} fill={P.navy}>{PIL[3 - i]}</text>
        </g>
      ))}
      <Lbl at={22.0} t={t} x={330} y={1320} w={380} fill={P.yellow} r={-2} size={38}>thông tin ghi lại</Lbl>
      <Pop t={t} at={23.2} x={740} y={780} s={0.9}><Clock t={t} /></Pop>
      <Pop t={t} at={24.0} x={740} y={1230} s={1.15}><Person c={P.mint} mood="smile" /></Pop>
      <Lbl at={24.2} t={t} x={740} y={1400} w={340} fill={P.coral} r={2} size={38}>bước vào đời</Lbl>
    </g>
  </g>
);

// 5. NHẬT CHỦ 25.38–30.32: can của trụ ngày = chính bạn
const S5: React.FC<SP> = ({t}) => {
  const hi = A(t, 26.0, 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={25.45} note="Thiên can trụ ngày là" text="Nhật chủ" size={150} />
      <g filter="url(#wob)">
        {PIL.map((n, i) => <g key={n} transform={`translate(${PX[i]} 960) scale(${i === 2 ? 1 + 0.08 * hi : 1})`} opacity={i === 2 ? 1 : 1 - 0.55 * hi}><Pillar name={n} fill={PF[i]} can={1} chi={1} hi={i === 2 ? hi : 0} /></g>)}
        <Pop t={t} at={27.7} x={610} y={620} r={-2}><Tag w={300} h={96} fill={P.yellow}><TT size={60} y={22} font={CJK} w={700}>日主</TT></Tag></Pop>
        <Pop t={t} at={29.2} x={300} y={1420} s={0.7}><Person c={P.coral} mood="smile" /></Pop>
        <Lbl at={29.3} t={t} x={560} y={1360} w={360} fill={P.mint} r={1} size={42}>chính bạn</Lbl>
        <Star x={760} y={1300} s={A(t, 29.6)} />
      </g>
    </g>
  );
};

// 6. TƯƠNG TÁC NGŨ HÀNH 30.32–36.05
const ORDER: El[] = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
const S6: React.FC<SP> = ({t}) => {
  const cx = 510, cy = 1000, R = 320;
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={30.4} note="Nhật chủ tương tác với" text="Ngũ hành" size={150} />
      <g filter="url(#wob)">
        {ORDER.map((el, k) => {
          const a = (-90 + k * 72) * Math.PI / 180, x = cx + Math.cos(a) * R, y = cy + Math.sin(a) * R;
          const at = 33.6 + k * 0.18, o = A(t, at, 0.4);
          return (
            <g key={el}>
              {o > 0.02 && <path d={`M${cx} ${cy} L${cx + (x - cx) * 0.62 * o} ${cy + (y - cy) * 0.62 * o}`} stroke={P.navy} strokeWidth={5} strokeDasharray="10 12" strokeLinecap="round" />}
              <Pop t={t} at={at} x={x} y={y}><g><circle r={92} fill={EC[el]} {...L} /><g transform="translate(0 -14) scale(0.8)"><Doodle el={el} /></g><text y={68} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={34} fill={P.navy}>{el}</text></g></Pop>
            </g>
          );
        })}
        <Pop t={t} at={30.6} x={cx} y={cy + 90} s={0.85}><Person c={P.yellow} mood="smile" /></Pop>
        <Lbl at={31.4} t={t} x={cx} y={cy + 160} w={260} fill="#fff" size={36}>nhật chủ</Lbl>
      </g>
    </g>
  );
};

// 7. PHẢN ÁNH ĐỜI SỐNG 36.05–41.3
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={36.1} note="Điều này phản ánh" text="Cách bạn sống" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={36.9} x={250} y={760}><g><Coin r={70} /><g transform="translate(70 40)"><Coin r={50} /></g></g></Pop>
      <Lbl at={37.1} t={t} x={260} y={940} w={300} fill={P.yellow} r={-2} size={38}>kiếm tiền</Lbl>
      <Pop t={t} at={38.3} x={720} y={790} s={0.8}><Block txt="áp lực" /></Pop>
      <Lbl at={38.4} t={t} x={720} y={940} w={300} fill={P.coral} r={2} size={38}>chịu áp lực</Lbl>
      <Pop t={t} at={39.5} x={420} y={1330} s={1}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={39.7} x={600} y={1330} s={0.85}><Person c={P.coral} mood="smile" /></Pop>
      <Pop t={t} at={40.2} x={510} y={1040} s={1}><path d="M0 30 C-60 -10 -40 -60 0 -30 C40 -60 60 -10 0 30Z" fill={P.red} {...L} strokeWidth={5} /></Pop>
      <Lbl at={40.4} t={t} x={780} y={1260} w={300} fill={P.mint} r={2} size={38}>người thân</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 41.3–46.27
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={41.3} strikeAt={42.3} gearAt={43.6} okAt={44.4} tint={P.peach} />;

// 9. CTA 46.27–hết: giờ sinh / năm sinh
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={46.35} note="Bạn biết giờ sinh chưa?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={46.7} x={330} y={820} s={1}><Clock t={t} ring /></Pop>
      <Pop t={t} at={47.2} x={650} y={960} s={1.2}><Person c={P.yellow} mood="smile" /></Pop>
      <CommentBar t={t} at={48.0} text="Mình sinh năm… giờ…" y={1120} dur={1.6} />
      <Lbl at={49.2} t={t} x={500} y={1270} w={560} fill={P.yellow} r={-1} size={38}>giờ sinh hoặc năm sinh</Lbl>
      <text x={500} y={1370} textAnchor="middle" fontFamily={HAND} fontSize={32} fill={P.navy} opacity={A(t, 49.6)}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</text>
      <ArrowDown t={t} at={50.8} x={500} y={1400} />
      <Star x={850} y={700} s={A(t, 47.6) * 1.3} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 8.08, C: S1}, {s: 8.08, e: 13.73, C: S2}, {s: 13.73, e: 18.96, C: S3}, {s: 18.96, e: 25.38, C: S4},
  {s: 25.38, e: 30.32, C: S5}, {s: 30.32, e: 36.05, C: S6}, {s: 36.05, e: 41.3, C: S7}, {s: 41.3, e: 46.27, C: S8},
  {s: 46.27, e: 52.36, C: S9},
];

export const BaziR11: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r11.mp3" phrases={cap.phrases} scenes={SCENES} />;
