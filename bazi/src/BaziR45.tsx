import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Phone, Shield, Briefcase, Coin, Clock, Tag, Tick, CommentBar, ArrowDown, NotDestiny, TermCard, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note, Heart} from './BaziR14';
import {Pillar, PIL, PF, Battery} from './BaziR17';
import cap from './capR45.json';

// ====== Dòng 45 · Lưng chừng tình cảm: hai lực kéo ngược · 9 cảnh ======
// Không có lá số thật: Tài, Quan Sát, Tỉ Kiếp, Ấn chỉ là thuật ngữ minh hoạ; khung trụ trống. Mốc: src/capR45.json (align_dp)
export const R45_TOTAL = totalFrames(44.832);

// mũi tên ngang (kéo ngược)
const Pull: React.FC<{k: number; dir: 1 | -1; c: string}> = ({k, dir, c}) => (
  <g opacity={k > 0.01 ? 1 : 0} transform={`scale(${dir} 1)`}>
    <path d={`M30 0 H${30 + 200 * k}`} stroke={c} strokeWidth={16} strokeLinecap="round" />
    {k > 0.95 && <path d="M200 -34 L240 0 L200 34" fill="none" stroke={c} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" />}
  </g>
);

// 1. HOOK 0–4.2
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Chuyện tình cảm" text="Lưng chừng" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.8} x={330} y={1200} s={1.05}><Person c={P.blue} mood="sad" /></Pop>
      <Pop t={t} at={1.2} x={660} y={760} s={1.1}><g opacity={1 - 0.5 * A(t, 2.0, 0.8)}><Heart c={P.coral} /></g></Pop>
      <Pop t={t} at={2.2} x={660} y={1000} s={1.2}><Battery k={1 - 0.8 * A(t, 2.6, 1.4)} /></Pop>
      <Lbl at={3.2} t={t} x={630} y={1200} w={320} fill={P.yellow} r={2} size={36}>càng thấy mệt</Lbl>
    </g>
  </g>
);

// 2. NHẬT CHỦ PHẢN ỨNG VỚI TÀI & QUAN SÁT 4.2–11.26
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.25} note="Ít người để ý" text="Tài · Quan Sát" size={115} />
    <g filter="url(#wob)">
      <Pop t={t} at={8.0} x={480} y={680}><g><circle r={70} fill="#fff" {...L} strokeWidth={5} /><TT size={34} y={12}>nhật chủ</TT></g></Pop>
      <TermCard t={t} at={9.7} x={290} y={1010} vi="Tài" han="財" fill={P.yellow} r={-3} w={280} />
      <TermCard t={t} at={10.4} x={680} y={1010} vi="Quan Sát" han="官殺" fill={P.silver} r={3} w={320} />
      <Note t={t} at={10.4} x={480} y={1300} size={26}>thuật ngữ minh hoạ · không phải lá số cụ thể</Note>
    </g>
  </g>
);

// 3. NHẬT CHỦ = CAN TRỤ NGÀY 11.26–14.98
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={11.31} note="Nhật chủ là" text="Can trụ ngày" size={130} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={11.5 + i * 0.2} x={170 + i * 220} y={880} s={0.8}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 12.6, 0.4) : 0} /></Pop>
      ))}
      <Pop t={t} at={13.7} x={330} y={1330} s={0.8}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={14.0} t={t} x={620} y={1240} w={300} fill={P.yellow} r={2} size={40}>chính bạn</Lbl>
      <Note t={t} at={12} x={480} y={1110} size={24}>khung trụ trống · minh hoạ</Note>
    </g>
  </g>
);

// 4. TỈ KIẾP MẠNH → GIỮ KHOẢNG CÁCH 14.98–18.17
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={15.03} note="Khi Tỉ Kiếp mạnh" text="Tự vệ" size={150} />
    <g filter="url(#wob)">
      <TermCard t={t} at={15.2} x={260} y={860} vi="Tỉ Kiếp" han="比劫" fill={P.coral} r={-3} w={300} />
      <Pop t={t} at={16.5} x={560} y={1150} s={0.9}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={16.9} x={720} y={1080}><Shield /></Pop>
      <Lbl at={17.3} t={t} x={640} y={780} w={360} fill="#fff" r={2} size={36}>giữ khoảng cách</Lbl>
    </g>
  </g>
);

