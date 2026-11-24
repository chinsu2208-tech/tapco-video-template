import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Book, Gear, Tag, Tick, Cross, CommentBar, ArrowDown, NotDestiny, TermCard, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note, Heart} from './BaziR14';
import {Pillar, PIL, PF} from './BaziR17';
import cap from './capR44.json';

// ====== Dòng 44 · Đi làm lâu năm, làm nhiều mà ít được nhắc tên · 8 cảnh ======
// Không có lá số thật: khung 4 trụ trống, Ấn/Thực Thương chỉ là thuật ngữ minh hoạ. Mốc: src/capR44.json (align_dp)
export const R44_TOTAL = totalFrames(42.408);

// bảng tên trống (ẩn dụ "ít được nhắc tên")
const NamePlate: React.FC<{k: number}> = ({k}) => (
  <g>
    <rect x={-220} y={-60} width={440} height={120} rx={16} fill="#fff" {...L} />
    <text x={-190} y={14} fontFamily={H} fontWeight={800} fontSize={40} fill={P.navy}>cảm ơn:</text>
    <path d={`M-20 22 H${-20 + 200 * k}`} stroke={P.navy} strokeWidth={5} strokeDasharray="12 10" strokeLinecap="round" opacity={k > 0.01 ? 1 : 0} />
  </g>
);
// bóng nghĩ
const Bubble: React.FC<{w: number; children: React.ReactNode}> = ({w, children}) => (
  <g>
    <ellipse rx={w / 2} ry={86} fill="#fff" {...L} strokeWidth={5} />
    <circle cx={-w / 2 + 70} cy={110} r={18} fill="#fff" {...L} strokeWidth={4} />
    <circle cx={-w / 2 + 40} cy={150} r={10} fill="#fff" {...L} strokeWidth={4} />
    {children}
  </g>
);

// 1. HOOK 0–3.96
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Đi làm lâu năm" text="Ít được nhắc" size={130} />
    <g filter="url(#wob)">
      {[0, 1, 2, 3].map((i) => (
        <Pop key={i} t={t} at={1.3 + i * 0.35} x={640} y={1150 - i * 70} r={i % 2 ? 3 : -3}><Book c={[P.blue, P.mint, P.yellow, P.coral][i]} w={260} /></Pop>
      ))}
      <Lbl at={2.0} t={t} x={640} y={820} w={300} fill={P.yellow} r={2} size={36}>làm nhiều nhất</Lbl>
      <Pop t={t} at={0.9} x={330} y={1200} s={1.05}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={3.0} x={480} y={680} r={-2}><NamePlate k={A(t, 3.3, 0.6)} /></Pop>
    </g>
  </g>
);

// 2. THẬP THẦN QUANH NHẬT CHỦ 3.96–9.11
const TEN = ['Ấn', 'Thực Thương', 'Tài', 'Quan Sát', 'Tỉ Kiếp'];
const TC = [P.blue, P.mint, P.yellow, P.silver, P.coral];
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.01} note="Ít người để ý" text="Thập thần" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={7.6} x={480} y={960}><Gear r={110} c={P.coral} rot={(t - 7.6) * 30} /></Pop>
      <Pop t={t} at={7.9} x={480} y={960}><g><circle r={56} fill="#fff" {...L} strokeWidth={5} /><TT size={30} y={10}>nhật chủ</TT></g></Pop>
      {TEN.map((n, i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5 + (t - 6) * 0.15;
        return (
          <Pop key={n} t={t} at={6.5 + i * 0.25} x={480 + 290 * Math.cos(a)} y={960 + 260 * Math.sin(a)}>
            <Tag w={n.length > 5 ? 230 : 140} h={70} fill={TC[i]}><TT size={32} y={11}>{n}</TT></Tag>
          </Pop>
        );
      })}
      <Note t={t} at={7.0} x={480} y={1340} size={28}>thuật ngữ · không phải lá số cụ thể</Note>
    </g>
  </g>
);

// 3. NHẬT CHỦ = CAN TRỤ NGÀY = CHÍNH BẠN 9.11–12.49
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={9.16} note="Nhật chủ là" text="Can trụ ngày" size={130} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={9.4 + i * 0.2} x={170 + i * 220} y={880} s={0.8}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 10.4, 0.4) : 0} /></Pop>
      ))}
      <Pop t={t} at={11.4} x={610} y={1330} s={0.8}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={11.8} t={t} x={330} y={1240} w={300} fill={P.yellow} r={-2} size={40}>chính bạn</Lbl>
      <Note t={t} at={10} x={480} y={1110} size={24}>khung trụ trống · minh hoạ</Note>
    </g>
  </g>
);

