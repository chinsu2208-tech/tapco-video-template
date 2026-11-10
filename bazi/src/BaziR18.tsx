import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Person, Briefcase, Calendar, Tick, TermCard, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR18.json';

// ====== Dòng 18 · Sinh năm 1991 (Tân Mùi): đi đúng đường vẫn chênh vênh → chu kỳ đại vận · 8 cảnh ======
// Can chi lấy từ bảng STEM/BR. Dải đại vận 10 năm là hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR18.json (căn tay theo khoảng lặng)
export const R18_TOTAL = totalFrames(49.68);

// cầu treo chênh vênh; tilt độ
const Rope: React.FC<{tilt: number}> = ({tilt}) => (
  <g>
    <path d="M-330 0 Q0 70 330 0" fill="none" stroke={P.orange} strokeWidth={14} strokeLinecap="round" />
    {[-260, -170, -80, 10, 100, 190, 280].map((x) => <path key={x} d={`M${x} ${28 - Math.abs(x) * 0.07} v-70`} stroke={P.navy} strokeWidth={5} strokeLinecap="round" />)}
    <path d="M-330 -70 Q0 0 330 -70" fill="none" stroke={P.navy} strokeWidth={6} />
    <g transform={`translate(0 30) rotate(${tilt})`}><g transform="scale(0.75)"><Person c={P.silver} mood="flat" /></g></g>
  </g>
);
// kính lúp (soi xét)
const Lens: React.FC = () => (
  <g><circle r={70} fill={P.sky} {...L} /><circle r={70} fill="#fff" opacity={0.35} /><path d="M50 50 L120 120" stroke={P.navy} strokeWidth={22} strokeLinecap="round" /><path d="M-30 -30 Q-10 -48 14 -44" fill="none" stroke="#fff" strokeWidth={9} strokeLinecap="round" /></g>
);
// cân đĩa: k = độ nghiêng (-1..1)
const Scale: React.FC<{k: number; left?: React.ReactNode; right?: React.ReactNode}> = ({k, left, right}) => (
  <g>
    <path d="M0 -150 V120 M-90 130 H90" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
    <g transform={`translate(0 -150) rotate(${k * 10})`}>
      <path d="M-220 0 H220" stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
      {[-220, 220].map((x, i) => (
        <g key={x} transform={`translate(${x} 0) rotate(${-k * 10})`}>
          <path d="M0 0 L-70 110 M0 0 L70 110" stroke={P.navy} strokeWidth={4} />
          <path d="M-95 110 H95 Q80 160 0 160 Q-80 160 -95 110Z" fill={P.yellow} {...L} />
          <g transform="translate(0 80)">{i === 0 ? left : right}</g>
        </g>
      ))}
    </g>
    <circle cy={-150} r={14} fill={P.red} {...L} strokeWidth={4} />
  </g>
);
const Flag: React.FC<{c?: string}> = ({c = P.red}) => (
  <g><path d="M0 0 V-120" stroke={P.navy} strokeWidth={7} strokeLinecap="round" /><path d="M0 -120 L70 -98 L0 -76Z" fill={c} {...L} strokeWidth={4} /></g>
);

// 1. HOOK 0–5.49: 1991, đúng đường (tick) mà chênh vênh (cầu treo lắc)
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Sinh năm 1991 ơi" text="Chênh vênh" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.5} x={730} y={760} s={0.75} r={3}><GZ can="Tân" chi="Mùi" year="1991" /></Pop>
      <Pop t={t} at={2.9} x={200} y={720}><Tick /></Pop>
      <Lbl at={3.0} t={t} x={340} y={810} w={260} fill="#fff" r={-2} size={34}>đúng đường</Lbl>
      <Pop t={t} at={3.6} x={500} y={1180}><Rope tilt={t > 4.0 ? 12 * Math.sin((t - 4.0) * 4.5) : 0} /></Pop>
      <Note t={t} at={4.2} x={500} y={1400} size={28}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 2. ĐẠI VẬN 5.49–10.87: nguyên nhân ít ai để ý → thẻ 大運
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={5.55} note="Điều ít người để ý" text="Đại vận" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={6.2} x={260} y={900} r={-3}><Card4 /></Pop>
      <TermCard t={t} at={9.0} x={640} y={900} vi="đại vận" han="大運" fill={P.mint} r={3} w={300} />
      <Lbl at={9.6} t={t} x={500} y={1250} w={420} fill={P.yellow} r={-1} size={38}>chu kỳ trong lá số</Lbl>
    </g>
  </g>
);
const Card4: React.FC = () => (
  <g>
    <rect x={-150} y={-190} width={300} height={380} rx={18} fill="#fff" {...L} />
    {[0, 1, 2, 3].map((i) => <rect key={i} x={-125 + i * 62} y={-140} width={50} height={240} rx={10} fill={PF[i]} {...L} strokeWidth={4} />)}
    <text y={160} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={36} fill={P.navy}>lá số</text>
  </g>
);

