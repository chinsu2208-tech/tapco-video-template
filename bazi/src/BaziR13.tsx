import React from 'react';
import {P, H, HAND, CJK, L, Page, A, Pop, TT, Lbl, Head, Tag, Coin, Briefcase, Block, Cross, Tick, Person, Gear, ArrowDown, CommentBar, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Doodle, EC, EZ, El} from './BaziHand';
import cap from './capR13.json';

// ====== Dòng 13 · Hỷ dụng thần là gì: hành giúp lá số cân bằng, không phải bùa may mắn · 8 cảnh ======
// Hình minh hoạ khái niệm, không phải lá số thật. Mốc: src/capR13.json
export const R13_TOTAL = totalFrames(50.11); // 1516

const ElBall: React.FC<{el: El; r?: number}> = ({el, r = 82}) => (
  <g>
    <circle r={r} fill={EC[el]} {...L} />
    <g transform={`translate(0 ${-r * 0.2}) scale(${r / 110})`}><Doodle el={el} /></g>
    <text y={r * 0.78} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={r * 0.38} fill={P.navy}>{el}</text>
    <text x={r * 0.72} y={-r * 0.62} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={r * 0.42} fill={P.navy}>{EZ[el]}</text>
  </g>
);
const Q: React.FC<{c?: string}> = ({c = P.yellow}) => (
  <g><circle r={44} fill={c} {...L} strokeWidth={5} /><text y={22} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={64} fill={P.navy}>?</text></g>
);
const Note: React.FC<{t: number; at: number; x: number; y: number; children: React.ReactNode}> = ({t, at, x, y, children}) => (
  <text x={x} y={y} textAnchor="middle" fontFamily={HAND} fontSize={32} fill={P.navy} opacity={A(t, at) * 0.8}>{children}</text>
);
// bùa giấy (talisman) – đồ vật ẩn dụ "bùa may mắn"
const Talisman: React.FC = () => (
  <g>
    <rect x={-70} y={-150} width={140} height={300} rx={8} fill={P.yellow} {...L} />
    <path d="M-30 -110 Q0 -80 30 -110 M0 -95 V110 M-34 -40 H34 M-30 20 Q0 50 30 20 M-26 80 L26 110" stroke={P.red} strokeWidth={8} fill="none" strokeLinecap="round" />
  </g>
);
const Pillow: React.FC = () => (
  <g>
    <rect x={-210} y={-20} width={420} height={110} rx={20} fill={P.blue} {...L} />
    <path d="M-170 -20 C-170 -80 -40 -80 -40 -20Z" fill="#fff" {...L} strokeWidth={5} />
  </g>
);
const Moon: React.FC = () => <path d="M20 -60 A60 60 0 1 0 60 30 A48 48 0 1 1 20 -60Z" fill={P.yellow} {...L} strokeWidth={5} />;

// 1. HOOK 0–7.49: gặp "hỷ dụng thần" hoài mà chưa hiểu
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={0.05} note="Mới tìm hiểu bát tự?" text="Hỷ dụng thần" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={3.8} x={500} y={720} r={-2}>
        <Tag w={520} h={170} fill="#fff">
          <text y={10} textAnchor="middle" fontFamily={CJK} fontWeight={700} fontSize={84} fill={P.navy}>喜用神</text>
          <text y={60} textAnchor="middle" fontFamily={H} fontWeight={700} fontSize={34} fill={P.navy}>hỷ dụng thần</text>
        </Tag>
      </Pop>
      <Pop t={t} at={1.0} x={500} y={1240} s={1.15}><Person c={P.coral} mood={t > 5.8 ? 'flat' : 'smile'} /></Pop>
      <Pop t={t} at={5.0} x={240} y={980} r={-10}><Q /></Pop>
      <Pop t={t} at={5.5} x={770} y={960} r={8}><Q c={P.mint} /></Pop>
      <Pop t={t} at={6.0} x={300} y={1420} s={0.8}><Q c={P.peach} /></Pop>
      <Lbl at={6.6} t={t} x={720} y={1420} w={340} fill={P.yellow} r={2} size={38}>chưa hiểu rõ</Lbl>
    </g>
  </g>
);

