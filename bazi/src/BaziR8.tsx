import React from 'react';
import {P, HAND, L, Page, Star, A, cl, Pop, Fade, TT, Lbl, Head, Person, Coin, Wallet, Jar, Bucket, Calendar, Briefcase, Bolt, Tick, Cross, Card, TermCard, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import cap from './capR8.json';

// ====== Dòng 8 · Chính Tài & Thiên Tài: tiền vào mà không giữ · 9 cảnh ======
// Hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR8.json
export const R8_TOTAL = totalFrames(56.256); // 1700

// 1. HOOK 0–6.12: lương về hết sạch
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Lương vừa về đã" text="Hết sạch" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.3} x={280} y={1200} s={1.4}><Person c={P.blue} mood={t < 2.0 ? 'smile' : 'sad'} /></Pop>
      <Pop t={t} at={1.0} x={680} y={900} s={1.2}><Wallet open={t > 1.8} /></Pop>
      {[0, 1, 2, 3, 4].map((i) => {
        const k = cl((t - 1.9 - i * 0.12) / 0.9);
        return k > 0 ? <g key={i} transform={`translate(${680 + (i - 2) * 70 + k * (i - 2) * 60} ${800 - k * 260 + k * k * 120})`} opacity={1 - cl((t - 4) / 0.6)}><Coin r={30} /></g> : null;
      })}
      <Lbl at={2.1} t={t} x={680} y={1120} w={360} fill={P.coral} r={2} size={42}>bay sạch!</Lbl>
      <Pop t={t} at={3.0} x={600} y={1390} r={-1}><Card x={-280} y={-60} w={560} h={120} fill={P.yellow}><TT x={280} y={78} size={40}>cách tiền vận hành?</TT></Card></Pop>
      <Star x={900} y={600} s={A(t, 5.0, 0.4)} />
    </g>
  </g>
);

// 2. HAI KIỂU 6.12–9.51
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={6.2} note="Trong bát tự, tiền có" text="Hai kiểu" size={150} />
    <g filter="url(#wob)">
      <TermCard t={t} at={7.6} x={300} y={760} vi="Chính Tài" han="正財" fill={P.yellow} r={-2} />
      <TermCard t={t} at={8.1} x={720} y={760} vi="Thiên Tài" han="偏財" fill={P.coral} r={2} />
      <Pop t={t} at={8.8} x={510} y={1140} s={1.1}><Coin r={60} /></Pop>
      <Pop t={t} at={9.0} x={370} y={1230} s={0.8}><Coin r={50} /></Pop>
      <Pop t={t} at={9.1} x={650} y={1230} s={0.8}><Coin r={50} /></Pop>
    </g>
  </g>
);

// 3. CHÍNH TÀI 9.51–14.12: đều đặn như lương tháng
const S3: React.FC<SP> = ({t}) => {
  const drops = Math.floor(cl((t - 11.4) / 2.6) * 4);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={9.6} note="Đều đặn, ổn định" text="Chính Tài" size={140} />
      <g filter="url(#wob)">
        {[0, 1, 2].map((i) => <Pop key={i} t={t} at={9.9 + i * 0.25} x={230 + i * 270} y={700} s={0.85} r={(i - 1) * 3}><Calendar label={`tháng ${i + 1}`} /></Pop>)}
        {[0, 1, 2].map((i) => i < drops ? <g key={i} transform={`translate(${230 + i * 270} ${880 + 30 * (1 - A(t, 11.4 + i * 0.65, 0.35))})`}><Coin r={42} /></g> : null)}
        <Pop t={t} at={11.4} x={500} y={1200} s={0.9}><Jar lid fill={0.2 + 0.15 * drops} /></Pop>
        <Lbl at={11.5} t={t} x={230} y={1040} w={300} fill="#fff" r={-3} size={40}>đều đặn</Lbl>
        <Lbl at={12.2} t={t} x={780} y={1040} w={300} fill="#fff" r={3} size={40}>ổn định</Lbl>
        <Lbl at={13.0} t={t} x={500} y={1440} w={560} fill={P.yellow} r={-1} size={42}>như lương hằng tháng</Lbl>
      </g>
    </g>
  );
};

