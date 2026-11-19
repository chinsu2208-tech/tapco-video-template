import React from 'react';
import {P, H, CJK, L, Page, A, Pop, TT, Lbl, Head, Person, Coin, Wallet, Jar, Tick, Cross, Tag, Gear, CommentBar, ArrowDown, Shell, SP, Sc, totalFrames} from './BaziKit';
import {GZ, Note} from './BaziR14';
import {Pillar, PIL, PF, Battery} from './BaziR17';
import cap from './capR32.json';

// ====== Dòng 32 · Sinh năm 1994, tiền vào đều mà không giữ được · Tài – nhật chủ – Tỉ Kiếp · 8 cảnh ======
// 1994 = Giáp Tuất (lấy từ STEM/BR qua GZ). Cột thập thần, độ nặng Tỉ Kiếp chỉ là minh hoạ khái niệm, không phải lá số thật.
// Mốc: src/capR32.json (align_dp)
export const R32_TOTAL = totalFrames(44.016);

const GROUPS: [string, string, number][] = [['Tỉ Kiếp', P.mint, 0.9], ['Thực Thương', P.coral, 0.45], ['Tài', P.yellow, 0.6], ['Quan Sát', P.silver, 0.35], ['Ấn', P.blue, 0.5]];
// đồng xu bay từ (x0,y0) tới (x1,y1) theo tiến độ k
const FlyCoin: React.FC<{k: number; x0: number; y0: number; x1: number; y1: number; r?: number}> = ({k, x0, y0, x1, y1, r = 30}) =>
  k <= 0.001 || k >= 0.999 ? null : (
    <g transform={`translate(${x0 + (x1 - x0) * k} ${y0 + (y1 - y0) * k - 120 * Math.sin(Math.PI * k)})`}><Coin r={r} /></g>
  );
// ống dẫn dòng tiền
const Pipe: React.FC<{t: number; o: number}> = ({t, o}) => (
  <g opacity={o}>
    <path d="M150 0 H700 Q790 0 790 90 V200" fill="none" stroke={P.navy} strokeWidth={70} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M150 0 H700 Q790 0 790 90 V200" fill="none" stroke={P.sky} strokeWidth={54} strokeLinecap="round" strokeLinejoin="round" />
    {[0, 1, 2, 3].map((i) => {
      const u = ((t * 0.35 + i / 4) % 1);
      const x = u < 0.75 ? 150 + (u / 0.75) * 600 : 790;
      const y = u < 0.75 ? 0 : ((u - 0.75) / 0.25) * 200;
      return <g key={i} transform={`translate(${x} ${y})`}><Coin r={20} /></g>;
    })}
  </g>
);

// 1. HOOK 0–4.49
const S1: React.FC<SP> = ({t}) => {
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={0.05} note="Sinh năm 1994" text="Giữ tiền?" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={0.7} x={250} y={880} s={0.72} r={-3}><GZ can="Giáp" chi="Tuất" year="1994" /></Pop>
        <Pop t={t} at={2.1} x={680} y={960}><Wallet open /></Pop>
        {[0, 1, 2].map((i) => <FlyCoin key={i} k={A(t, 2.2 + i * 0.25, 0.6)} x0={520 + i * 60} y0={560} x1={680} y1={880} />)}
        {[0, 1, 2].map((i) => <FlyCoin key={i} k={A(t, 3.8 + i * 0.2, 0.7)} x0={680} y0={1050} x1={560 + i * 110} y1={1300} />)}
        <Lbl at={2.4} t={t} x={680} y={720} w={240} fill={P.mint} r={3} size={36}>vào đều</Lbl>
        <Lbl at={4.0} t={t} x={430} y={1420} w={360} fill={P.coral} r={-2} size={36}>không giữ được</Lbl>
        <Note t={t} at={1.2} x={250} y={1180} size={26}>năm tính từ Lập xuân</Note>
      </g>
    </g>
  );
};