// 2. HÀNH GIÚP LÁ SỐ CÂN BẰNG 7.49–15.46: cán cân lệch → thêm 1 hành → cân; bánh răng "bổ trợ"
const S2: React.FC<SP> = ({t}) => {
  const add = A(t, 10.9, 0.8);
  const tip = 13 * (1 - add) * A(t, 8.4, 0.6);
  const gearO = A(t, 12.6, 0.4);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={7.55} note="Hỷ dụng thần là hành giúp" text="Cân bằng" size={150} />
      <g filter="url(#wob)">
        <g opacity={A(t, 7.9)} transform="translate(500 760)">
          <path d="M0 0 V200 M-100 200 H100" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
          <g transform={`rotate(${tip})`}>
            <path d="M-270 0 H270" stroke={P.navy} strokeWidth={9} strokeLinecap="round" />
            <g transform={`translate(-270 0) rotate(${-tip})`}>
              <path d="M-80 0 Q0 60 80 0Z" fill="#fff" {...L} strokeWidth={5} />
              <g transform="translate(-28 -42)"><ElBall el="Hỏa" r={40} /></g>
              <g transform="translate(30 -42)"><ElBall el="Hỏa" r={40} /></g>
            </g>
            <g transform={`translate(270 0) rotate(${-tip})`}>
              <path d="M-80 0 Q0 60 80 0Z" fill="#fff" {...L} strokeWidth={5} />
              <g opacity={add} transform={`translate(0 ${-42 - 160 * (1 - add)})`}><ElBall el="Thủy" r={40} /></g>
            </g>
          </g>
          <circle r={18} fill={P.red} {...L} strokeWidth={4} />
        </g>
        <Lbl at={10.9} t={t} x={770} y={620} w={300} fill={P.blue} r={3} size={34}>hành giúp cân</Lbl>
        <Pop t={t} at={11.9} x={830} y={980}><Tick /></Pop>
        <g opacity={gearO}>
          <Pop t={t} at={12.6} x={330} y={1200}><Gear r={95} c={P.mint} rot={(t - 12.6) * 40} /></Pop>
          <Pop t={t} at={12.9} x={520} y={1310}><Gear r={65} c={P.yellow} rot={-(t - 12.6) * 60 + 20} /></Pop>
        </g>
        <Lbl at={13.3} t={t} x={720} y={1190} w={300} fill="#fff" r={-2} size={40}>bổ trợ</Lbl>
        <Lbl at={14.5} t={t} x={500} y={1460} w={560} fill={P.yellow} r={1} size={36}>cho cách bạn vận hành</Lbl>
        <Note t={t} at={9.0} x={500} y={1050}>ví dụ minh hoạ, không phải lá số thật</Note>
      </g>
    </g>
  );
};

// 3. NGƯỜI THIẾU NGỦ 15.46–22.29: cần nghỉ ngơi, không cần lá bùa
const S3: React.FC<SP> = ({t}) => {
  const z = (k: number) => ((t * 0.8 + k * 0.33) % 1);
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={15.5} note="Hình dung một người" text="Thiếu ngủ" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={16.6} x={330} y={900} s={1.0}><Person c={P.blue} mood={t > 19.7 ? 'smile' : 'sad'} /></Pop>
        <Pop t={t} at={16.4} x={700} y={700}><Moon /></Pop>
        {t > 17.3 && t < 19.8 && [0, 1, 2].map(k => (
          <text key={k} x={470 + z(k) * 90} y={720 - z(k) * 130} fontFamily={H} fontWeight={800} fontSize={44 + k * 8} fill={P.navy} opacity={1 - z(k)}>z</text>
        ))}
        <Pop t={t} at={19.7} x={330} y={1250}><Pillow /></Pop>
        <Lbl at={19.9} t={t} x={330} y={1410} w={380} fill={P.mint} r={-2} size={36}>nghỉ ngơi đúng cách</Lbl>
        <Pop t={t} at={20.2} x={530} y={1240}><Tick /></Pop>
        <Pop t={t} at={20.9} x={740} y={1150} r={6}><Talisman /></Pop>
        <Pop t={t} at={21.6} x={810} y={1010}><Cross /></Pop>
        <Lbl at={21.8} t={t} x={720} y={1360} w={220} fill="#fff" r={3} size={36}>lá bùa</Lbl>
      </g>
    </g>
  );
};

