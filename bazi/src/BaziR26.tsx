import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Person, Tick, Cross, Tag, Card, TermCard, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Doodle, EC, El} from './BaziHand';
import {GZ, Note, Heart} from './BaziR14';
import {PIL, PF, Pillar} from './BaziR17';
import {Sign} from './BaziR23';
import cap from './capR26.json';

// ====== Dòng 26 · Sinh năm 1986: chưa rõ mình cần ai · nhật chủ & tình cảm · 9 cảnh ======
// 1986 = Bính Dần (lấy từ STEM/BR qua GZ). Khung 4 trụ là khung trống minh hoạ, không có lá số thật.
// Mốc: src/capR26.json (align_dp)
export const R26_TOTAL = totalFrames(48.89);

const ELS: El[] = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
// hàng 5 hành, k = số hành đã hiện
export const ElRow: React.FC<{t: number; at: number; y: number; step?: number; r?: number}> = ({t, at, y, step = 0.18, r = 70}) => (
  <g>
    {ELS.map((el, i) => (
      <Pop key={el} t={t} at={at + i * step} x={180 + i * 160} y={y}>
        <g>
          <circle r={r} fill={EC[el]} {...L} strokeWidth={5} />
          <g transform={`translate(0 ${-r * 0.18}) scale(${r / 110})`}><Doodle el={el} /></g>
          <text y={r * 0.72} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={r * 0.36} fill={P.navy}>{el}</text>
        </g>
      </Pop>
    ))}
  </g>
);
// cặp kính: nhìn nhận
const Glasses: React.FC = () => (
  <g>
    <circle cx={-110} r={90} fill={P.sky} {...L} strokeWidth={8} opacity={0.95} />
    <circle cx={110} r={90} fill={P.sky} {...L} strokeWidth={8} opacity={0.95} />
    <path d="M-20 -10 Q0 -34 20 -10" fill="none" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
    <path d="M-200 -20 L-250 -50 M200 -20 L250 -50" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
    <path d="M-150 -40 Q-130 -60 -100 -60" fill="none" stroke="#fff" strokeWidth={10} strokeLinecap="round" />
  </g>
);
// trái tim vẽ dở: k 0..1
const HalfHeart: React.FC<{k: number}> = ({k}) => (
  <g transform="scale(3)">
    <path d="M0 40 C-80 -14 -54 -80 0 -40 C54 -80 80 -14 0 40Z" fill={k > 0.98 ? P.coral : 'none'} stroke={P.navy} strokeWidth={3} strokeLinecap="round" pathLength={1} strokeDasharray={`${k} 1`} opacity={k > 0.01 ? 1 : 0} />
  </g>
);

// 1. HOOK 0–5.84
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 1986" text="Cần ai?" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={0.6} x={690} y={900} s={0.95} r={3}><GZ can="Bính" chi="Dần" year="1986" /></Pop>
      <Pop t={t} at={2.6} x={290} y={1300} s={1.05}><Person c={P.coral} mood="flat" /></Pop>
      <Lbl at={2.9} t={t} x={290} y={980} w={300} fill="#fff" r={-3} size={32}>hết vội vã rồi</Lbl>
      <Pop t={t} at={4.6} x={290} y={790}><TT size={120}>?</TT></Pop>
      <Note t={t} at={1.4} x={690} y={1200} size={26}>can chi năm · tính từ Lập xuân</Note>
    </g>
  </g>
);

// 2. ÍT AI ĐỂ Ý: CÁCH NHẬT CHỦ NHÌN TÌNH CẢM 5.84–12.59
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={5.9} note="Điều ít người để ý" text="Cách nhìn" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={6.6} x={500} y={1120} s={1.4}><Heart c={P.coral} /></Pop>
      <Pop t={t} at={10.2} x={500} y={820} r={-3}><Glasses /></Pop>
      <Lbl at={10.5} t={t} x={500} y={640} w={300} fill={P.yellow} r={-2} size={38}>nhật chủ</Lbl>
      <Lbl at={11.7} t={t} x={500} y={1330} w={300} fill="#fff" r={2} size={36}>tình cảm</Lbl>
    </g>
  </g>
);

// 3. NHẬT CHỦ = THIÊN CAN TRỤ NGÀY = CHÍNH BẠN 12.59–16.63
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={12.65} note="Nhật chủ là" text="Can trụ ngày" size={125} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={12.8 + i * 0.15} x={200 + i * 200} y={900}>
          <Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 14.3) : 0} top={i === 2 && t > 14.3 ? '★' : '?'} />
        </Pop>
      ))}
      <Pop t={t} at={15.3} x={600} y={1430} s={0.8}><Person c={P.coral} mood="smile" /></Pop>
      <Lbl at={15.5} t={t} x={330} y={1300} w={290} fill="#fff" r={-2} size={36}>chính bạn</Lbl>
      {t > 15.4 && <path d="M600 1170 V1240" stroke={P.red} strokeWidth={10} strokeLinecap="round" opacity={A(t, 15.4)} />}
      <Note t={t} at={13.5} x={500} y={1150} size={26}>khung trống minh hoạ</Note>
    </g>
  </g>
);