// 2. THẬP THẦN PHÂN BỔ 4.49–8.30
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={4.55} note="Điều ít người để ý" text="Thập thần" size={140} />
    <g filter="url(#wob)">
      {GROUPS.map(([n, c, h], i) => {
        const k = A(t, 5.2 + i * 0.3, 0.6) * (0.6 + 0.4 * A(t, 8.0, 0.5));
        const x = 170 + i * 165;
        return (
          <g key={n}>
            <rect x={x - 55} y={1250 - 520 * h * k} width={110} height={Math.max(1, 520 * h * k)} rx={14} fill={c} {...L} opacity={k > 0.01 ? 1 : 0} />
            <text x={x} y={1310} textAnchor="middle" fontFamily={H} fontWeight={800} fontSize={n.length > 6 ? 26 : 32} fill={P.navy} opacity={A(t, 5.2 + i * 0.3)}>{n}</text>
          </g>
        );
      })}
      <path d="M90 1255 H900" stroke={P.navy} strokeWidth={6} strokeLinecap="round" opacity={A(t, 5.0)} />
      <Lbl at={7.9} t={t} x={500} y={620} w={300} fill={P.yellow} r={-2} size={40}>phân bổ</Lbl>
      <Note t={t} at={6.0} x={500} y={1390} size={28}>cột cao thấp chỉ là minh hoạ</Note>
    </g>
  </g>
);

// 3. BỐN TRỤ · NHẬT CHỦ 8.30–16.72
const PAT = [9.9, 10.2, 12.25, 13.25];
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={8.35} note="Bát tự gồm" text="Bốn trụ" size={150} />
    <g filter="url(#wob)">
      {PIL.map((n, i) => (
        <Pop key={n} t={t} at={PAT[i]} x={170 + i * 220} y={930} s={0.85}><Pillar name={n} fill={PF[i]} hi={i === 2 ? A(t, 15.4, 0.4) : 0} top={i === 2 && t > 14.6 ? 'bạn' : '?'} /></Pop>
      ))}
      <ArrowDown t={t} at={15.4} x={610} y={1130} />
      <Lbl at={16.2} t={t} x={610} y={1290} w={360} fill={P.coral} r={-2} size={40}>nhật chủ = bạn</Lbl>
      <Note t={t} at={14.6} x={500} y={1420} size={28}>thiên can của trụ ngày</Note>
    </g>
  </g>
);

// 4. TÀI CHỈ GIỮ ĐƯỢC KHI NHẬT CHỦ ĐỦ SỨC ĐỠ 16.72–22.40
const S4: React.FC<SP> = ({t}) => {
  const lift = A(t, 20.9, 0.8);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={16.78} note="Nói đơn giản hơn" text="Tiền = Tài" size={140} />
      <g filter="url(#wob)">
        <Pop t={t} at={18.0} x={250} y={760}><Coin r={60} /></Pop>
        <Pop t={t} at={18.3} x={360} y={700}><Coin r={44} /></Pop>
        <Pop t={t} at={18.9} x={300} y={900} s={0.8}><Tag w={300} h={110} fill="#fff"><TT size={44} y={-2}>Tài</TT><TT size={34} y={40} font={CJK} w={700}>財</TT></Tag></Pop>
        <Pop t={t} at={20.4} x={640} y={1260} s={1.05}><Person c={P.blue} mood={lift > 0.5 ? 'smile' : 'flat'} /></Pop>
        <g transform={`translate(640 ${1050 - 40 * lift})`} opacity={A(t, 20.6, 0.3)}><g transform="scale(0.6)"><Jar fill={0.75} /></g></g>
        {lift > 0.01 && <path d="M590 1180 L585 1110 M690 1180 L695 1110" stroke={P.peach} strokeWidth={22} strokeLinecap="round" />}
        <Lbl at={21.2} t={t} x={300} y={1300} w={300} fill={P.mint} r={-2} size={34}>nhật chủ đỡ</Lbl>
        <Pop t={t} at={21.8} x={820} y={1000}><Tick /></Pop>
      </g>
    </g>
  );
};

// 5. TỈ KIẾP NẶNG → TIỀN CHẢY ĐI 22.40–29.12
const FR: [number, number][] = [[180, 1180], [500, 1340], [820, 1180]];
const S5: React.FC<SP> = ({t}) => {
  const lvl = 0.85 - 0.6 * A(t, 26.4, 2.0) + 0.0;
  return (
    <g>
      <Page tint={P.peach} />
      <Head t={t} at={22.45} note="Nếu nặng về" text="Tỉ Kiếp" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={22.7} x={500} y={820} s={0.85}><Jar fill={lvl} /></Pop>
        {FR.map(([x, y], i) => <Pop key={i} t={t} at={23.3 + i * 0.3} x={x} y={y} s={0.7}><Person c={P.mint} mood="smile" /></Pop>)}
        {FR.map(([x, y], i) => [0, 1].map((j) => <FlyCoin key={`${i}${j}`} k={A(t, 24.7 + i * 0.35 + j * 1.4, 0.7)} x0={500} y0={700} x1={x} y1={y - 200} r={26} />))}
        <Lbl at={24.8} t={t} x={500} y={1020} w={300} fill={P.mint} r={-2} size={34}>chia · tiêu chung</Lbl>
        <Pop t={t} at={28.4} x={820} y={620}><Coin r={40} /></Pop>
        <Lbl at={28.5} t={t} x={720} y={720} w={280} fill={P.yellow} r={3} size={32}>thu nhập vẫn đều</Lbl>
        <Note t={t} at={23.6} x={500} y={1470} size={28}>Tỉ Kiếp nặng · ví dụ minh hoạ</Note>
      </g>
    </g>
  );
};

