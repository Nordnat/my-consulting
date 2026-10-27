"use client";

import {
  type Competency,
  type CompetencyId,
  type Rating,
} from "@/lib/growth-wheel-data";

type AuditWheelThumbnailProps = {
  ratings: Record<CompetencyId, Rating>;
  competencies: Competency[];
  size?: number;
  className?: string;
  showLabels?: boolean;
};

export function AuditWheelThumbnail({
  ratings,
  competencies,
  size = 480,
  className = "",
  showLabels = true,
}: AuditWheelThumbnailProps) {
  const isLarge = size >= 360;
  const center = size / 2;
  // Margines na etykiety zależny od wielkości
  const padding = showLabels ? (isLarge ? 72 : 46) : 12;
  const maxRadius = center - padding;
  const coreRadius = isLarge ? 38 : maxRadius * 0.22;
  const count = competencies.length;
  const angleStep = (Math.PI * 2) / count;

  const getPoint = (angle: number, radius: number) => ({
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  });

  const getAxisAngle = (index: number) => -Math.PI / 2 + index * angleStep;

  const getScoreRadius = (score: number) =>
    coreRadius + (score / 5) * (maxRadius - coreRadius);

  // Punkty wielokąta ocen
  const polygonPoints = competencies
    .map((comp, i) => {
      const score = ratings[comp.id] || 1;
      const angle = getAxisAngle(i);
      const pt = getPoint(angle, getScoreRadius(score));
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-label="Wykres kołowy audytu kompetencji Agile Coaching Growth Wheel"
    >
      {/* Tło koła */}
      <circle
        cx={center}
        cy={center}
        r={maxRadius}
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />

      {/* Koncentryczne okręgi poziomów 1-5 */}
      {[1, 2, 3, 4, 5].map((level) => {
        const r = getScoreRadius(level);
        return (
          <g key={level}>
            <circle
              cx={center}
              cy={center}
              r={r}
              fill="none"
              stroke="#94a3b8"
              strokeWidth={level === 5 ? "1.5" : "0.75"}
              strokeDasharray={level < 5 ? "3,3" : undefined}
            />
            {/* Oznaczenie poziomu na osi pionowej dla dużego wykresu */}
            {isLarge && showLabels && level < 5 && (
              <text
                x={center + 4}
                y={center - r + 3}
                fontSize="9"
                fontWeight="600"
                fill="#94a3b8"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {level}
              </text>
            )}
          </g>
        );
      })}

      {/* Osie 9 kompetencji */}
      {competencies.map((comp, i) => {
        const angle = getAxisAngle(i);
        const pOuter = getPoint(angle, maxRadius);
        return (
          <line
            key={comp.id}
            x1={center}
            y1={center}
            x2={pOuter.x}
            y2={pOuter.y}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
        );
      })}

      {/* Wielokąt ocen użytkownika (polygon) */}
      <polygon
        points={polygonPoints}
        fill="#4f46e5"
        fillOpacity="0.25"
        stroke="#4f46e5"
        strokeWidth={isLarge ? "3.5" : "2.5"}
        strokeLinejoin="round"
      />

      {/* Punkty węzłowe na osiach */}
      {competencies.map((comp, i) => {
        const score = ratings[comp.id] || 1;
        const angle = getAxisAngle(i);
        const pt = getPoint(angle, getScoreRadius(score));
        return (
          <g key={`pt-${comp.id}`}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r={isLarge ? 5.5 : 3.5}
              fill="#4f46e5"
              stroke="#ffffff"
              strokeWidth={isLarge ? "2" : "1.5"}
            />
          </g>
        );
      })}

      {/* Centralne koło Self-Mastery */}
      <circle
        cx={center}
        cy={center}
        r={coreRadius}
        fill="#ffffff"
        stroke="#4f46e5"
        strokeWidth={isLarge ? "2" : "1.5"}
      />
      <text
        x={center}
        y={isLarge ? center - 3 : center + 3}
        textAnchor="middle"
        fontSize={isLarge ? "10" : "8"}
        fontWeight="700"
        fill="#1e1b4b"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        Self-Mastery
      </text>
      {isLarge && (
        <text
          x={center}
          y={center + 10}
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fill="#4f46e5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {ratings["self-mastery"] || 1}/5
        </text>
      )}

      {/* Etykiety kompetencji wokół koła */}
      {showLabels &&
        competencies.map((comp, i) => {
          const angle = getAxisAngle(i);
          const labelDist = maxRadius + (isLarge ? 18 : 12);
          const pos = getPoint(angle, labelDist);
          const score = ratings[comp.id] || 1;

          let textAnchor: "middle" | "start" | "end" = "middle";
          const cos = Math.cos(angle);
          if (cos > 0.25) textAnchor = "start";
          else if (cos < -0.25) textAnchor = "end";

          // W wersji dużej używamy pełnej nazwy i wyraźniejszej typografii
          const fontSize = isLarge ? 10.5 : 7.5;

          return (
            <g key={`lbl-${comp.id}`}>
              <text
                x={pos.x}
                y={pos.y}
                textAnchor={textAnchor}
                fontSize={fontSize}
                fontWeight="600"
                fill="#0f172a"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {comp.name}
              </text>
              {isLarge && (
                <text
                  x={pos.x}
                  y={pos.y + 12}
                  textAnchor={textAnchor}
                  fontSize={9.5}
                  fontWeight="700"
                  fill="#4f46e5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  {score} / 5
                </text>
              )}
            </g>
          );
        })}
    </svg>
  );
}
