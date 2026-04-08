(function () {
  const data = window.DEMO_DATA;
  if (!data || !data.sample) {
    throw new Error("DEMO_DATA.sample is missing.");
  }

  const promptGalleryEl = document.getElementById("prompt-gallery");
  const subsetGridEl = document.getElementById("subset-grid");

  const MODALITY_ORDER = ["visual", "text", "pre-enrollment", "spatial"];
  const MODALITY_LABELS = {
    visual: "Video",
    text: "Text",
    "pre-enrollment": "Pre",
    spatial: "Spatial",
  };

  function createAudio(path, label) {
    const wrapper = document.createElement("div");
    wrapper.className = "inline-audio";

    const title = document.createElement("span");
    title.className = "inline-audio-label";
    title.textContent = label;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.preload = "none";

    const source = document.createElement("source");
    source.src = path;
    source.type = "audio/wav";
    audio.appendChild(source);

    wrapper.append(title, audio);
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

  function createHeaderCell(label) {
    const cell = document.createElement("div");
    cell.className = "matrix-header-cell";
    cell.textContent = label;
    return cell;
  }

  function createAudioCell(path, label, rowTag) {
    const cell = document.createElement("div");
    cell.className = "matrix-row matrix-audio-cell";
    cell.appendChild(createAudio(path, `${rowTag} · ${label}`));
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

  function render() {
    renderPromptGallery(data.sample);
    renderSubsetGrid(data.sample);
  }

  render();
})();
