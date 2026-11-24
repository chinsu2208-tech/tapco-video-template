import React from 'react';
import {P, H, L, Page, A, Pop, TT, Lbl, Head, Person, Phone, Calendar, Clock, Tag, Tick, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {Drop} from './BaziR17';
import cap from './capR46.json';

// ====== Dòng 46 · Sinh năm 1992 hứa nghỉ cuối năm mà vẫn trả lời tin nhắn · 9 cảnh ======
// Can chi 1992 Nhâm Thân lấy từ bảng STEM/BR (can Nhâm · Thủy). Không có lá số thật. Mốc: src/capR46.json (align_dp)
export const R46_TOTAL = totalFrames(47.112);

// dòng nước chảy (sóng trôi theo t)
const River: React.FC<{t: number; k: number; w?: number; y?: number}> = ({t, k, w = 820, y = 0}) => {
  const ph = (t * 80) % 120;
  const d = (dy: number) => {
    let s = `M${-w / 2 - 120 + ph} ${y + dy}`;
    for (let x = -w / 2 - 120 + ph; x < w / 2; x += 120) s += ` q30 -26 60 0 t60 0`;
    return s;
  };
  return (
    <g opacity={k}>
      <defs><clipPath id="rv46"><rect x={-w / 2} y={y - 90} width={w * k} height={180} rx={40} /></clipPath></defs>
      <rect x={-w / 2} y={y - 80} width={w * k} height={160} rx={40} fill={P.blue} {...L} />
      <g clipPath="url(#rv46)">
        <path d={d(-30)} fill="none" stroke="#fff" strokeWidth={7} strokeLinecap="round" />
        <path d={d(30)} fill="none" stroke="#fff" strokeWidth={7} strokeLinecap="round" opacity={0.7} />
      </g>
    </g>
  );
};
// công tắc
const Switch: React.FC<{on: boolean}> = ({on}) => (
  <g>
    <rect x={-70} y={-36} width={140} height={72} rx={36} fill={on ? P.mint : P.silver} {...L} strokeWidth={5} />
    <circle cx={on ? 34 : -34} r={26} fill="#fff" {...L} strokeWidth={4} />
  </g>
);

// 1. HOOK 0–5.5
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Sinh năm 92" text="Hứa nghỉ ngơi" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={1.4} x={260} y={780} r={-3} s={0.9}><Calendar label="cuối năm" /></Pop>
      <Lbl at={2.0} t={t} x={260} y={980} w={240} fill={P.mint} r={-2} size={34}>nghỉ ngơi</Lbl>
      <Pop t={t} at={3.4} x={640} y={1010} s={0.85}><Phone><g><rect x={-84} y={-90} width={168} height={66} rx={16} fill="#fff" /><TT size={26} y={-48}>tin công việc</TT><circle cx={74} cy={-150} r={22} fill={P.red} /></g></Phone></Pop>
      <Pop t={t} at={4.3} x={300} y={1220} s={0.8}><Clock t={t} ring /></Pop>
      <Lbl at={4.6} t={t} x={300} y={1370} w={220} fill={P.blue} r={2} size={34}>nửa đêm</Lbl>
    </g>
  </g>
);

// 2. HÀNH CỦA NĂM SINH 5.5–10.51
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={5.55} note="Ít người để ý" text="Hành năm sinh" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={8.6} x={290} y={860}><g><circle r={100} fill="#fff" {...L} /><TT size={36} y={12}>nhật chủ</TT></g></Pop>
      <Pop t={t} at={9.5} x={670} y={860}><g><circle r={100} fill={P.yellow} {...L} /><TT size={34} y={-4}>hành</TT><TT size={34} y={36}>năm sinh</TT></g></Pop>
      {A(t, 9.9, 0.4) > 0.01 && <path d={`M400 860 H${400 + 160 * A(t, 9.9, 0.4)}`} stroke={P.navy} strokeWidth={8} strokeDasharray="16 12" strokeLinecap="round" />}
      <Note t={t} at={9.5} x={480} y={1120} size={28}>năm sinh bát tự tính từ Lập xuân (~4/2)</Note>
    </g>
  </g>
);

// 3. 1992 NHÂM THÂN · THỦY · DÒNG NƯỚC 10.51–14.63
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.56} note="Năm 1992 là" text="Nhâm Thân" size={140} />
    <g filter="url(#wob)">
      <Pop t={t} at={10.9} x={290} y={960} s={0.85} r={-2}><GZ can="Nhâm" chi="Thân" year="1992" /></Pop>
      <Lbl at={12.6} t={t} x={680} y={760} w={320} fill={P.blue} r={2} size={36}>can Nhâm · Thủy</Lbl>
      <Pop t={t} at={13.5} x={680} y={1020} s={1.2}><Drop /></Pop>
      <Lbl at={13.9} t={t} x={680} y={1240} w={260} fill="#fff" r={-2} size={36}>dòng nước</Lbl>
    </g>
  </g>
);

