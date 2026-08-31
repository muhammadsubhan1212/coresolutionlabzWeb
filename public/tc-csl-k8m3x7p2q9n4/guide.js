(function () {
  "use strict";

  var STORAGE_KEY = "telecaller_guide_name";
  var MAX_NAME_LENGTH = 50;

  function sanitizeName(input) {
    if (typeof input !== "string") return "";
    var cleaned = input
      .replace(/[<>"'&\\/`]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (cleaned.length > MAX_NAME_LENGTH) {
      cleaned = cleaned.slice(0, MAX_NAME_LENGTH);
    }
    return cleaned;
  }

  function getStoredName() {
    try {
      return sanitizeName(localStorage.getItem(STORAGE_KEY) || "");
    } catch (e) {
      return "";
    }
  }

  function saveName(name) {
    try {
      localStorage.setItem(STORAGE_KEY, name);
    } catch (e) {
      /* ignore */
    }
  }

  function getDisplayName() {
    var name = getStoredName();
    return name || "___";
  }

  function updateNameUI() {
    var name = getStoredName();
    var editRow = document.getElementById("name-edit-row");
    var savedRow = document.getElementById("name-saved-row");
    var display = document.getElementById("name-display");
    var input = document.getElementById("caller-name-input");

    if (name && savedRow && editRow) {
      editRow.hidden = true;
      savedRow.hidden = false;
      if (display) display.textContent = name;
    } else if (editRow && savedRow) {
      editRow.hidden = false;
      savedRow.hidden = true;
      if (input && name) input.value = name;
    }
  }

  function applyNameToScripts() {
    var displayName = getDisplayName();
    var storedName = getStoredName();

    document.querySelectorAll("[data-script]").forEach(function (el) {
      var template = el.getAttribute("data-script");
      var text = template.replace(/\[NAME\]/g, displayName);
      if (storedName && template.indexOf("[APNA NAAM]") !== -1) {
        text = text.replace(/\[APNA NAAM\]/g, storedName);
      }
      el.textContent = text;
    });

    updateNameUI();
  }

  function setupNameForm() {
    var input = document.getElementById("caller-name-input");
    var saveBtn = document.getElementById("save-name-btn");
    var changeBtn = document.getElementById("change-name-btn");

    if (!input) return;

    var stored = getStoredName();
    if (stored) input.value = stored;

    function handleSave() {
      var name = sanitizeName(input.value);
      if (!name) {
        input.focus();
        return;
      }
      saveName(name);
      input.value = name;
      applyNameToScripts();
    }

    if (saveBtn) saveBtn.addEventListener("click", handleSave);

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") handleSave();
    });

    if (changeBtn) {
      changeBtn.addEventListener("click", function () {
        var editRow = document.getElementById("name-edit-row");
        var savedRow = document.getElementById("name-saved-row");
        if (editRow) editRow.hidden = false;
        if (savedRow) savedRow.hidden = true;
        input.focus();
        input.select();
      });
    }
  }

  function getScriptText(element) {
    var block = element.closest(".script-card, .accordion-panel, .script-block");
    if (!block) return "";
    var scripts = block.querySelectorAll("[data-script]");
    if (scripts.length === 0) return "";
    var parts = [];
    scripts.forEach(function (el) {
      parts.push(el.textContent.trim());
    });
    return parts.join("\n\n");
  }

  function setupCopyButtons() {
    document.querySelectorAll(".btn-copy").forEach(function (btn) {
      if (btn._bound) return;
      btn._bound = true;
      btn.addEventListener("click", function () {
        var text = getScriptText(btn);
        if (!text) return;

        var feedback = btn.parentElement.querySelector(".copy-feedback");
        var originalLabel = btn.textContent;

        function showCopied() {
          btn.textContent = "Copied!";
          btn.classList.add("copied");
          if (feedback) feedback.classList.add("visible");
          setTimeout(function () {
            btn.textContent = originalLabel;
            btn.classList.remove("copied");
            if (feedback) feedback.classList.remove("visible");
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied).catch(function () {
            fallbackCopy(text, showCopied);
          });
        } else {
          fallbackCopy(text, showCopied);
        }
      });
    });
  }

  function fallbackCopy(text, callback) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      callback();
    } catch (e) {
      /* silent */
    }
    document.body.removeChild(ta);
  }

  function setupAccordions() {
    document.querySelectorAll(".accordion-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var item = trigger.closest(".accordion-item");
        var isOpen = item.classList.contains("open");
        var parent = item.closest(".accordion");

        if (parent) {
          parent.querySelectorAll(".accordion-item.open").forEach(function (openItem) {
            openItem.classList.remove("open");
            openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
          });
        }

        if (!isOpen) {
          item.classList.add("open");
          trigger.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function setupStickyNav() {
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = [];

    navLinks.forEach(function (link) {
      var id = link.getAttribute("href");
      if (id && id.startsWith("#")) {
        var section = document.querySelector(id);
        if (section) sections.push({ link: link, section: section });
      }
    });

    function navHeight() {
      var nav = document.querySelector(".sticky-nav");
      return nav ? nav.offsetHeight : 48;
    }

    function updateActiveLink() {
      var scrollPos = window.scrollY + navHeight() + 20;
      var current = sections[0];
      sections.forEach(function (entry) {
        if (entry.section.offsetTop <= scrollPos) current = entry;
      });
      navLinks.forEach(function (l) { l.classList.remove("active"); });
      if (current) current.link.classList.add("active");
    }

    window.addEventListener("scroll", updateActiveLink, { passive: true });
    updateActiveLink();

    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  function setupScrollButtons() {
    document.querySelectorAll("[data-scroll]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sel = btn.getAttribute("data-scroll");
        var target = document.querySelector(sel);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function setupPitchCards() {
    var buttons = document.querySelectorAll(".pitch-btn");
    var panel = document.getElementById("pitch-display");
    if (!panel || buttons.length === 0) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var key = btn.getAttribute("data-pitch");
        var source = document.getElementById("pitch-" + key);
        if (!source) return;

        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        panel.innerHTML = source.innerHTML;
      });
    });
  }

  function init() {
    setupNameForm();
    applyNameToScripts();
    setupCopyButtons();
    setupAccordions();
    setupStickyNav();
    setupScrollButtons();
    setupPitchCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
