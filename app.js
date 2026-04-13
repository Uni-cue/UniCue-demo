(function () {
  const data = window.DEMO_DATA;
  if (!data || !data.sample) {
    throw new Error("DEMO_DATA.sample is missing.");
  }

  const promptGalleryEl = document.getElementById("prompt-gallery");
  const subsetGridEl = document.getElementById("subset-grid");
  const stressGridEls = {
    mouth: document.getElementById("stress-mouth-grid"),
    body: document.getElementById("stress-body-grid"),
    noise: document.getElementById("stress-noise-grid"),
    bandwidth: document.getElementById("stress-bandwidth-grid"),
    duration: document.getElementById("stress-duration-grid"),
    text: document.getElementById("stress-text-grid"),
  };

  const MODALITY_ORDER = ["visual", "text", "pre-enrollment", "spatial"];
  const MODALITY_LABELS = {
    visual: "Video",
    text: "Text",
    "pre-enrollment": "Pre",
    spatial: "Spatial",
  };

  function createAudio(path, label, showLabel = true) {
    const wrapper = document.createElement("div");
    wrapper.className = "inline-audio";

    if (showLabel) {
      const title = document.createElement("span");
      title.className = "inline-audio-label";
      title.textContent = label;
      wrapper.appendChild(title);
    }

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "none";

    const source = document.createElement("source");
    source.src = path;
    source.type = "audio/wav";
    audio.appendChild(source);

    wrapper.appendChild(audio);
    return wrapper;
  }

  function createVideo(path, label, showLabel = true) {
    const wrapper = document.createElement("div");
    wrapper.className = "inline-media";

    if (showLabel) {
      const title = document.createElement("span");
      title.className = "inline-audio-label";
      title.textContent = label;
      wrapper.appendChild(title);
    }

    const video = document.createElement("video");
    video.className = "stress-video";
    video.controls = true;
    video.preload = "metadata";
    video.src = path;

    wrapper.appendChild(video);
    return wrapper;
  }

  function createTextCard(text, label, showLabel = true) {
    const wrapper = document.createElement("div");
    wrapper.className = "inline-media";

    if (showLabel) {
      const title = document.createElement("span");
      title.className = "inline-audio-label";
      title.textContent = label;
      wrapper.appendChild(title);
    }

    const textCard = document.createElement("div");
    textCard.className = "stress-text-card";
    textCard.textContent = text;
    wrapper.appendChild(textCard);
    return wrapper;
  }

  function createPromptCard(speaker) {
    const card = document.createElement("article");
    card.className = "prompt-card";

    const header = document.createElement("div");
    header.className = "prompt-card-head";
    header.innerHTML = `
      <div>
        <p class="block-title">${speaker.label}</p>
        <h3>${speaker.title}</h3>
      </div>
      <span class="speaker-chip">${speaker.shortLabel}</span>
    `;

    const media = document.createElement("video");
    media.className = "prompt-video";
    media.controls = true;
    media.preload = "metadata";
    media.src = speaker.videoPath;

    const promptList = document.createElement("div");
    promptList.className = "prompt-list";

    const textBlock = document.createElement("div");
    textBlock.className = "prompt-item prompt-item-text";
    textBlock.innerHTML = `
      <span class="prompt-label">Text Prompt</span>
      <p>${speaker.textPrompt}</p>
    `;

    const sectorBlock = document.createElement("div");
    sectorBlock.className = "prompt-item";
    sectorBlock.innerHTML = `
      <span class="prompt-label">Spatial Prompt</span>
      <p>Sector ${speaker.sectorPrompt}</p>
    `;

    const audioBlock = document.createElement("div");
    audioBlock.className = "prompt-item";
    audioBlock.append(
      createAudio(speaker.cleanPath, "Clean Reference"),
      createAudio(speaker.prePath, "Pre-enrollment Prompt")
    );

    promptList.append(textBlock, sectorBlock, audioBlock);
    card.append(header, media, promptList);
    return card;
  }

  function sortSubsets(subsets) {
    return [...subsets].sort((a, b) => {
      if (a.modalities.length !== b.modalities.length) {
        return a.modalities.length - b.modalities.length;
      }
      return a.key.localeCompare(b.key);
    });
  }

  function renderPromptGallery(sample) {
    promptGalleryEl.innerHTML = "";
    sample.speakers.forEach((speaker) => {
      promptGalleryEl.appendChild(createPromptCard(speaker));
    });
  }

  function createHeaderCell(label, extraClass = "") {
    const cell = document.createElement("div");
    cell.className = `matrix-header-cell${extraClass ? " " + extraClass : ""}`;
    cell.textContent = label;
    return cell;
  }

  function createAudioCell(path, label, rowTag, showLabel = true, extraClass = "") {
    const cell = document.createElement("div");
    cell.className = `matrix-row matrix-audio-cell${extraClass ? " " + extraClass : ""}`;
    cell.appendChild(createAudio(path, `${rowTag} · ${label}`, showLabel));
    return cell;
  }

  function createPromptStateCell(subset, modality) {
    const enabled = subset.modalities.includes(modality);
    const cell = document.createElement("div");
    cell.className = `matrix-row matrix-prompt-cell${enabled ? " active" : ""}`;
    cell.innerHTML = `
      <span class="prompt-cell-value">${enabled ? MODALITY_LABELS[modality] : "-"}</span>
      <span class="prompt-cell-meta">${subset.key.replaceAll("_", " + ")}</span>
    `;
    return cell;
  }

  function renderSubsetGrid(sample) {
    subsetGridEl.innerHTML = "";

    const headers = ["Mixture", "spk1 / Female", "spk2 / Male", "Video", "Text", "Pre", "Spatial"];
    headers.forEach((label) => subsetGridEl.appendChild(createHeaderCell(label)));

    sortSubsets(sample.subsets).forEach((subset, index) => {
      const rowTag = `Row ${index + 1}`;
      subsetGridEl.appendChild(createAudioCell(sample.references.mixture.path, "Mixture", rowTag));
      subsetGridEl.appendChild(createAudioCell(subset.outputs.spk1, "spk1 Result", rowTag));
      subsetGridEl.appendChild(createAudioCell(subset.outputs.spk2, "spk2 Result", rowTag));

      MODALITY_ORDER.forEach((modality) => {
        subsetGridEl.appendChild(createPromptStateCell(subset, modality));
      });
    });
  }

  function createStressModelCell(label) {
    const cell = document.createElement("div");
    cell.className = "matrix-row stress-model-cell stress-sticky-firstcol";
    cell.innerHTML = `
      <span class="prompt-cell-value">${label}</span>
    `;
    return cell;
  }

  function createStressPreLabelCell(label) {
    const cell = document.createElement("div");
    cell.className = "matrix-row stress-pre-label-cell stress-sticky-firstcol";
    cell.innerHTML = `
      <span class="prompt-cell-value">${label}</span>
    `;
    return cell;
  }

  function createStressSampleCell(sample, condition, rowLabel, sampleType) {
    const cell = document.createElement("div");
    cell.className = "matrix-row matrix-audio-cell stress-sample-cell";

    if (sampleType === "video") {
      cell.appendChild(createVideo(sample.path, `${rowLabel} · ${condition}`, false));
    } else if (sampleType === "text") {
      cell.appendChild(createTextCard(sample.text, `${rowLabel} · ${condition}`, false));
    } else {
      cell.appendChild(createAudio(sample.path, `${rowLabel} · ${condition}`, false));
    }

    return cell;
  }

  function renderStressGrid(gridEl, group) {
    if (!gridEl || !group) return;

    gridEl.innerHTML = "";
    gridEl.style.gridTemplateColumns =
      `minmax(180px, 220px) repeat(${group.conditions.length}, minmax(210px, 1fr))`;

    if (group.sampleRow && group.sampleRow.items && group.sampleRow.items.length) {
      gridEl.appendChild(createStressPreLabelCell(group.sampleRow.label));

      group.sampleRow.items.forEach((sample, idx) => {
        gridEl.appendChild(
          createStressSampleCell(
            sample,
            group.conditions[idx],
            group.sampleRow.label,
            group.sampleRow.type
          )
        );
      });
    } else if (group.prePromptAudios && group.prePromptAudios.length) {
      gridEl.appendChild(
        createStressPreLabelCell(group.prePromptLabel || "Stressed Pre")
      );

      group.prePromptAudios.forEach((path, idx) => {
        gridEl.appendChild(
          createAudioCell(
            path,
            group.conditions[idx],
            group.prePromptLabel || "Stressed Pre",
            false,
            "stress-pre-audio-cell"
          )
        );
      });
    }

    gridEl.appendChild(createHeaderCell("Model", "stress-sticky-firstcol"));
    group.conditions.forEach((cond) => {
      gridEl.appendChild(createHeaderCell(cond));
    });

    group.rows.forEach((row) => {
      gridEl.appendChild(createStressModelCell(row.label));
      row.outputs.forEach((path, idx) => {
        gridEl.appendChild(
          createAudioCell(path, group.conditions[idx], row.label, false)
        );
      });
    });
  }

  function render() {
    renderPromptGallery(data.sample);
    renderSubsetGrid(data.sample);

    const stressGroups = data.sample.stressGroups || [];

    stressGroups.forEach((group) => {
      if (group.id === "stress-mouth-grid") {
        renderStressGrid(stressGridEls.mouth, group);
      } else if (group.id === "stress-body-grid") {
        renderStressGrid(stressGridEls.body, group);
      } else if (group.id === "stress-noise-grid") {
        renderStressGrid(stressGridEls.noise, group);
      } else if (group.id === "stress-bandwidth-grid") {
        renderStressGrid(stressGridEls.bandwidth, group);
      } else if (group.id === "stress-duration-grid") {
        renderStressGrid(stressGridEls.duration, group);
      } else if (group.id === "stress-text-grid") {
        renderStressGrid(stressGridEls.text, group);
      }
    });
  }

  render();
})();
