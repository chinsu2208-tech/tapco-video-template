import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Briefcase, Block, Person, Card, TermCard, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note, House, Heart} from './BaziR14';
import cap from './capR15.json';

// ====== Dòng 15 · Sinh năm 1995 (Ất Hợi), chưa kịp ổn đã bị hỏi lập nghiệp, thành gia → mỗi người một nhịp · 7 cảnh ======
// Can chi lấy từ bảng STEM/BR. 4 trụ để trống = khung minh hoạ, không phải lá số thật. Mốc: src/capR15.json
export const R15_TOTAL = totalFrames(52.7);

const PIL = ['năm', 'tháng', 'ngày', 'giờ'];
const PX = [200, 400, 600, 800];
const PF = [P.yellow, P.mint, P.coral, P.blue];
const Pillar: React.FC<{name: string; fill: string; hi?: number}> = ({name, fill, hi = 0}) => (
  <g>
    <rect x={-85} y={-210} width={170} height={420} rx={18} fill={fill} {...L} />
    <text y={-160} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={40} fill={P.navy}>{name}</text>
    <rect x={-62} y={-125} width={124} height={130} rx={12} fill="#fff" {...L} strokeWidth={5} />
    <text y={-40} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={60} fill={P.navy}>?</text>
    <rect x={-62} y={40} width={124} height={130} rx={12} fill="#fff" {...L} strokeWidth={5} />
    <text y={125} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={60} fill={P.navy}>?</text>
    {hi > 0.01 && <rect x={-76} y={-138} width={152} height={156} rx={14} fill="none" stroke={P.red} strokeWidth={10} opacity={hi} />}
  </g>
);
const Mirror: React.FC = () => (
  <g>
    <ellipse rx={130} ry={170} fill={P.silver} {...L} />
    <ellipse rx={104} ry={142} fill={P.sky} {...L} strokeWidth={4} />
    <path d="M-60 -90 L-30 -120 M-70 -50 L-20 -100" stroke="#fff" strokeWidth={10} strokeLinecap="round" />
    <path d="M-20 170 V230 M-70 240 H70" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
  </g>
);
const Flag: React.FC<{c?: string}> = ({c = P.red}) => (
  <g><path d="M0 0 V-120" stroke={P.navy} strokeWidth={7} strokeLinecap="round" /><path d="M0 -120 L70 -98 L0 -76Z" fill={c} {...L} strokeWidth={4} /></g>
);

// 1. HOOK 0–10.24: 1995 Ất Hợi, bị hỏi bao giờ lập nghiệp, bao giờ thành gia
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Sinh năm 1995 ơi" text="Chưa kịp ổn" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={2.2} x={260} y={800} s={0.8} r={-3}><GZ can="Ất" chi="Hợi" year="1995" /></Pop>
      <Pop t={t} at={4.0} x={500} y={1340} s={1.1}><Person c={P.blue} mood={t > 6.5 ? 'sad' : 'flat'} /></Pop>
      <Pop t={t} at={6.6} x={690} y={760} r={3}><Card x={-190} y={-60} w={380} h={120} fill="#fff"><TT x={190} y={76} size={36}>bao giờ lập nghiệp?</TT></Card></Pop>
      <Pop t={t} at={8.4} x={690} y={950} r={-2}><Card x={-190} y={-60} w={380} h={120} fill={P.peach}><TT x={190} y={76} size={36}>bao giờ thành gia?</TT></Card></Pop>
      <Pop t={t} at={7.0} x={240} y={1150} s={0.55}><Briefcase /></Pop>
      <Pop t={t} at={8.8} x={770} y={1160} s={0.5}><House /></Pop>
    </g>
  </g>
);

// 2. BỐN TRỤ 10.24–19.21: nhịp của lá số → 4 trụ năm/tháng/ngày/giờ, mỗi trụ can trên chi dưới
const POPS = [11.9, 12.7, 14.4, 15.2];
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.3} note="Nguyên nhân ở nhịp lá số" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => <Pop key={n} t={t} at={POPS[i]} x={PX[i]} y={950}><Pillar name={n} fill={PF[i]} /></Pop>)}
      <Lbl at={17.3} t={t} x={500} y={640} w={360} fill="#fff" r={-2} size={36}>trên: thiên can</Lbl>
      <Lbl at={18.2} t={t} x={500} y={1260} w={360} fill={P.yellow} r={2} size={36}>dưới: địa chi</Lbl>
      <Note t={t} at={13.0} x={500} y={1360} size={28}>khung trống minh hoạ, chưa phải lá số thật</Note>
    </g>
  </g>
);