// 4. ẤN + THỰC THƯƠNG 12.49–15.14
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={12.54} note="Khi lá số thiên về" text="Ấn · Thực Thương" size={105} />
    <g filter="url(#wob)">
      <TermCard t={t} at={13.4} x={300} y={900} vi="Ấn" han="印" fill={P.blue} r={-3} w={300} />
      <TermCard t={t} at={14.2} x={680} y={900} vi="Thực Thương" han="食傷" fill={P.mint} r={3} w={340} />
      <Note t={t} at={14.4} x={480} y={1190} size={26}>ví dụ minh hoạ · cần lá số thật để xét</Note>
    </g>
  </g>
);

// 5. QUEN CHO ĐI · NHẪN NẠI · LÀM XONG LÀ THÔI · KHÔNG ĐÒI GHI NHẬN 15.14–19.58
const HAB: [string, number, string][] = [['quen cho đi', 15.3, P.mint], ['quen nhẫn nại', 16.6, P.sky], ['làm xong là thôi', 17.4, P.yellow], ['không đòi ghi nhận', 18.5, P.peach]];
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={15.19} note="Người ta quen" text="Cho đi" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={15.3} x={200} y={1200} s={0.9}><Person c={P.blue} mood="smile" /></Pop>
      <Pop t={t} at={15.6} x={300} y={1000} s={1.2}><Heart /></Pop>
      {HAB.map(([s, at, c], i) => (
        <g key={s}>
          <Lbl at={at} t={t} x={600} y={680 + i * 150} w={420} fill={c} r={i % 2 ? 1.5 : -1.5} size={38}>{s}</Lbl>
        </g>
      ))}
    </g>
  </g>
);

// 6. KHÔNG PHẢI TÍNH CÁCH CỐ ĐỊNH · LÀ THÓI QUEN 19.58–25.06
const S6: React.FC<SP> = ({t}) => {
  const st = A(t, 22.0, 0.5);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={19.63} note="Sự lặng lẽ" text="Là thói quen" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={20.6} x={480} y={680} r={-2}><Tag w={600} h={110} fill="#fff"><TT size={48} y={17}>tính cách cố định</TT></Tag></Pop>
        {st > 0.01 && <path d={`M190 700 L${190 + 580 * st} 660`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={22.5} x={820} y={660}><Cross /></Pop>
        <Pop t={t} at={23.2} x={360} y={1000}><Gear r={110} c={P.mint} rot={(t - 23.2) * 40} /></Pop>
        <Pop t={t} at={23.5} x={580} y={1120}><Gear r={74} c={P.yellow} rot={-(t - 23.2) * 60 + 20} /></Pop>
        <Lbl at={24.2} t={t} x={480} y={1310} w={560} fill={P.yellow} r={-1} size={40}>cách vận hành quen tay</Lbl>
      </g>
    </g>
  );
};

// 7. TỰ HỎI "MÌNH CÓ ĐƯỢC THẤY?" → BÌNH THƯỜNG 25.06–31.93
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={25.11} note="Nói đơn giản hơn" text="Rất bình thường" size={115} />
    <g filter="url(#wob)">
      <Pop t={t} at={26.5} x={330} y={1250} s={1.05}><Person c={P.blue} mood="flat" /></Pop>
      <Pop t={t} at={27.6} x={560} y={820}><Bubble w={520}><TT size={42} y={14}>mình có được thấy?</TT></Bubble></Pop>
      <Lbl at={30.2} t={t} x={560} y={1420} w={500} fill={P.yellow} r={-1} size={38}>phản ứng bình thường</Lbl>
      <Pop t={t} at={30.9} x={700} y={1180}><Tick /></Pop>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 31.93–35.77
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={31.93} strikeAt={32.7} gearAt={34.0} okAt={34.9} tint={P.sky} />;

// 9. CTA 35.77–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={35.82} note="Lần gần nhất" text="Được cảm ơn?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={36.6} x={480} y={720} r={-2}><NamePlate k={A(t, 37.2, 0.8)} /></Pop>
      <Pop t={t} at={37.9} x={800} y={700} s={1.1}><Heart /></Pop>
      <CommentBar t={t} at={39.2} text="năm sinh … · nhật chủ …" y={1000} dur={1.3} />
      <Lbl at={40.9} t={t} x={480} y={1180} w={380} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={41.2} x={480} y={1240} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 3.96, C: S1}, {s: 3.96, e: 9.11, C: S2}, {s: 9.11, e: 12.49, C: S3}, {s: 12.49, e: 15.14, C: S4},
  {s: 15.14, e: 19.58, C: S5}, {s: 19.58, e: 25.06, C: S6}, {s: 25.06, e: 31.93, C: S7}, {s: 31.93, e: 35.77, C: S8},
  {s: 35.77, e: 42.808, C: S9},
];

export const BaziR44: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r44.mp3" phrases={cap.phrases} scenes={SCENES} />;