// 4. KHÔNG PHẢI BÙA MAY MẮN 22.29–26.32
const Clover: React.FC = () => (
  <g>
    {[0, 90, 180, 270].map(a => <circle key={a} transform={`rotate(${a}) translate(0 -48)`} r={46} fill={P.mint} {...L} strokeWidth={5} />)}
    <circle r={20} fill={P.yellow} {...L} strokeWidth={4} />
    <path d="M10 60 Q30 120 70 150" stroke={P.navy} strokeWidth={8} fill="none" strokeLinecap="round" />
  </g>
);
const S4: React.FC<SP> = ({t}) => {
  const strike = A(t, 25.4, 0.4);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={22.35} note="Hỷ dụng thần cũng vậy" text="Không phải bùa" size={130} />
      <g filter="url(#wob)">
        <Pop t={t} at={22.8} x={300} y={880} r={-6}><Talisman /></Pop>
        <Pop t={t} at={23.2} x={600} y={860} s={1.1}><Clover /></Pop>
        <Pop t={t} at={24.4} x={500} y={1200} r={-1}><Tag w={560} h={110} fill="#fff"><TT size={50} y={18}>bùa may mắn</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M220 1220 L${220 + 560 * strike} 1180`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={25.7} x={820} y={1150}><Cross /></Pop>
      </g>
    </g>
  );
};

// 5. LÁ SỐ LỆCH 1 HƯỚNG → HÀNH NÀY ĐIỀU CHỈNH 26.32–33.27: con thuyền nghiêng, đặt quả cân bên kia
const S5: React.FC<SP> = ({t}) => {
  const fix = A(t, 31.8, 1.0);
  const tilt = -14 * A(t, 28.9, 0.8) * (1 - fix);
  const bob = Math.sin(t * 2.4) * 6;
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={26.4} note="Nguyên nhân thường là" text="Lá số lệch" size={150} />
      <g filter="url(#wob)">
        <g opacity={A(t, 27.0)}>
          {[0, 1, 2].map(k => <path key={k} d={`M${120 + k * 40} ${1180 + k * 50} q50 -24 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0`} stroke={P.blue} strokeWidth={8} fill="none" strokeLinecap="round" opacity={0.8 - k * 0.2} />)}
          <g transform={`translate(500 ${1100 + bob}) rotate(${tilt})`}>
            <path d="M0 -320 V-40" stroke={P.navy} strokeWidth={8} strokeLinecap="round" />
            <path d="M8 -310 L160 -110 H8Z" fill="#fff" {...L} strokeWidth={5} />
            <path d="M-300 -40 H300 L230 70 H-230Z" fill={P.orange} {...L} />
            <g transform="translate(-180 -90)"><ElBall el="Kim" r={44} /></g>
            <g transform="translate(-90 -90)"><ElBall el="Kim" r={44} /></g>
            <g opacity={fix} transform={`translate(190 ${-90 - 200 * (1 - fix)})`}><ElBall el="Mộc" r={44} /></g>
          </g>
        </g>
        <Lbl at={29.0} t={t} x={260} y={700} w={330} fill={P.coral} r={-3} size={36}>lệch một hướng</Lbl>
        <Lbl at={31.8} t={t} x={720} y={700} w={330} fill={P.mint} r={3} size={36}>hành điều chỉnh</Lbl>
        <Pop t={t} at={32.7} x={840} y={860}><Tick /></Pop>
        <Note t={t} at={28.0} x={500} y={1420}>ví dụ minh hoạ, mỗi lá số lệch khác nhau</Note>
      </g>
    </g>
  );
};

// 6. ẢNH HƯỞNG ĐẾN ĐÂU 33.27–39.58
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={33.35} note="Điều này chạm vào" text="Đời sống" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={34.9} x={260} y={760}><Coin r={80} /></Pop>
      <Lbl at={35.0} t={t} x={260} y={910} w={250} fill={P.yellow} r={-2} size={36}>tiền bạc</Lbl>
      <Pop t={t} at={35.6} x={720} y={770} s={0.75}><Briefcase /></Pop>
      <Lbl at={35.7} t={t} x={720} y={910} w={270} fill="#fff" r={2} size={36}>công việc</Lbl>
      <Pop t={t} at={36.4} x={260} y={1150} s={0.6} r={-3}><Block txt="áp lực" w={420} /></Pop>
      <Pop t={t} at={38.3} x={650} y={1170} s={0.7}><Person c={P.blue} /></Pop>
      <Pop t={t} at={38.5} x={800} y={1170} s={0.7}><Person c={P.coral} /></Pop>
      <Pop t={t} at={38.8} x={725} y={1020} s={1.3}><path d="M0 30 C-60 -10 -40 -60 0 -30 C40 -60 60 -10 0 30Z" fill={P.red} {...L} strokeWidth={4} /></Pop>
      <Lbl at={39.0} t={t} x={680} y={1350} w={300} fill={P.peach} r={1} size={36}>mối quan hệ</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 39.58–44.20
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={39.58} strikeAt={40.9} gearAt={42.3} okAt={43.0} tint={P.sky} />;

// 8. CTA 44.20–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={44.25} note="Bạn đoán mình thiếu hành nào?" text="Kể mình nghe" size={130} />
    <g filter="url(#wob)">
      {(['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'] as El[]).map((el, i) => <Pop key={el} t={t} at={44.6 + i * 0.15} x={150 + i * 180} y={760 + (i % 2 ? 50 : 0)}><ElBall el={el} r={74} /></Pop>)}
      <CommentBar t={t} at={45.9} text="Mình sinh năm… / nhật chủ…" y={1060} dur={1.8} />
      <Lbl at={46.0} t={t} x={500} y={1210} w={560} fill={P.yellow} r={-1} size={38}>năm sinh hoặc nhật chủ</Lbl>
      <text x={500} y={1310} textAnchor="middle" fontFamily={HAND} fontSize={32} fill={P.navy} opacity={A(t, 46.6)}>năm bát tự đổi ở Lập xuân (đầu tháng 2)</text>
      <ArrowDown t={t} at={48.2} x={500} y={1340} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 7.49, C: S1}, {s: 7.49, e: 15.46, C: S2}, {s: 15.46, e: 22.29, C: S3}, {s: 22.29, e: 26.32, C: S4},
  {s: 26.32, e: 33.27, C: S5}, {s: 33.27, e: 39.58, C: S6}, {s: 39.58, e: 44.2, C: S7}, {s: 44.2, e: 50.6, C: S8},
];

export const BaziR13: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r13.mp3" phrases={cap.phrases} scenes={SCENES} />;