// 3. NHẬT CHỦ 19.21–24.22: can trụ ngày → tấm gương, chính bạn
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={19.3} note="Can của trụ ngày gọi là" text="Nhật chủ" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={19.6} x={260} y={950} s={0.85}><Pillar name="ngày" fill={P.coral} hi={A(t, 20.6)} /></Pop>
      <Pop t={t} at={21.0} x={260} y={640} r={-3}><Tag w={260} h={100} fill="#fff"><TT size={56} y={20} font={CJK}>日主</TT></Tag></Pop>
      <g opacity={A(t, 22.0)}>
        <path d="M360 880 Q450 820 520 880" stroke={P.navy} strokeWidth={8} fill="none" strokeLinecap="round" />
        <path d="M500 850 L524 884 L486 896" stroke={P.navy} strokeWidth={8} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <Pop t={t} at={22.3} x={680} y={950}><Mirror /></Pop>
      <g opacity={A(t, 22.6)} transform="translate(680 1060) scale(0.62)"><Person c={P.blue} mood="smile" /></g>
      <Lbl at={22.8} t={t} x={680} y={1300} w={320} fill={P.yellow} r={2} size={38}>chính bạn</Lbl>
    </g>
  </g>
);

// 4. THẬP THẦN 24.22–32.28: nhật chủ gặp năng lượng gì: Tài = tiền bạc, Quan Sát = áp lực, trách nhiệm
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={24.3} note="Nhật chủ gặp năng lượng gì?" text="Thập thần" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={24.8} x={760} y={560} r={3}><Tag w={280} h={100} fill="#fff"><TT size={56} y={20} font={CJK}>十神</TT></Tag></Pop>
      <TermCard t={t} at={28.0} x={280} y={850} vi="Tài" han="財" fill={P.yellow} r={-3} w={300} />
      <Pop t={t} at={28.8} x={280} y={1110}><Coin r={56} /></Pop>
      <Lbl at={29.0} t={t} x={280} y={1220} w={260} fill="#fff" r={-2} size={36}>tiền bạc</Lbl>
      <TermCard t={t} at={30.0} x={700} y={850} vi="Quan Sát" han="官殺" fill={P.coral} r={3} w={340} />
      <Pop t={t} at={30.8} x={700} y={1110} s={0.5}><Block txt="áp lực" w={420} /></Pop>
      <Lbl at={31.4} t={t} x={700} y={1220} w={300} fill={P.yellow} r={2} size={36}>trách nhiệm</Lbl>
    </g>
  </g>
);

// 5. NHỊP RIÊNG 32.28–39.33: ba làn chạy, mỗi người tới cờ một lúc
const LANES = [{c: P.coral, v: 1.0, y: 760}, {c: P.blue, v: 0.6, y: 1010}, {c: P.mint, v: 0.8, y: 1260}];
const S5: React.FC<SP> = ({t}) => {
  const go = Math.max(0, t - 33.6);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={32.35} note="Mỗi người có một" text="Nhịp riêng" size={150} />
      <g filter="url(#wob)">
        {LANES.map((ln, i) => {
          const x = 180 + Math.min(1, (go * ln.v) / 4.5) * 520;
          return (
            <g key={i} opacity={A(t, 32.8 + i * 0.3)}>
              <path d={`M120 ${ln.y + 20} H860`} stroke={P.navy} strokeWidth={5} strokeDasharray="18 16" strokeLinecap="round" />
              <g transform={`translate(780 ${ln.y + 20})`}><Flag c={i === 2 ? P.red : P.yellow} /></g>
              <g transform={`translate(${x} ${ln.y + 20}) scale(0.55)`}><Person c={ln.c} mood="smile" /></g>
            </g>
          );
        })}
        <Pop t={t} at={36.9} x={250} y={1420} s={0.45}><Briefcase /></Pop>
        <Pop t={t} at={37.6} x={400} y={1420} s={0.8}><Heart /></Pop>
        <Lbl at={38.0} t={t} x={680} y={1420} w={360} fill={P.yellow} r={-1} size={36}>không cùng lúc</Lbl>
      </g>
    </g>
  );
};

// 6. KHÔNG PHẢI SỐ PHẬN 39.33–45.39
const S6: React.FC<SP> = ({t}) => <NotDestiny t={t} s={39.33} strikeAt={41.7} gearAt={43.4} okAt={44.0} tint={P.sky} />;

// 7. CTA 45.39–hết
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={45.45} note="Bạn sinh năm 1995?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={45.9} x={300} y={800} s={0.75} r={-3}><GZ can="Ất" chi="Hợi" year="1995" /></Pop>
      <Pop t={t} at={46.6} x={700} y={820} s={0.9}><Person c={P.blue} mood="smile" /></Pop>
      <CommentBar t={t} at={48.4} text="Mình 1995 · nhật chủ…" y={1110} dur={1.8} />
      <Lbl at={49.2} t={t} x={500} y={1260} w={560} fill={P.yellow} r={-1} size={38}>năm sinh hoặc nhật chủ</Lbl>
      <Note t={t} at={49.8} x={500} y={1350} size={30}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</Note>
      <ArrowDown t={t} at={51.0} x={500} y={1375} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 10.24, C: S1}, {s: 10.24, e: 19.21, C: S2}, {s: 19.21, e: 24.22, C: S3}, {s: 24.22, e: 32.28, C: S4},
  {s: 32.28, e: 39.33, C: S5}, {s: 39.33, e: 45.39, C: S6}, {s: 45.39, e: 53.2, C: S7},
];

export const BaziR15: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r15.mp3" phrases={cap.phrases} scenes={SCENES} />;