// 4. THIÊN TÀI 14.12–19.38: tiền đến theo cơ hội
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={14.2} note="Đến theo cơ hội" text="Thiên Tài" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={15.6} x={300} y={760} s={1.0}><Bolt /></Pop>
      <Lbl at={16.0} t={t} x={300} y={940} w={300} fill={P.yellow} r={-3} size={40}>cơ hội</Lbl>
      <Pop t={t} at={17.0} x={720} y={760} s={1.0}><Briefcase /></Pop>
      <Lbl at={17.3} t={t} x={720} y={940} w={340} fill="#fff" r={2} size={40}>thương vụ</Lbl>
      {[0, 1, 2, 3, 4, 5].map((i) => <Pop key={i} t={t} at={18.5 + i * 0.1} x={200 + i * 120} y={1180 + (i % 2) * 70} s={0.8}><Coin r={40} /></Pop>)}
      <Lbl at={18.9} t={t} x={500} y={1430} w={460} fill={P.coral} r={-1} size={42}>lúc có, lúc không</Lbl>
    </g>
  </g>
);

// 5. GIỮ CHẮC vs DỄ CHẢY 19.38–26.52
const S5: React.FC<SP> = ({t}) => {
  const leak = cl((t - 25.0) / 1.5);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={19.45} note="Nói đơn giản hơn" text="Giữ hay chảy" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={21.0} x={280} y={900} s={0.95}><Jar lid fill={0.75} /></Pop>
        <TT x={280} y={650} size={40}><tspan opacity={A(t, 21.0)}>Chính Tài</tspan></TT>
        <Lbl at={22.3} t={t} x={280} y={1150} w={320} fill={P.mint} r={-2} size={40}>giữ chắc</Lbl>
        <Pop t={t} at={23.4} x={730} y={880} s={1.0}><Bucket /></Pop>
        <TT x={730} y={650} size={40}><tspan opacity={A(t, 23.4)}>Thiên Tài</tspan></TT>
        {[0, 1, 2].map((i) => <Pop key={i} t={t} at={24.6 + i * 0.15} x={680 + i * 50} y={750} s={0.7}><Coin r={36} /></Pop>)}
        {leak > 0 && [0, 1, 2].map((i) => {
          const ph = ((t - 25.0) * 1.2 + i / 3) % 1;
          return <g key={i} transform={`translate(${770 + ph * 30} ${970 + ph * 260})`} opacity={1 - ph}><Coin r={24} /></g>;
        })}
        <Lbl at={24.5} t={t} x={730} y={1150} w={300} fill={P.yellow} r={2} size={40}>dễ vào</Lbl>
        <Lbl at={25.8} t={t} x={730} y={1330} w={340} fill={P.coral} r={-2} size={40}>dễ chảy đi</Lbl>
      </g>
    </g>
  );
};

// 6. KIẾM GIỎI GIỮ KHÔNG NỔI 26.52–34.42
const S6: React.FC<SP> = ({t}) => {
  const g = A(t, 32.4, 1.0);
  const pts = [0, 1, 2, 3, 4, 5, 6].map((i) => `${180 + i * 110},${1260 + (i % 2 ? -1 : 1) * 70 * g - i * 6}`).join(' ');
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={26.6} note="Có người kiếm rất giỏi" text="Giữ không nổi" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={28.2} x={300} y={950} s={1.25}><Person c={P.coral} mood={t < 30.4 ? 'smile' : 'flat'} /></Pop>
        {[0, 1, 2].map((i) => <Pop key={i} t={t} at={29.4 + i * 0.15} x={480 + i * 70} y={700 - i * 30} s={0.75}><Coin r={40} /></Pop>)}
        <Lbl at={29.5} t={t} x={700} y={760} w={320} fill={P.mint} r={2} size={40}>kiếm giỏi</Lbl>
        <Pop t={t} at={30.4} x={700} y={900}><Cross /></Pop>
        <Lbl at={30.6} t={t} x={700} y={1000} w={360} fill={P.coral} r={-2} size={40}>giữ không nổi</Lbl>
        <g opacity={A(t, 31.1, 0.4)}><polyline points={pts} fill="none" stroke={P.navy} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" /></g>
        <Lbl at={32.4} t={t} x={320} y={1420} w={320} fill={P.yellow} r={-2} size={40}>linh hoạt</Lbl>
        <Lbl at={33.5} t={t} x={700} y={1420} w={320} fill={P.blue} r={2} size={40}>biến động</Lbl>
      </g>
    </g>
  );
};