// 3. BỐN TRỤ + DẢI 10 NĂM 10.87–18.07
const POP3 = [10.9, 12.3, 12.75, 13.2];
const S3: React.FC<SP> = ({t}) => {
  const run = A(t, 14.6, 2.4);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={10.9} note="Bốn trụ, rồi tới" text="Mười năm" size={150} />
      <g filter="url(#wob)">
        {PIL.map((n, i) => <Pop key={n} t={t} at={POP3[i]} x={200 + i * 200} y={780} s={0.7}><Pillar name={n} fill={PF[i]} /></Pop>)}
        <g opacity={A(t, 14.5)}>
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(${130 + i * 205} 1110)`}>
              <rect x={-95} y={-60} width={190} height={120} rx={14} fill={[P.yellow, P.silver, P.blue, P.mint][i]} {...L} opacity={run * 4 > i ? 1 : 0.25} />
              <text y={14} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={36} fill={P.navy}>10 năm</text>
            </g>
          ))}
        </g>
        <Lbl at={16.6} t={t} x={500} y={1260} w={380} fill="#fff" r={-1} size={38}>đổi nhịp năng lượng</Lbl>
        <Note t={t} at={15.0} x={500} y={1350} size={28}>hình minh hoạ, không phải lá số thật</Note>
      </g>
    </g>
  );
};

// 4. TÂN MÙI · KIM 18.07–23.27: soi xét (kính lúp), cân nhắc kỹ (cân)
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={18.1} note="Can Tân thuộc hành Kim" text="Tân Mùi" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={18.3} x={250} y={900} s={0.85} r={-3}><GZ can="Tân" chi="Mùi" year="1991" /></Pop>
      <Pop t={t} at={20.6} x={690} y={760}><Lens /></Pop>
      <Lbl at={21.0} t={t} x={690} y={900} w={220} fill="#fff" r={2} size={34}>soi xét</Lbl>
      <Pop t={t} at={21.8} x={690} y={1200} s={0.55}><Scale k={Math.sin(t * 2) * 0.3} /></Pop>
      <Lbl at={22.2} t={t} x={430} y={1370} w={300} fill={P.silver} r={-1} size={34}>cân nhắc kỹ</Lbl>
    </g>
  </g>
);

// 5. NHÌN LẠI ≠ SAI ĐƯỜNG 23.27–28.90
const S5: React.FC<SP> = ({t}) => {
  const strike = A(t, 27.3, 0.5);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={23.3} note="Hơn chục năm đi làm" text="Nhìn lại" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={23.9} x={240} y={780} s={0.8}><Briefcase /></Pop>
        <Lbl at={24.4} t={t} x={240} y={900} w={220} fill={P.yellow} r={-2} size={34}>10+ năm</Lbl>
        <Pop t={t} at={24.8} x={650} y={1000} s={1.0}><g transform="scale(-1 1)"><Person c={P.silver} mood="flat" /></g></Pop>
        <Pop t={t} at={26.3} x={430} y={1220} r={-2}><Tag w={540} h={100} fill="#fff"><TT size={42} y={15}>dấu hiệu sai đường</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M175 1240 L${175 + 510 * strike} 1200`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={27.9} x={780} y={1110}><Tick /></Pop>
      </g>
    </g>
  );
};

// 6. LƯU NIÊN 2027 → ĐIỂM XUẤT PHÁT, CÂN LẠI 28.90–38.89
const S6: React.FC<SP> = ({t}) => {
  const tilt = A(t, 36.6, 0.6) - A(t, 37.6, 1.0);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={28.95} note="Lưu niên gần 2027 nhắc" text="Điểm xuất phát" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={31.0} x={720} y={720} s={0.75}><Calendar label="2027" /></Pop>
        <Pop t={t} at={33.3} x={200} y={760}><Flag /></Pop>
        {A(t, 33.6) > 0.02 && <path d="M260 710 Q450 640 620 700" fill="none" stroke={P.red} strokeWidth={8} strokeDasharray="18 16" strokeLinecap="round" opacity={A(t, 33.6)} />}
        <Lbl at={33.6} t={t} x={260} y={830} w={300} fill="#fff" r={-2} size={32}>điểm xuất phát</Lbl>
        <Pop t={t} at={35.0} x={500} y={1180} s={0.95}>
          <Scale k={tilt * 0.6}
            left={<g><g opacity={A(t, 35.3)} transform="translate(-30 -10) scale(0.32)"><Briefcase /></g><g opacity={A(t, 36.0)} transform="translate(40 -10)"><Coin r={30} /></g></g>}
            right={<g opacity={A(t, 36.7)} transform="translate(0 -10) scale(0.8)"><Heart /></g>} />
        </Pop>
        <Lbl at={37.4} t={t} x={500} y={1370} w={360} fill={P.yellow} r={-1} size={38}>cân lại</Lbl>
      </g>
    </g>
  );
};

// 7. KHÔNG PHẢI SỐ PHẬN 38.89–43.05
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={38.89} strikeAt={39.9} gearAt={41.0} okAt={41.6} tint={P.sky} />;

// 8. CTA 43.05–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={43.1} note="91 nhớ ngày đầu đi làm?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={43.4} x={300} y={800} s={0.7} r={-3}><GZ can="Tân" chi="Mùi" year="1991" /></Pop>
      <Pop t={t} at={44.2} x={690} y={800} s={0.7} r={4}><Briefcase /></Pop>
      <CommentBar t={t} at={46.2} text="1991 · nhật chủ của mình là …" y={1110} dur={1.8} />
      <Lbl at={47.4} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={47.8} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.49, C: S1}, {s: 5.49, e: 10.87, C: S2}, {s: 10.87, e: 18.07, C: S3}, {s: 18.07, e: 23.27, C: S4},
  {s: 23.27, e: 28.9, C: S5}, {s: 28.9, e: 38.89, C: S6}, {s: 38.89, e: 43.05, C: S7}, {s: 43.05, e: 50.08, C: S8},
];

export const BaziR18: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r18.mp3" phrases={cap.phrases} scenes={SCENES} />;
