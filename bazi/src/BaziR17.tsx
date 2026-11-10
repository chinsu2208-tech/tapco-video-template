import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Block, Person, Briefcase, Calendar, Cross, Tick, TermCard, Gear, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {EC, STEM} from './BaziHand';
import {GZ, Note, Heart} from './BaziR14';
import cap from './capR17.json';

// ====== Dòng 17 · Sinh năm 1990 (Canh Ngọ): làm đúng hết vẫn mệt → nhật chủ · 8 cảnh ======
// Can chi lấy từ bảng STEM/BR. Khung 4 trụ là khung trống minh hoạ, không phải lá số thật. Mốc: src/capR17.json
export const R17_TOTAL = totalFrames(48.36);

/* ---- dùng chung cho R17–R19 ---- */
export const PIL = ['năm', 'tháng', 'ngày', 'giờ'];
export const PF = [P.yellow, P.mint, P.coral, P.blue];
// trụ trống: ô trên = thiên can, ô dưới = địa chi (chưa có dữ liệu thật)
export const Pillar: React.FC<{name: string; fill: string; hi?: number; top?: string}> = ({name, fill, hi = 0, top = '?'}) => (
  <g>
    <rect x={-80} y={-200} width={160} height={400} rx={18} fill={fill} {...L} />
    <text y={-152} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={38} fill={P.navy}>{name}</text>
    <rect x={-58} y={-120} width={116} height={124} rx={12} fill="#fff" {...L} strokeWidth={5} />
    <text y={-38} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={56} fill={P.navy}>{top}</text>
    <rect x={-58} y={36} width={116} height={124} rx={12} fill="#fff" {...L} strokeWidth={5} />
    <text y={118} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={56} fill={P.navy}>?</text>
    {hi > 0.01 && <rect x={-72} y={-134} width={144} height={152} rx={14} fill="none" stroke={P.red} strokeWidth={10} opacity={hi} />}
  </g>
);
// pin: k = mức pin 0..1
export const Battery: React.FC<{k: number}> = ({k}) => {
  const c = k > 0.5 ? P.mint : k > 0.25 ? P.yellow : P.coral;
  return (
    <g>
      <rect x={-90} y={-46} width={170} height={92} rx={16} fill="#fff" {...L} />
      <rect x={84} y={-20} width={16} height={40} rx={5} fill={P.navy} />
      {k > 0.02 && <rect x={-76} y={-32} width={142 * k} height={64} rx={8} fill={c} />}
    </g>
  );
};
// giọt nước (Thủy)
export const Drop: React.FC<{c?: string}> = ({c = P.blue}) => (
  <g><path d="M0 -90 C40 -30 62 6 62 34 A62 62 0 0 1 -62 34 C-62 6 -40 -30 0 -90Z" fill={c} {...L} /><path d="M-30 30 Q-28 60 0 70" fill="none" stroke="#fff" strokeWidth={8} strokeLinecap="round" /></g>
);
// cửa ghi KÉO
const Door: React.FC = () => (
  <g>
    <rect x={-110} y={-200} width={220} height={400} rx={10} fill={P.peach} {...L} />
    <circle cx={70} cy={10} r={14} fill={P.yellow} {...L} strokeWidth={4} />
    <rect x={-70} y={-150} width={140} height={64} rx={10} fill="#fff" {...L} strokeWidth={4} />
    <text y={-104} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={40} fill={P.navy}>KÉO</text>
  </g>
);
const Sweat: React.FC<{t: number}> = ({t}) => (
  <g>{[0, 1, 2].map((i) => { const ph = ((t * 1.6 + i / 3) % 1); return <path key={i} transform={`translate(${-40 + i * 40} ${ph * 50})`} d="M0 -14 q8 12 0 20 q-8 -8 0 -20z" fill={P.sky} stroke={P.navy} strokeWidth={3} opacity={1 - ph} />; })}</g>
);

