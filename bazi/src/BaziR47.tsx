import React from 'react';
import {P, L, Page, A, Pop, TT, Lbl, Head, Person, Calendar, Clock, Tag, CommentBar, ArrowDown, NotDestiny, Shell, SP, Sc, totalFrames} from './BaziKit';
import {Note} from './BaziR14';
import {LaSo} from './BaziR49';
import cap from './capR47.json';

// ====== Dòng 47 · Nhìn lại thấy mình đã đổi nhiều · đại vận chu kỳ 10 năm · 8 cảnh ======
// Không có lá số thật: dải đại vận chỉ là minh hoạ màu Ngũ hành. Mốc: src/capR47.json (align_dp)
export const R47_TOTAL = totalFrames(47.184);

const SEGC = [P.mint, P.coral, P.yellow, P.silver, P.blue];

// mũi tên ngang
const Arrow: React.FC<{t: number; at: number; x1: number; x2: number; y: number}> = ({t, at, x1, x2, y}) => {
  const k = A(t, at, 0.5);
  if (k < 0.01) return null;
  const x = x1 + (x2 - x1) * k;
  return (
    <g>
      <path d={`M${x1} ${y} H${x}`} stroke={P.navy} strokeWidth={10} strokeLinecap="round" />
      {k > 0.98 && <path d={`M${x2 - 30} ${y - 26} L${x2} ${y} L${x2 - 30} ${y + 26}`} fill="none" stroke={P.navy} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />}
    </g>
  );
};

// 1. HOOK 0–5.87
const S1: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={0.05} note="Cuối một giai đoạn" text="Đổi nhiều lắm" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={1.2} x={250} y={1150} s={1.5}><Person c={P.silver} mood="flat" /></Pop>
      <Lbl at={3.1} t={t} x={250} y={1260} w={300} fill="#fff" r={-2} size={34}>chẳng đổi gì?</Lbl>
      <Arrow t={t} at={3.9} x1={400} x2={560} y={980} />
      <Pop t={t} at={4.6} x={700} y={1150} s={1.5}><Person c={P.mint} mood="smile" /></Pop>
      <Lbl at={5.2} t={t} x={700} y={1260} w={300} fill={P.yellow} r={2} size={34}>đổi rất nhiều</Lbl>
    </g>
  </g>
);

// 2. ĐẠI VẬN · ÍT NGƯỜI ĐỂ Ý 5.87–10.33
const S2: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.sky} />
    <Head t={t} at={5.92} note="Nguyên nhân nằm ở" text="Đại vận" size={150} />
    <g filter="url(#wob)">
      <Pop t={t} at={6.6} x={380} y={950} r={-3}><LaSo /></Pop>
      <Pop t={t} at={7.3} x={680} y={820} r={4}><Tag w={260} h={100} fill={P.yellow}><TT size={44} y={16}>đại vận</TT></Tag></Pop>
      <Lbl at={8.9} t={t} x={480} y={1250} w={420} fill="#fff" r={-1} size={36}>ít người để ý</Lbl>
      <Note t={t} at={9.7} x={480} y={1360} size={30}>trong lá số</Note>
    </g>
  </g>
);

// 3. CHU KỲ 10 NĂM · NĂNG LƯỢNG RIÊNG 10.33–14.67
const S3: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.mint} />
    <Head t={t} at={10.38} note="Đại vận là" text="Chu kỳ 10 năm" size={125} />
    <g filter="url(#wob)">
      {SEGC.map((c, i) => (
        <Pop key={i} t={t} at={11.0 + i * 0.25} x={170 + i * 155} y={900}>
          <g><rect x={-72} y={-80} width={144} height={160} rx={16} fill={c} {...L} /><TT size={32} y={12}>10 năm</TT></g>
        </Pop>
      ))}
      <Lbl at={12.2} t={t} x={480} y={1090} w={360} fill="#fff" r={-1} size={36}>mỗi chu kỳ</Lbl>
      <Lbl at={13.9} t={t} x={480} y={1220} w={440} fill={P.yellow} r={1} size={36}>một năng lượng riêng</Lbl>
      <Note t={t} at={12.5} x={480} y={1340} size={28}>màu chỉ minh hoạ · không phải lá số thật</Note>
    </g>
  </g>
);

// 4. TÁC ĐỘNG LÊN NHẬT CHỦ 14.67–17.84
const S4: React.FC<SP> = ({t}) => {
  const pulse = 1 + 0.06 * Math.sin(Math.max(0, t - 15.8) * 6);
  return (
    <g>
      <Page tint={P.yellow} />
      <Head t={t} at={14.72} note="Tác động lên" text="Nhật chủ" size={145} />
      <g filter="url(#wob)">
        <Pop t={t} at={14.9} x={250} y={900} s={0.8}><g><rect x={-72} y={-80} width={144} height={160} rx={16} fill={P.coral} {...L} /><TT size={32} y={12}>10 năm</TT></g></Pop>
        <Arrow t={t} at={15.3} x1={340} x2={500} y={900} />
        <Pop t={t} at={15.8} x={660} y={900}><g transform={`scale(${pulse})`}><circle r={120} fill="#fff" {...L} /><TT size={40} y={14}>nhật chủ</TT></g></Pop>
        <Lbl at={16.4} t={t} x={480} y={1180} w={500} fill={P.blue} r={-1} size={36}>thiên can của trụ ngày</Lbl>
      </g>
    </g>
  );
};