// 4. CẦN ĐƯỢC ĐỐI XỬ THẾ NÀO, KHÔNG PHẢI NGƯỜI KHÁC TRÔNG RA SAO 16.63–23.2
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={16.7} note="Nói đơn giản hơn" text="Cần gì?" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={18.5} x={300} y={980} r={-2}><Card x={-190} y={-280} w={380} h={560} fill="#fff" label="mình cần"><g transform="translate(190 270)"><Heart c={P.coral} /></g><TT x={190} y={420} size={34}>được đối xử</TT><TT x={190} y={466} size={34}>thế nào</TT></Card></Pop>
      <Pop t={t} at={20.4} x={480} y={720}><Tick /></Pop>
      <Pop t={t} at={21.1} x={720} y={980} r={2}><Card x={-170} y={-280} w={340} h={560} fill={P.silver} label="người khác"><g transform="translate(170 340) scale(0.8)"><Person c={P.blue} mood="smile" /></g><TT x={170} y={430} size={32}>trông ra sao</TT></Card></Pop>
      <Pop t={t} at={22.4} x={870} y={720}><Cross /></Pop>
    </g>
  </g>
);

// 5. HÀNH NÀO · TÀI, QUAN HAY ẤN 23.2–27.72
const S5: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={23.25} note="Mình thuộc hành nào" text="Thiên về gì?" size={130} />
    <g filter="url(#wob)">
      <ElRow t={t} at={23.6} y={640} />
      <TermCard t={t} at={25.6} x={230} y={1080} vi="Tài" han="財" fill={P.yellow} r={-3} w={230} />
      <TermCard t={t} at={26.7} x={490} y={1080} vi="Quan" han="官" fill={P.sky} w={230} />
      <TermCard t={t} at={27.25} x={750} y={1080} vi="Ấn" han="印" fill={P.mint} r={3} w={230} />
      <Note t={t} at={25.9} x={500} y={1300} size={26}>thuật ngữ minh hoạ · không phải lá số của ai</Note>
    </g>
  </g>
);

// 6. CHỌN THEO HOÀN CẢNH THAY VÌ NHU CẦU THẬT 27.72–31.05
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={27.8} note="Chưa hiểu mình thì" text="Dễ chọn lệch" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={28.0} x={560} y={1030} s={1.15}><Sign a="nhu cầu thật" b="hoàn cảnh" /></Pop>
      <Pop t={t} at={28.4} x={240} y={1400} s={0.85}><Person c={P.coral} mood="flat" /></Pop>
      {t > 29.2 && <path d="M260 1180 Q300 1100 330 1050" fill="none" stroke={P.red} strokeWidth={9} strokeLinecap="round" opacity={A(t, 29.2)} />}
      <Pop t={t} at={30.2} x={840} y={820}><Heart c={P.mint} /></Pop>
    </g>
  </g>
);

// 7. DỞ DANG KHÔNG HẲN THIẾU DUYÊN · GỌI ĐÚNG TÊN 31.05–37.89
const S7: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={31.1} note="Điều này có nghĩa là" text="Gọi đúng tên" size={130} />
    <g filter="url(#wob)">
      <g transform="translate(330 900)"><HalfHeart k={Math.min(0.55, Math.max(0, (t - 32.0) / 2))} /></g>
      <Lbl at={32.2} t={t} x={330} y={1120} w={260} fill="#fff" r={-2} size={34}>dở dang</Lbl>
      <Lbl at={33.6} t={t} x={760} y={760} w={300} fill={P.silver} r={3} size={34}>thiếu duyên?</Lbl>
      <Pop t={t} at={34.6} x={910} y={700}><Cross /></Pop>
      <Pop t={t} at={35.4} x={540} y={1330}><Tag w={720} h={120} fill={P.mint} r={-1}><TT size={40} y={14}>{'điều mình cần: ' + '……'.slice(0, t > 36.6 ? 2 : t > 36 ? 1 : 0)}</TT></Tag></Pop>
      <Pop t={t} at={36.8} x={880} y={1250}><Tick /></Pop>
    </g>
  </g>
);

// 8. KHÔNG PHẢI SỐ PHẬN 37.89–42.91
const S8: React.FC<SP> = ({t}) => <NotDestiny t={t} s={37.89} strikeAt={38.9} gearAt={40.3} okAt={41.4} tint={P.mint} />;

// 9. CTA 42.91–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={42.95} note="Bạn sinh năm 1986?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={43.2} x={500} y={820} s={0.85}><GZ can="Bính" chi="Dần" year="1986" /></Pop>
      <CommentBar t={t} at={45.6} text="1986 · nhật chủ của mình là …" y={1160} dur={1.6} />
      <Lbl at={46.8} t={t} x={500} y={1300} w={520} fill={P.yellow} r={-1} size={38}>để lại ở bình luận</Lbl>
      <ArrowDown t={t} at={47.3} x={500} y={1360} />
      <Pop t={t} at={47.6} x={820} y={1310}><Tick /></Pop>
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.84, C: S1}, {s: 5.84, e: 12.59, C: S2}, {s: 12.59, e: 16.63, C: S3}, {s: 16.63, e: 23.2, C: S4},
  {s: 23.2, e: 27.72, C: S5}, {s: 27.72, e: 31.05, C: S6}, {s: 31.05, e: 37.89, C: S7}, {s: 37.89, e: 42.91, C: S8},
  {s: 42.91, e: 49.29, C: S9},
];

export const BaziR26: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r26.mp3" phrases={cap.phrases} scenes={SCENES} />;