// 4. NƯỚC KHÔNG ĐỨNG YÊN · CHẢY · LEN VÀO 14.63–19.58
const S4: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={14.68} note="Nước thì" text="Không đứng yên" size={120} />
    <g filter="url(#wob)">
      <g transform="translate(480 930)"><River t={t} k={A(t, 15.2, 1.0)} /></g>
      {[[260, 0], [560, 1]].map(([x, i]) => (
        <Pop key={x} t={t} at={15.6 + i * 0.3} x={x} y={930}><ellipse rx={60} ry={40} fill={P.silver} {...L} strokeWidth={5} /></Pop>
      ))}
      <Lbl at={16.3} t={t} x={230} y={1150} w={180} fill={P.mint} r={-2} size={36}>chảy</Lbl>
      <Lbl at={17.1} t={t} x={480} y={1150} w={260} fill={P.yellow} r={2} size={36}>tìm đường</Lbl>
      <Lbl at={18.2} t={t} x={480} y={1290} w={420} fill="#fff" r={-1} size={36}>thấy chỗ trống là len vào</Lbl>
    </g>
  </g>
);

// 5. KHÓ TẮT CHẾ ĐỘ LÀM VIỆC 19.58–26.24
const S5: React.FC<SP> = ({t}) => {
  const tries = Math.floor((t - 22.4) * 1.6);
  const on = t < 22.4 || tries % 2 === 1 || t > 23.8;
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={19.63} note="Năng lượng Thủy" text="Khó tắt máy" size={135} />
      <g filter="url(#wob)">
        <Pop t={t} at={20.4} x={300} y={1220} s={0.95}><Person c={P.blue} mood="flat" /></Pop>
        <Pop t={t} at={21.2} x={480} y={700}><Tag w={560} h={130} fill="#fff"><TT size={38} y={-4} x={-60}>chế độ làm việc</TT><g transform="translate(190 0)"><Switch on={on} /></g></Tag></Pop>
        {['báo cáo', 'tin nhắn', 'việc chờ'].map((s, i) => (
          <Pop key={s} t={t} at={24.3 + i * 0.4} x={640} y={940 + i * 120} r={i % 2 ? 3 : -3}><Tag w={250} h={84} fill={[P.coral, P.sky, P.mint][i]}><TT size={34} y={12}>{s}</TT></Tag></Pop>
        ))}
      </g>
    </g>
  );
};

// 6. KHÔNG LƯỜI NGHỈ · NƯỚC CHƯA TÌM ĐƯỢC BỜ 26.24–30.98
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={26.29} note="Nói đơn giản hơn" text="Chưa tìm bờ" size={140} />
    <g filter="url(#wob)">
      <Lbl at={27.7} t={t} x={430} y={680} w={420} fill="#fff" r={-2} size={38}>không lười nghỉ</Lbl>
      <Pop t={t} at={28.4} x={720} y={670}><Tick /></Pop>
      <g transform="translate(430 980)"><River t={t} k={A(t, 29.0, 0.8)} w={660} /></g>
      <Pop t={t} at={30.0} x={830} y={980}><g><path d="M-60 -110 Q40 -120 70 -40 L70 110 Q-20 120 -60 90 Q-10 0 -60 -110Z" fill={P.yellow} {...L} /><TT size={30} y={10}>bờ?</TT></g></Pop>
    </g>
  </g>
);

// 7. LỜI HỨA TAN NHƯ BỌT 30.98–34.46
const S7: React.FC<SP> = ({t}) => {
  const fade = A(t, 32.8, 1.2);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={31.03} note="Lời hứa cuối năm" text="Tan như bọt" size={135} />
      <g filter="url(#wob)">
        <Pop t={t} at={31.3} x={480} y={960}><g opacity={1 - 0.75 * fade}><Tag w={520} h={130} fill={P.yellow}><TT size={44} y={16}>cuối năm sẽ nghỉ</TT></Tag></g></Pop>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const k = A(t, 32.6 + i * 0.18, 1.4);
          return k > 0.01 ? <circle key={i} cx={260 + i * 90} cy={960 - 320 * k - (i % 2) * 40} r={18 + (i % 3) * 10} fill="#fff" stroke={P.navy} strokeWidth={4} opacity={1 - 0.6 * k} /> : null;
        })}
      </g>
    </g>
  );
};

// 8. KHÔNG PHẢI SỐ PHẬN · CHỈNH ĐƯỢC 34.46–40.45
const S8: React.FC<SP> = ({t}) => (
  <NotDestiny t={t} s={34.46} strikeAt={35.4} gearAt={36.8} okAt={37.6} tint={P.peach}
    extra={<Lbl at={39.4} t={t} x={720} y={820} w={260} fill={P.mint} r={3} size={36}>chỉnh được</Lbl>} />
);

// 9. CTA 40.45–hết
const S9: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={40.5} note="Sinh năm 92 nào" text="Hứa rồi quên?" size={130} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.9} x={260} y={860} s={0.65} r={-3}><GZ can="Nhâm" chi="Thân" year="1992" /></Pop>
      <Pop t={t} at={42.0} x={620} y={820} s={0.75}><Person c={P.blue} mood="talk" /></Pop>
      <CommentBar t={t} at={43.5} text="năm sinh … · nhật chủ …" y={1110} dur={1.3} />
      <Lbl at={45.6} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={45.9} x={480} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.5, C: S1}, {s: 5.5, e: 10.51, C: S2}, {s: 10.51, e: 14.63, C: S3}, {s: 14.63, e: 19.58, C: S4},
  {s: 19.58, e: 26.24, C: S5}, {s: 26.24, e: 30.98, C: S6}, {s: 30.98, e: 34.46, C: S7}, {s: 34.46, e: 40.45, C: S8},
  {s: 40.45, e: 47.512, C: S9},
];

export const BaziR46: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r46.mp3" phrases={cap.phrases} scenes={SCENES} />;