// 7. ĐỜI SỐNG 34.42–40.98
const Cart: React.FC = () => (
  <g><path d="M-120 -80 H-90 L-60 40 H90 L110 -40 H-80" fill={P.sky} {...L} /><circle cx={-40} cy={80} r={20} fill="#fff" {...L} strokeWidth={5} /><circle cx={70} cy={80} r={20} fill="#fff" {...L} strokeWidth={5} /></g>
);
const ChartUp: React.FC = () => (
  <g><rect x={-120} y={-100} width={240} height={200} rx={14} fill="#fff" {...L} />{[0, 1, 2].map((i) => <rect key={i} x={-90 + i * 65} y={60 - (i + 1) * 40} width={45} height={(i + 1) * 40} fill={[P.mint, P.yellow, P.coral][i]} stroke={P.navy} strokeWidth={4} />)}<path d="M-90 -40 L70 -80" stroke={P.red} strokeWidth={7} strokeLinecap="round" /></g>
);
const Weight: React.FC = () => (
  <g><path d="M-30 -110 C-30 -150 30 -150 30 -110" fill="none" stroke={P.navy} strokeWidth={10} /><path d="M-80 -100 H80 L120 100 H-120Z" fill={P.navy} {...L} /><text y={30} textAnchor="middle" fontFamily={HAND} fontSize={56} fill="#fff">nợ?</text></g>
);
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={34.5} note="Trong đời sống, ảnh hưởng" text="Cách tiêu tiền" size={120} />
    <g filter="url(#wob)">
      <Pop t={t} at={37.4} x={260} y={760}><Cart /></Pop>
      <Lbl at={37.5} t={t} x={260} y={930} w={300} fill="#fff" r={-2} size={40}>chi tiêu</Lbl>
      <Pop t={t} at={38.3} x={740} y={760}><ChartUp /></Pop>
      <Lbl at={38.4} t={t} x={740} y={930} w={300} fill="#fff" r={2} size={40}>đầu tư</Lbl>
      <Pop t={t} at={39.6} x={500} y={1180} s={0.9}><Weight /></Pop>
      <Lbl at={40.2} t={t} x={500} y={1400} w={480} fill={P.coral} r={-1} size={42}>áp lực tài chính</Lbl>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 40.98–47.75 + "không ai lười hay dở"
const S8: React.FC<SP> = ({t}) => (
  <NotDestiny t={t} s={40.98} strikeAt={42.2} gearAt={43.4} okAt={44.6}
    extra={<Pop t={t} at={45.9} x={0} y={0}><Fade o={1}><g transform="translate(500 1490) rotate(-2)"><Card x={-330} y={-50} w={660} h={100} fill={P.mint}><TT x={330} y={66} size={40}>không ai lười hay dở cả</TT></Card></g></Fade></Pop>} />
);

// 9. CTA 47.75–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={47.8} note="Bạn thuộc kiểu nào?" text="Kiếm hay giữ" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={48.4} x={300} y={830}><Card x={-160} y={-160} w={320} h={310} fill={P.yellow} r={-2}><g transform="translate(160 130)"><Coin r={56} /></g><TT x={160} y={260} size={46}>Kiếm giỏi</TT></Card></Pop>
      <Pop t={t} at={49.6} x={710} y={830}><Card x={-160} y={-160} w={320} h={310} fill={P.mint} r={2}><g transform="translate(160 140) scale(0.45)"><Jar lid fill={0.7} /></g><TT x={160} y={260} size={46}>Giữ giỏi</TT></Card></Pop>
      <CommentBar t={t} at={51.0} text="Năm sinh / nhật chủ của mình…" y={1160} dur={2.0} />
      <Lbl at={54.2} t={t} x={500} y={1310} w={560} fill={P.yellow} r={-1} size={40}>mình giải thích thêm</Lbl>
      <ArrowDown t={t} at={54.6} x={500} y={1380} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 6.12, C: S1}, {s: 6.12, e: 9.51, C: S2}, {s: 9.51, e: 14.12, C: S3}, {s: 14.12, e: 19.38, C: S4},
  {s: 19.38, e: 26.52, C: S5}, {s: 26.52, e: 34.42, C: S6}, {s: 34.42, e: 40.98, C: S7}, {s: 40.98, e: 47.75, C: S8},
  {s: 47.75, e: 56.66, C: S9},
];

export const BaziR8: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r8.mp3" phrases={cap.phrases} scenes={SCENES} />;