// 6. KHÔNG PHẢI LÀM CHƯA ĐỦ — LÀ DÒNG TIỀN 29.12–34.95
const S6: React.FC<SP> = ({t}) => {
  const strike = A(t, 32.0, 0.5);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={29.18} note="Điều này có nghĩa là" text="Dòng tiền" size={150} />
      <g filter="url(#wob)">
        <Pop t={t} at={30.4} x={460} y={650}><Tag w={520} h={110} fill="#fff"><TT size={46} y={16}>làm chưa đủ?</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M210 670 L${210 + 500 * strike} 630`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={32.5} x={800} y={630}><Cross /></Pop>
        <g transform="translate(0 950)"><Pipe t={t} o={A(t, 33.2, 0.5)} /></g>
        <Pop t={t} at={33.7} x={790} y={1260} s={0.6}><Wallet /></Pop>
        <Lbl at={34.1} t={t} x={380} y={1200} w={420} fill={P.yellow} r={-2} size={38}>cách tiền vận hành</Lbl>
      </g>
    </g>
  );
};

// 7. KHÔNG PHẢI SỐ PHẬN — CÁCH DÙNG NĂNG LƯỢNG 34.95–39.79
const S7: React.FC<SP> = ({t}) => {
  const strike = A(t, 35.9, 0.5);
  return (
    <g>
      <Page tint={P.mint} />
      <Head t={t} at={35.0} note="Lá số là" text="Cách dùng sức" size={120} />
      <g filter="url(#wob)">
        <Pop t={t} at={35.2} x={500} y={620} r={-2}><Tag w={640} h={110} fill="#fff"><TT size={50} y={18}>số phận cố định</TT></Tag></Pop>
        {strike > 0.01 && <path d={`M190 640 L${190 + 620 * strike} 600`} stroke={P.red} strokeWidth={12} strokeLinecap="round" />}
        <Pop t={t} at={36.4} x={840} y={600}><Cross /></Pop>
        <Pop t={t} at={37.4} x={330} y={1010}><Gear r={110} c={P.mint} rot={(t - 37.4) * 40} /></Pop>
        <Pop t={t} at={38.9} x={650} y={1000} s={1.2}><Battery k={0.25 + 0.6 * (0.5 + 0.5 * Math.sin((t - 38.9) * 2.5))} /></Pop>
        <Lbl at={39.2} t={t} x={500} y={1330} w={640} fill={P.yellow} r={-1} size={40}>cách mình dùng năng lượng</Lbl>
      </g>
    </g>
  );
};

// 8. CTA 39.79–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={39.85} note="Bạn thì sao?" text="Để lại năm sinh" size={110} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.3} x={300} y={830} s={0.6} r={-3}><GZ can="Giáp" chi="Tuất" year="1994" /></Pop>
      <Pop t={t} at={40.8} x={680} y={800}><Jar fill={0.6} /></Pop>
      <CommentBar t={t} at={41.3} text="1994 · nhật chủ …" y={1130} dur={1.2} />
      <Lbl at={42.6} t={t} x={500} y={1290} w={420} fill={P.mint} r={-1} size={38}>ở phần comment</Lbl>
      <ArrowDown t={t} at={43.0} x={500} y={1350} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 4.49, C: S1}, {s: 4.49, e: 8.3, C: S2}, {s: 8.3, e: 16.72, C: S3}, {s: 16.72, e: 22.4, C: S4},
  {s: 22.4, e: 29.12, C: S5}, {s: 29.12, e: 34.95, C: S6}, {s: 34.95, e: 39.79, C: S7}, {s: 39.79, e: 44.42, C: S8},
];

export const BaziR32: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r32.mp3" phrases={cap.phrases} scenes={SCENES} />;
