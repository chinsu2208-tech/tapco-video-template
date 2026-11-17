import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Briefcase, Clock, Jar, Block, Tick, TermCard, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {EC} from './BaziHand';
import {Note, Heart} from './BaziR14';
import {Battery} from './BaziR17';
import {Scale} from './BaziR23';
import cap from './capR27.json';

// ====== Dòng 27 · Tỉ Kiên & Kiếp Tài: người hay giúp bạn bè, cho nhiều thấy hao · 10 cảnh ======
// Thuật ngữ thập thần cố định (比肩, 劫財). Người/màu hành trong hình là minh hoạ, không phải lá số thật.
// Mốc: src/capR27.json (align_dp)
export const R27_TOTAL = totalFrames(56.06);

// 1. HOOK 0–4.06: cho đi → pin cạn
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Người hay giúp bạn bè" text="Càng cho càng hao" size={95} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.4} x={280} y={1320}><Person c={P.mint} mood="smile" /></Pop>
      <Pop t={t} at={0.9} x={620} y={1360} s={0.8}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={1.1} x={820} y={1360} s={0.8}><Person c={P.yellow} mood="smile" /></Pop>
      {[0, 1, 2].map((i) => {
        const k = Math.max(0, Math.min(1, (t - 1.6 - i * 0.5) / 0.8));
        return k > 0 ? <g key={i} transform={`translate(${340 + k * (300 + i * 80)} ${1150 - Math.sin(k * Math.PI) * 140})`}><Coin r={30} /></g> : null;
      })}
      <Pop t={t} at={2.4} x={280} y={900} s={1.4}><Battery k={Math.max(0.12, 1 - Math.max(0, t - 2.6) * 0.6)} /></Pop>
      <Lbl at={3.3} t={t} x={300} y={760} w={180} fill={P.coral} r={-3} size={38}>hao</Lbl>
    </g>
  </g>
);

// 2. HAI THẬP THẦN 4.06–10.01
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.1} note="Ít ai để ý trong lá số" text="2 thập thần" size={140} />
    <g filter="url(#wob)">
      <TermCard t={t} at={8.0} x={290} y={950} vi="Tỉ Kiên" han="比肩" fill={P.mint} r={-3} />
      <TermCard t={t} at={9.1} x={710} y={950} vi="Kiếp Tài" han="劫財" fill={P.coral} r={3} />
      <Pop t={t} at={4.8} x={500} y={1320}><TT size={110}>?</TT></Pop>
    </g>
  </g>
);

// 3. THẬP THẦN = QUAN HỆ CAN KHÁC ↔ NHẬT CHỦ 10.01–16.52
const SAT: [number, number, number][] = [[200, 720, 12.0], [800, 720, 12.3], [200, 1260, 12.6], [800, 1260, 12.9]];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={10.05} note="Thập thần là" text="Mối quan hệ" size={140} />
    <g filter="url(#wob)">
      {SAT.map(([x, y, at], i) => (
        <g key={i}>
          {t > at + 0.2 && <path d={`M${x} ${y} L500 990`} stroke={P.navy} strokeWidth={5} strokeDasharray="14 14" opacity={A(t, at + 0.2) * 0.6} />}
          <Pop t={t} at={at} x={x} y={y}><g><circle r={80} fill="#fff" {...L} /><TT size={36} y={12}>can</TT></g></Pop>
        </g>
      ))}
      <Pop t={t} at={13.6} x={500} y={990}><g><circle r={130} fill={P.yellow} {...L} /><TT size={42} y={-4}>nhật chủ</TT><TT size={28} y={40} w={700}>(bạn)</TT></g></Pop>
      <Lbl at={15.0} t={t} x={500} y={1460} w={460} fill="#fff" r={-1} size={34}>= thiên can trụ ngày</Lbl>
    </g>
  </g>
);