// 5. DỊCH CHUYỂN DẦN · CHẬM KHÔNG NHẬN RA 17.84–27.11
const ITEMS: [string, string, number][] = [['công việc', P.mint, 20.2], ['tiền bạc', P.yellow, 20.8], ['áp lực', P.coral, 21.4], ['tình cảm', P.peach, 22.3]];
const S5: React.FC<SP> = ({t}) => {
  const drift = A(t, 22.9, 3.5);
  return (
    <g>
      <Page tint={P.sky} />
      <Head t={t} at={17.89} note="Cách bạn nghĩ" text="Dịch chuyển dần" size={115} />
      <g filter="url(#wob)">
        {ITEMS.map(([s, c, at], i) => (
          <Pop key={s} t={t} at={at} x={270 + (i % 2) * 380 + drift * (i % 2 ? -40 : 50)} y={760 + Math.floor(i / 2) * 180 + drift * 30} r={(i % 2 ? 4 : -4) * (1 - drift) + (i % 2 ? -3 : 3) * drift}>
            <Tag w={300} h={100} fill={c}><TT size={40} y={14}>{s}</TT></Tag>
          </Pop>
        ))}
        <Pop t={t} at={25.0} x={300} y={1240} s={0.75}><Clock t={t} /></Pop>
        <Lbl at={25.2} t={t} x={600} y={1200} w={240} fill="#fff" r={2} size={36}>chậm lắm</Lbl>
        <Lbl at={26.4} t={t} x={600} y={1320} w={330} fill={P.yellow} r={-2} size={36}>không nhận ra</Lbl>
      </g>
    </g>
  );
};

// 6. HỒI MỚI BẮT ĐẦU vs 2027 27.11–35.71
const S6: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.peach} />
    <Head t={t} at={27.16} note="Nói đơn giản hơn" text="Hồi đó và nay" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={29.0} x={250} y={700} s={0.7}><Calendar label="hồi đầu" /></Pop>
      <Pop t={t} at={29.6} x={250} y={1160} s={1.2}><Person c={P.silver} mood="sad" /></Pop>
      <Lbl at={30.5} t={t} x={250} y={1250} w={220} fill="#fff" r={-3} size={34}>lạ lẫm</Lbl>
      <Lbl at={31.5} t={t} x={250} y={1350} w={220} fill={P.sky} r={2} size={34}>vụng về</Lbl>
      <Arrow t={t} at={32.1} x1={400} x2={540} y={1020} />
      <Pop t={t} at={33.6} x={690} y={700} s={0.7}><Calendar label="2027" /></Pop>
      <Pop t={t} at={34.4} x={690} y={1160} s={1.2}><Person c={P.mint} mood="smile" /></Pop>
      <Lbl at={35.0} t={t} x={690} y={1250} w={240} fill={P.yellow} r={2} size={34}>hôm nay</Lbl>
    </g>
  </g>
);

// 7. KHÔNG PHẢI SỐ PHẬN 35.71–40.06
const S7: React.FC<SP> = ({t}) => <NotDestiny t={t} s={35.71} strikeAt={36.9} gearAt={38.2} okAt={39.0} tint={P.mint} />;

// 8. CTA 40.06–hết
const S8: React.FC<SP> = ({t}) => (
  <g>
    <Page tint={P.yellow} />
    <Head t={t} at={40.11} note="Hồi mới bắt đầu" text="Khác chỗ nào?" size={125} />
    <g filter="url(#wob)">
      <Pop t={t} at={40.6} x={300} y={960} s={1.3}><Person c={P.silver} mood="flat" /></Pop>
      <Pop t={t} at={41.6} x={640} y={960} s={1.3}><Person c={P.mint} mood="talk" /></Pop>
      <CommentBar t={t} at={43.3} text="năm sinh … · nhật chủ …" y={1110} dur={1.4} />
      <Lbl at={45.7} t={t} x={480} y={1270} w={400} fill={P.mint} r={-1} size={38}>ở phần bình luận</Lbl>
      <ArrowDown t={t} at={46.0} x={480} y={1330} />
    </g>
  </g>
);

const SCENES: Sc[] = [
  {s: 0, e: 5.87, C: S1}, {s: 5.87, e: 10.33, C: S2}, {s: 10.33, e: 14.67, C: S3}, {s: 14.67, e: 17.84, C: S4},
  {s: 17.84, e: 27.11, C: S5}, {s: 27.11, e: 35.71, C: S6}, {s: 35.71, e: 40.06, C: S7}, {s: 40.06, e: 47.584, C: S8},
];

export const BaziR47: React.FC<{guide?: boolean}> = ({guide = false}) => <Shell guide={guide} voice="r47.mp3" phrases={cap.phrases} scenes={SCENES} />;