// 5. ẤN NẶNG → NGHĨ NHIỀU 18.17–20.88
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={18.22} note="Khi Ấn nặng" text="Nghĩ nhiều" size={150} />
    <g filter="url(#wob)">
      <TermCard t={t} at={18.3} x={260} y={860} vi="Ấn" han="印" fill={P.blue} r={-3} w={260} />
      <Pop t={t} at={19.3} x={600} y={1250}><Person c={P.mint} mood="flat" /></Pop>
      {[[520, 880], [650, 820], [760, 930]].map(([x, y], i) => (
        <Pop key={i} t={t} at={19.6 + i * 0.25} x={x} y={y} r={i * 8 - 8}><Tag w={90} h={90} fill="#fff"><TT size={60} y={22}>?</TT></Tag></Pop>
      ))}
      <Lbl at={20.2} t={t} x={480} y={1360} w={460} fill={P.yellow} r={-1} size={34}>nghĩ trước khi làm</Lbl>
    </g>
  </g>
);

// 6. NHẮN SỢ PHIỀN · KHÔNG NHẮN THẤY THIẾU · KÉO NGƯỢC 20.88–27.13
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={20.93} note="Nhắn hay không nhắn" text="Kéo ngược" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={21.2} x={480} y={880} s={0.8}><Phone><g><rect x={-80} y={-60} width={160} height={70} rx={20} fill="#fff" /><TT size={40} y={-12}>{'…'.repeat(1 + (Math.floor(t * 3) % 3))}</TT></g></Phone></Pop>
      <Lbl at={22.3} t={t} x={260} y={660} w={300} fill={P.coral} r={-2} size={34}>nhắn: sợ phiền</Lbl>
      <Lbl at={24.0} t={t} x={680} y={660} w={340} fill={P.blue} r={2} size={34}>không nhắn: thiếu</Lbl>
      <g transform="translate(480 1200)">
        <Pull k={A(t, 25.4, 0.6)} dir={-1} c={P.coral} />
        <Pull k={A(t, 25.6, 0.6)} dir={1} c={P.blue} />
      </g>
      <Lbl at={26.2} t={t} x={480} y={1330} w={420} fill={P.yellow} r={-1} size={36}>hai lực kéo ngược</Lbl>
    </g>
  </g>
);

// 7. LẶP LẠI Ở CÔNG VIỆC, TIỀN BẠC · CƠ HỘI TRÔI 27.13–33.8
const S7: React.FC<SP> = ({t}) => {
  const drift = A(t, 32.4, 1.2);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={27.18} note="Cũng lặp lại ở" text="Việc · Tiền" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={28.8} x={250} y={780} s={0.6}><Briefcase /></Pop>
        <Pop t={t} at={29.8} x={460} y={790}><Coin r={56} /></Pop>
        <Pop t={t} at={31.0} x={300} y={1120} s={1.1}><Clock t={t} ring /></Pop>
        <Lbl at={31.4} t={t} x={300} y={1300} w={330} fill="#fff" r={-2} size={34}>cân nhắc quá lâu</Lbl>
        <Pop t={t} at={32.4} x={640 + 200 * drift} y={1080 - 60 * drift} r={8}><g opacity={1 - 0.6 * drift}><Tag w={220} h={80} fill={P.yellow}><TT size={36} y={13}>cơ hội</TT></Tag></g></Pop>
      </g>
    </g>
  );
};

// 8. KHÔNG PHẢI SỐ PHẬN 33.8–38.27
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={33.8} strikeAt={34.8} gearAt={36.2} okAt={37.0} tint={P.sky} />;

// 9. CTA 38.27–hết
const CHK = ['giữ khoảng cách', 'nghĩ nhiều', 'nhắn rồi lại thôi'];
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={38.32} note="Bạn có ít nhất" text="Hai điều?" size={145} />
    <g filter="url(#wob)">
      {CHK.map((c, i) => (
        <g key={c}>
          <Pop t={t} at={38.8 + i * 0.4} x={230} y={640 + i * 120}><Tick /></Pop>
          <Lbl at={38.9 + i * 0.4} t={t} x={500} y={640 + i * 120} w={420} fill="#fff" r={i % 2 ? 1 : -1} size={34}>{c}</Lbl>
        </g>
      ))}
      <CommentBar t={t} at={41.6} text="năm sinh … · nhật chủ …" y={1070} dur={1.3} />
      <Lbl at={43.4} t={t} x={480} y={1240} w={380} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={43.7} x={480} y={1300} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.2, C: S1}, {s: 4.2, e: 11.26, C: S2}, {s: 11.26, e: 14.98, C: S3}, {s: 14.98, e: 18.17, C: S4},
  {s: 18.17, e: 20.88, C: S5}, {s: 20.88, e: 27.13, C: S6}, {s: 27.13, e: 33.8, C: S7}, {s: 33.8, e: 38.27, C: S8},
  {s: 38.27, e: 45.232, C: S9},
];

export const BaziR45: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r45.mp3" phrases={cap.phrases} scenes={SCENES} />;