// 4. CÙNG HÀNH: BẠN BÈ, ANH EM, CÙNG NHỊP 16.52–22.94
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={16.6} note="Tỉ Kiên · Kiếp Tài" text="Cùng hành" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={17.3} x={500} y={1080} s={1.05}><Person c={EC['Mộc']} mood="smile" /></Pop>
      <Lbl at={17.6} t={t} x={500} y={760} w={240} fill={P.yellow} size={34}>nhật chủ</Lbl>
      <Pop t={t} at={19.6} x={220} y={1160} s={0.85}><Person c={EC['Mộc']} mood="smile" /></Pop>
      <Pop t={t} at={21.1} x={780} y={1160} s={0.85}><Person c={EC['Mộc']} mood="talk" /></Pop>
      <Lbl at={19.8} t={t} x={220} y={1260} w={210} fill="#fff" r={-3} size={32}>bạn bè</Lbl>
      <Lbl at={21.2} t={t} x={780} y={1260} w={210} fill="#fff" r={3} size={32}>anh em</Lbl>
      <Lbl at={21.8} t={t} x={500} y={1400} w={340} fill={P.sky} size={34}>người cùng nhịp</Lbl>
      <Note t={t} at={18.2} x={500} y={1500} size={26}>ví dụ minh hoạ: cùng hành Mộc</Note>
    </g>
  </g>
);

// 5. CHIA SẺ, ĐỒNG HÀNH, CHIA LUÔN NGUỒN LỰC 22.94–29.07
const S5: React.FC<SP> = ({t}) => {
  const fill = Math.max(0.15, 0.85 - Math.max(0, t - 27.3) * 0.4);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={23.0} note="Nói đơn giản hơn" text="Nhóm chia sẻ" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={24.4} x={300} y={1080}><Jar fill={fill} lid={false} /></Pop>
        <Lbl at={24.6} t={t} x={730} y={720} w={260} fill="#fff" r={2} size={36}>chia sẻ</Lbl>
        <Lbl at={26.0} t={t} x={730} y={860} w={260} fill={P.mint} r={-2} size={36}>đồng hành</Lbl>
        <Lbl at={27.4} t={t} x={730} y={1000} w={340} fill={P.coral} r={2} size={36}>chia nguồn lực</Lbl>
        {[0, 1, 2].map((i) => {
          const k = Math.max(0, Math.min(1, (t - 27.6 - i * 0.4) / 0.7));
          return k > 0 ? <g key={i} transform={`translate(${320 + k * (300 + i * 90)} ${960 - Math.sin(k * Math.PI) * 160 + k * 340})`}><Coin r={32} /></g> : null;
        })}
      </g>
    </g>
  );
};

// 6. NHÓM MẠNH → NHẬN LỜI, GÁNH VIỆC, CHIA TIỀN & THỜI GIAN 29.07–36.71
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={29.1} note="Khi nhóm này mạnh" text="Dễ gánh" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={29.8} x={300} y={1400}><Person c={EC['Mộc']} mood="talk" /></Pop>
      <Lbl at={31.6} t={t} x={300} y={1080} w={330} fill="#fff" r={-3} size={36}>ok, để mình!</Lbl>
      <Pop t={t} at={32.9} x={720} y={700} s={0.75} r={-4}><Briefcase /></Pop>
      <Pop t={t} at={33.2} x={720} y={600} s={0.65} r={5}><Briefcase /></Pop>
      <Note t={t} at={33.1} x={720} y={800} size={30}>gánh việc</Note>
      <Pop t={t} at={34.4} x={640} y={1010}><Coin r={46} /></Pop>
      <Pop t={t} at={34.6} x={760} y={1030}><Coin r={46} /></Pop>
      <Note t={t} at={34.5} x={700} y={1110} size={30}>tiền bạc</Note>
      <Pop t={t} at={35.4} x={700} y={1300} s={0.8}><Clock t={t} /></Pop>
      <Note t={t} at={35.5} x={700} y={1440} size={30}>thời gian</Note>
    </g>
  </g>
);

