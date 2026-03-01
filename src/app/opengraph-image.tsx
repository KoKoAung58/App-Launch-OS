import { ImageResponse } from "next/og";

export const alt = "App Launch OS — Stop shipping to crickets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#08090a",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        {/* Blue radial glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 50,
            width: 750,
            height: 750,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.06) 50%, transparent 70%)",
          }}
        />
        {/* Purple glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── Content ── */}
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* ── LEFT: copy ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              padding: "64px 44px 80px 80px",
            }}
          >
            {/* Badge */}
            <div style={{ display: "flex", marginBottom: "30px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(37,99,235,0.1)",
                  border: "1px solid rgba(59,130,246,0.32)",
                  borderRadius: "100px",
                  padding: "7px 18px",
                }}
              >
                <span style={{ fontSize: "16px" }}>🚀</span>
                <span
                  style={{
                    color: "#60a5fa",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  APP LAUNCH OS
                </span>
              </div>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  fontSize: "78px",
                  fontWeight: 900,
                  color: "#f8fafc",
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                }}
              >
                Stop shipping
              </span>
              <span
                style={{
                  fontSize: "78px",
                  fontWeight: 900,
                  color: "#818cf8",
                  lineHeight: 1.0,
                  letterSpacing: "-0.04em",
                }}
              >
                to crickets.
              </span>
            </div>

            {/* Subtitle */}
            <div
              style={{
                color: "#94a3b8",
                fontSize: "22px",
                lineHeight: 1.45,
                marginBottom: "36px",
                maxWidth: "500px",
              }}
            >
              The all-in-one launch cockpit for indie devs —
              timeline, posts, tracking, and dashboards.
            </div>

            {/* Feature pills */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                "Timeline engine",
                "Post scheduler",
                "Link tracking",
                "Analytics",
              ].map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: product cards ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "12px",
              width: "358px",
              padding: "64px 72px 80px 8px",
            }}
          >
            {/* Card 1 — Launch plan */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(59,130,246,0.07)",
                border: "1px solid rgba(59,130,246,0.22)",
                borderRadius: "14px",
                padding: "18px 22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "12px",
                }}
              >
                <span style={{ color: "#60a5fa", fontSize: "13px" }}>✓</span>
                <span
                  style={{
                    color: "#60a5fa",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  LAUNCH PLAN
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    color: "#f8fafc",
                    fontSize: "26px",
                    fontWeight: 800,
                  }}
                >
                  72%
                </span>
                <span style={{ color: "#475569", fontSize: "13px" }}>
                  8 of 11 tasks done
                </span>
              </div>
              {/* Progress bar */}
              <div
                style={{
                  display: "flex",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "100px",
                  height: "6px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                    width: "72%",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </div>

            {/* Card 2 — Stats */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "14px",
                padding: "18px 22px",
              }}
            >
              <span
                style={{
                  color: "#34d399",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  marginBottom: "12px",
                }}
              >
                ↑ LAUNCH STATS
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "#64748b", fontSize: "14px" }}>
                    Link clicks
                  </span>
                  <span
                    style={{
                      color: "#f8fafc",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    1,247
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "#64748b", fontSize: "14px" }}>
                    Signups
                  </span>
                  <span
                    style={{
                      color: "#34d399",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    +84
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "#64748b", fontSize: "14px" }}>
                    Posts sent
                  </span>
                  <span
                    style={{
                      color: "#f8fafc",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    12
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 — Next action */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "rgba(245,158,11,0.05)",
                border: "1px solid rgba(245,158,11,0.2)",
                borderRadius: "14px",
                padding: "18px 22px",
              }}
            >
              <span
                style={{
                  color: "#fbbf24",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}
              >
                ! DO THIS NEXT
              </span>
              <span
                style={{
                  color: "#f8fafc",
                  fontSize: "15px",
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                Write your launch post for X
              </span>
              <div
                style={{
                  display: "flex",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "100px",
                  height: "4px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    background: "rgba(251,191,36,0.55)",
                    width: "60%",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 80px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            background: "rgba(8,9,10,0.6)",
          }}
        >
          {/* Avatar stack + social proof */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div style={{ display: "flex" }}>
              {["🧑‍💻", "👩‍💻", "🧑‍🚀", "👾", "🦸"].map((emoji, i) => (
                <div
                  key={i}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#1e293b",
                    border: "2px solid #08090a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    marginLeft: i > 0 ? "-8px" : "0",
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span style={{ color: "#64748b", fontSize: "14px" }}>
              300+ indie devs on the waitlist
            </span>
            <span
              style={{
                color: "#fbbf24",
                fontSize: "14px",
                marginLeft: "4px",
              }}
            >
              ★★★★★
            </span>
          </div>
          <span
            style={{ color: "#334155", fontSize: "15px", fontWeight: 600 }}
          >
            applauncos.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