// 1. HOOK 0–7.85: tuổi 90, làm đúng hết (3 tick) mà pin cạn → nhật chủ
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Tuổi 90 ơi" text="Vẫn thấy mệt" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={760} y={780} s={0.75} r={3}><GZ can="Canh" chi="Ngọ" year="1990" /></Pop>
      {[0, 1, 2].map((i) => <Pop key={i} t={t} at={1.0 + i * 0.35} x={150} y={700 + i * 110}><Tick /></Pop>)}
      <Lbl at={1.2} t={t} x={330} y={810} w={250} fill="#fff" r={-2} size={34}>làm đúng hết</Lbl>
      <Pop t={t} at={1.8} x={330} y={1260} s={1.05}><Person c={P.silver} mood={t > 2.4 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={2.2} x={620} y={1120}><Battery k={Math.max(0.12, 1 - A(t, 2.3, 2.2) * 0.88)} /></Pop>
      <Pop t={t} at={6.6} x={640} y={1300} r={-2}><Tag w={360} h={110} fill={P.coral}><TT size={52} y={18}>nhật chủ?</TT></Tag></Pop>
      <Note t={t} at={3.0} x={500} y={1420} size={28}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
    </g>
  </g>
);

// 2. BỐN TRỤ 7.85–13.76
const POP2 = [7.9, 9.5, 10.2, 10.8];
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={7.9} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={POP2[i]} x={200 + i * 200} y={940}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={12.0} t={t} x={500} y={650} w={360} fill="#fff" r={-2} size={36}>trên: thiên can</Lbl>
      <Lbl at={12.9} t={t} x={500} y={1240} w={360} fill={P.yellow} r={2} size={36}>dưới: địa chi</Lbl>
      <Note t={t} at={9.0} x={500} y={1340} size={28}>khung trống minh hoạ, chưa phải lá số thật</Note>
    </g>
  </g>
);

// 3. NHẬT CHỦ 13.76–18.31: can trụ ngày = nhật chủ = cách bạn vận hành (bánh răng)
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={13.8} note="Can của trụ ngày" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={14.0} x={240} y={930} s={0.95}><Pillar name="ngày" fill={P.coral} hi={A(t, 14.6)} /></Pop>
      <TermCard t={t} at={15.4} x={620} y={800} vi="nhật chủ" han="日主" fill={P.coral} r={3} w={300} />
      <Pop t={t} at={16.6} x={560} y={1170}><Gear r={95} c={P.mint} rot={(t - 16.6) * 50} /></Pop>
      <Pop t={t} at={16.9} x={730} y={1250}><Gear r={62} c={P.yellow} rot={-(t - 16.9) * 75 + 20} /></Pop>
      <Lbl at={17.3} t={t} x={430} y={1370} w={460} fill="#fff" r={-1} size={36}>cách bạn vận hành</Lbl>
    </g>
  </g>
);

// 4. MƯỜI NHẬT CHỦ · NĂM HÀNH 18.31–26.40: 10 can theo màu hành + 3 áp lực
const STEMS = Object.keys(STEM);
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={18.35} note="Mười nhật chủ" text="Năm hành" size={150} />
    <g filter="url(#wob)">
      {STEMS.map((s, i) => {
        const [z, el] = STEM[s];
        const col = Math.floor(i / 2), row = i % 2;
        return (
          <Pop key={s} t={t} at={19.7 + col * 0.3 + row * 0.12} x={150 + col * 175} y={640 + row * 170}>
            <rect x={-70} y={-70} width={140} height={140} rx={16} fill={EC[el]} {...L} strokeWidth={5} />
            <text y={14} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={64} fill={P.navy}>{z}</text>
            <text y={56} textAnchor="middle" fontFamily={H} fontWeight={700} fontSize={26} fill={P.navy}>{s}</text>
          </Pop>
        );
      })}
      {(['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'] as const).map((el, i) => (
        <g key={el} opacity={A(t, 21.0 + i * 0.12)}><text x={150 + i * 175} y={940} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={34} fill={P.navy}>{el}</text></g>
      ))}
      <Pop t={t} at={22.4} x={220} y={1180} s={0.5}><Block txt="công việc" w={440} /></Pop>
      <Pop t={t} at={23.9} x={500} y={1180}><Coin r={60} /></Pop>
      <Pop t={t} at={24.6} x={760} y={1180} s={1.1}><Heart /></Pop>
      <Lbl at={25.2} t={t} x={500} y={1350} w={480} fill={P.yellow} r={-1} size={36}>mỗi hành một kiểu riêng</Lbl>
    </g>
  </g>
);