// 7. HỆ QUẢ 36.71–43.33
const S7: React.FC<SP> = ({t}) => {
  const drop = Math.max(0, Math.min(1, (t - 41.0) / 0.6));
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={36.75} note="Hệ quả thường thấy" text="Mình chậm lại" size={125} />
      <g filter="url(#wob)">
        <Pop t={t} at={37.6} x={250} y={760} s={0.7}><Briefcase /></Pop>
        <Lbl at={38.4} t={t} x={250} y={900} w={300} fill="#fff" r={-2} size={32}>việc chậm lại</Lbl>
        <Pop t={t} at={39.7} x={750} y={760} s={0.9}><Jar fill={0.12} lid={false} /></Pop>
        <Lbl at={40.0} t={t} x={750} y={960} w={300} fill="#fff" r={2} size={32}>tiền khó đọng</Lbl>
        <g opacity={drop > 0 ? 1 : 0} transform={`translate(560 ${1050 + drop * 200})`}><Block txt="áp lực" w={380} /></g>
        <Pop t={t} at={41.2} x={250} y={1420} s={0.75}><Person c={EC['Mộc']} mood="sad" /></Pop>
        <Note t={t} at={42.2} x={560} y={1440} size={28}>mà không ai thấy</Note>
      </g>
    </g>
  );
};

// 8. KHÔNG PHẢI SỐ PHẬN 43.33–46.83
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={43.33} strikeAt={44.0} gearAt={45.1} okAt={45.6} tint={P.mint} />;

// 9. GIÚP ĐÚNG CHỖ, ĐÚNG MỨC 46.83–50.46
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={46.9} note="Hiểu rồi thì" text="Giúp vừa đủ" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={47.2} x={500} y={1040}><Scale k={Math.max(0, 0.8 - Math.max(0, t - 48.3) * 0.6)} /></Pop>
      <Pop t={t} at={47.5} x={300} y={870} s={0.6}><Heart c={P.coral} /></Pop>
      <Pop t={t} at={47.7} x={700} y={870}><Coin r={36} /></Pop>
      <Lbl at={49.0} t={t} x={300} y={1340} w={280} fill={P.yellow} r={-2} size={36}>đúng chỗ</Lbl>
      <Lbl at={50.0} t={t} x={700} y={1340} w={280} fill={P.mint} r={2} size={36}>đúng mức</Lbl>
    </g>
  </g>
);

// 10. CTA 50.46–hết
const S10: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={50.5} note="Bạn có hay giúp bạn bè?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={50.8} x={360} y={880} s={0.8}><Person c={EC['Mộc']} mood="smile" /></Pop>
      <Pop t={t} at={51.0} x={640} y={880} s={0.8}><Person c={P.blue} mood="smile" /></Pop>
      <CommentBar t={t} at={52.8} text="năm sinh · nhật chủ của mình là …" y={1110} dur={1.6} />
      <Lbl at={54.2} t={t} x={500} y={1260} w={520} fill={P.yellow} r={-1} size={38}>để lại ở comment</Lbl>
      <ArrowDown t={t} at={54.6} x={500} y={1320} />
      <Pop t={t} at={55.0} x={820} y={1270}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.06, C: S1}, {s: 4.06, e: 10.01, C: S2}, {s: 10.01, e: 16.52, C: S3}, {s: 16.52, e: 22.94, C: S4},
  {s: 22.94, e: 29.07, C: S5}, {s: 29.07, e: 36.71, C: S6}, {s: 36.71, e: 43.33, C: S7}, {s: 43.33, e: 46.83, C: S8},
  {s: 46.83, e: 50.46, C: S9}, {s: 50.46, e: 56.46, C: S10},
];

export const BaziR27: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r27.mp3" phrases={cap.phrases} scenes={SCENES} />;
