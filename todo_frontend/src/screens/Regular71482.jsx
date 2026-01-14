import React from "react";
import "./Regular71482.css";

/**
 * Regular screen (Figma 7:1482) rendered as a pixel-precise layout.
 * Includes both "Light Mode" and "Dark Mode" calendar variants, as in the design.
 */
// PUBLIC_INTERFACE
export default function Regular71482() {
  return (
    <main className="regular71482" aria-label="Regular calendar screen">
      <div className="regular71482__frame" role="img" aria-label="Calendar UI mock">
        {/* Left: Light Mode */}
        <section className="calendarCard calendarCard--light" aria-label="Light mode calendar">
          <div className="calendarCard__content">
            {/* Header */}
            <div className="calHeader" aria-label="Calendar header">
              <button className="navBtn navBtn--prev" type="button" aria-label="Previous month">
                {/* In YAML for this screen, the light-mode chevrons are vectors without an exported imagePath.
                    To keep visuals consistent, we draw the chevron in CSS. */}
                <span className="chev chev--left" aria-hidden="true" />
              </button>

              <div className="monthYear" aria-label="Month and year">
                <button className="dropdown dropdown--month" type="button" aria-label="Month dropdown">
                  <span className="dropdown__label">April</span>
                  <span className="caret" aria-hidden="true" />
                </button>

                <button className="dropdown dropdown--year" type="button" aria-label="Year dropdown">
                  <span className="dropdown__label">2021</span>
                  <span className="caret" aria-hidden="true" />
                </button>
              </div>

              <button className="navBtn navBtn--next" type="button" aria-label="Next month">
                <span className="chev chev--right" aria-hidden="true" />
              </button>
            </div>

            {/* Day-of-week */}
            <div className="dow" aria-label="Days of week">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <div key={d} className="dow__cell">
                  <span className="dow__text">{d}</span>
                </div>
              ))}
            </div>

            {/* Weeks grid */}
            <div className="weeks" aria-label="Weeks grid">
              {[
                ["29d", "30d", "31d", "1", "2", "3", "4"],
                ["5", "6", "7t", "8", "9", "10", "11"],
                ["12", "13", "14", "15", "0", "17", "18"],
                ["19", "20", "21", "22", "23", "24", "25"],
                ["26", "27", "28", "29", "30", "1d", "2d"],
              ].map((week, wi) => (
                <div key={wi} className="weekRow" role="row" aria-label={`Week ${wi + 1}`}>
                  {week.map((token, di) => {
                    const isDisabled = token.endsWith("d");
                    const isToday = token.endsWith("t");
                    const day = token.replace(/[dt]/g, "");

                    return (
                      <div key={`${wi}-${di}`} className="dayCell" role="gridcell">
                        <div
                          className={[
                            "dayInner",
                            isToday ? "dayInner--today" : "",
                            isDisabled ? "dayInner--disabled" : "dayInner--regular",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          aria-label={
                            isToday ? `Today, day ${day}` : isDisabled ? `Disabled day ${day}` : `Day ${day}`
                          }
                        >
                          <span className={isToday ? "dayText dayText--today" : isDisabled ? "dayText dayText--disabled" : "dayText"}>
                            {day}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right: Dark Mode */}
        <section className="calendarCard calendarCard--dark" aria-label="Dark mode calendar">
          {/* This card is provided as a single exported raster in YAML (50:770). */}
          <img
            className="calendarCard__raster"
            src="/assets/figma_image_50_770.png"
            alt="Dark mode calendar card"
            draggable="false"
          />

          {/* Overlay: the design still contains accessible structure; we keep a visually-hidden layer for SRs. */}
          <div className="srOnly" aria-hidden="false">
            Dark mode calendar (April 2021) with navigation and weeks grid.
          </div>
        </section>
      </div>
    </main>
  );
}
