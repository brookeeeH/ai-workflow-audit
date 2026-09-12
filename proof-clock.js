/**
 * Public production-clock for BOAZ proof copy.
 * Start: 2026-02-01 (full-capacity agent build-out).
 * Count: inclusive calendar months (Feb–Sep 2026 = 8).
 * Internal: Business/BOAZ/BOAZ-Public-Proof-Clock.md
 */
(function () {
  var START = "2026-02-01";

  function inclusiveMonths(iso) {
    var start = new Date(iso + "T12:00:00");
    var now = new Date();
    var n =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth()) +
      1;
    return Math.max(1, n);
  }

  function monthWord(n) {
    return n === 1 ? "1 month" : n + " months";
  }

  var n = inclusiveMonths(START);
  var label = monthWord(n);

  document.querySelectorAll("[data-live-months]").forEach(function (el) {
    var mode = el.getAttribute("data-live-months") || "card";
    if (mode === "card") {
      el.textContent = label + ", still going";
    } else if (mode === "phrase") {
      el.textContent = label;
    } else if (mode === "about") {
      el.textContent = n === 1 ? "one month" : n + " months";
    }
  });
})();