// 5. DÙNG SỨC SAI CHỖ 26.40–33.89: không phải làm sai → đẩy cánh cửa ghi KÉO
const S5: React.FC<SP> = ({t}) => {
  const strike = A(t, 28.6, 0.5);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={26.45} note="Mệt không phải vì" text="Làm sai" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={27.0} x={500} y={640} r={-2}><Tag w={440} h={100} fill="#fff"><TT size={46} y={16}>bạn làm sai</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M290 660 L${290 + 420 * strike} 622`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={29.1} x={790} y={620}><Cross /></Pop>
        <Pop t={t} at={30.7} x={660} y={1060}><Door /></Pop>
        <Pop t={t} at={31.0} x={380} y={1200} s={1.0} r={12}><Person c={P.silver} mood="sad" /></Pop>
        {t > 31.4 && <g transform="translate(420 1010)"><Sweat t={t} /></g>}
        <Lbl at={32.2} t={t} x={430} y={1370} w={560} fill={P.yellow} r={-1} size={38}>dùng sức chưa đúng chỗ</Lbl>
      </g>
    </g>
  );
};

// 6. SẮP SANG 2027 33.89–38.62: lịch lật sang 2027, nhìn lại rồi bước tiếp
const S6: React.FC<SP> = ({t}) => {
  const flip = A(t, 35.2, 0.5);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={33.95} note="Trước khi bước qua" text="Năm 2027" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={34.3} x={300} y={860}><g transform={`scale(1 ${Math.max(0.05, 1 - flip)})`}><Calendar label="2026" /></g></Pop>
        {flip > 0.95 && <Pop t={t} at={35.7} x={300} y={860}><Calendar label="2027" /></Pop>}
        <Pop t={t} at={36.3} x={680} y={1150} s={1.0}><Person c={P.blue} mood="smile" /></Pop>
        <Lbl at={36.6} t={t} x={680} y={760} w={260} fill="#fff" r={3} size={36}>nhìn lại</Lbl>
        <Lbl at={37.6} t={t} x={330} y={1150} w={300} fill={P.mint} r={-2} size={36}>rồi bước tiếp</Lbl>
        {A(t, 37.8) > 0.02 && <path d="M200 1260 Q420 1320 560 1240" fill="none" stroke={P.red} strokeWidth={10} strokeLinecap="round" opacity={A(t, 37.8)} />}
      </g>
    </g>
  );
};

// 7. KHÔNG PHẢI SỐ PHẬN 38.62–43.13
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={38.62} strikeAt={39.7} gearAt={40.9} okAt={41.6} tint={P.sky} />;

// 8. CTA 43.13–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={43.2} note="Bạn sinh năm 90?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={43.5} x={300} y={800} s={0.7} r={-3}><GZ can="Canh" chi="Ngọ" year="1990" /></Pop>
      <Pop t={t} at={44.0} x={690} y={790} r={3}><Tag w={300} h={110} fill={P.coral}><TT size={44} y={16}>nhật chủ …</TT></Tag></Pop>
      <CommentBar t={t} at={44.8} text="1990 · nhật chủ của mình là …" y={1110} dur={1.8} />
      <Lbl at={46.2} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={46.6} x={500} y={1320} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 7.85, C: S1}, {s: 7.85, e: 13.76, C: S2}, {s: 13.76, e: 18.31, C: S3}, {s: 18.31, e: 26.4, C: S4},
  {s: 26.4, e: 33.89, C: S5}, {s: 33.89, e: 38.62, C: S6}, {s: 38.62, e: 43.13, C: S7}, {s: 43.13, e: 48.76, C: S8},
];

export const BaziR17: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r17.mp3" phrases={cap.phrases} scenes={SCENES} />;
