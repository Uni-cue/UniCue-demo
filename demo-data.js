window.DEMO_DATA = {
  paperTitle: "UniCue Demo",
  sample: {
    id: "generated-table-demo",
    title: "Prompt Combination Demo",
    description:
      "One shared mixture with two target speakers. Female maps to spk1 and male maps to spk2. Each row shows the extraction results for one non-empty cue subset.",
    references: {
      mixture: {
        label: "Mixture",
        path: "./generated_table_demo/mixture.wav",
        available: true,
      },
    },
    speakers: [
      {
        id: "spk1",
        label: "spk1",
        title: "Female Target",
        shortLabel: "Female",
        videoPath: "./generated_table_demo/female.mp4",
        cleanPath: "./generated_table_demo/spk1_clean.wav",
        prePath: "./generated_table_demo/female_pre.wav",
        textPrompt:
          'Please extract the female English speaker who says: "but two is dismay, they either didn\\\'t care, or came up with...", with a neutral emotion in the audio.',
        sectorPrompt: "0",
      },
      {
        id: "spk2",
        label: "spk2",
        title: "Male Target",
        shortLabel: "Male",
        videoPath: "./generated_table_demo/male.mp4",
        cleanPath: "./generated_table_demo/spk2_clean.wav",
        prePath: "./generated_table_demo/male_pre.wav",
        textPrompt:
          'Please extract the male English speaker who says: "then there are add-ons in universe. So what that means is that", characterized by a neutral emotion in the audio.',
        sectorPrompt: "1",
      },
    ],
    subsets: [
      { key: "V", modalities: ["visual"], outputs: { spk1: "./generated_table_demo/V/speaker1.wav", spk2: "./generated_table_demo/V/speaker2.wav" } },
      { key: "T", modalities: ["text"], outputs: { spk1: "./generated_table_demo/T/speaker1.wav", spk2: "./generated_table_demo/T/speaker2.wav" } },
      { key: "P", modalities: ["pre-enrollment"], outputs: { spk1: "./generated_table_demo/P/speaker1.wav", spk2: "./generated_table_demo/P/speaker2.wav" } },
      { key: "S", modalities: ["spatial"], outputs: { spk1: "./generated_table_demo/S/speaker1.wav", spk2: "./generated_table_demo/S/speaker2.wav" } },
      { key: "V_T", modalities: ["visual", "text"], outputs: { spk1: "./generated_table_demo/V_T/speaker1.wav", spk2: "./generated_table_demo/V_T/speaker2.wav" } },
      { key: "V_P", modalities: ["visual", "pre-enrollment"], outputs: { spk1: "./generated_table_demo/V_P/speaker1.wav", spk2: "./generated_table_demo/V_P/speaker2.wav" } },
      { key: "V_S", modalities: ["visual", "spatial"], outputs: { spk1: "./generated_table_demo/V_S/speaker1.wav", spk2: "./generated_table_demo/V_S/speaker2.wav" } },
      { key: "T_P", modalities: ["text", "pre-enrollment"], outputs: { spk1: "./generated_table_demo/T_P/speaker1.wav", spk2: "./generated_table_demo/T_P/speaker2.wav" } },
      { key: "T_S", modalities: ["text", "spatial"], outputs: { spk1: "./generated_table_demo/T_S/speaker1.wav", spk2: "./generated_table_demo/T_S/speaker2.wav" } },
      { key: "S_P", modalities: ["pre-enrollment", "spatial"], outputs: { spk1: "./generated_table_demo/S_P/speaker1.wav", spk2: "./generated_table_demo/S_P/speaker2.wav" } },
      { key: "V_T_P", modalities: ["visual", "text", "pre-enrollment"], outputs: { spk1: "./generated_table_demo/V_T_P/speaker1.wav", spk2: "./generated_table_demo/V_T_P/speaker2.wav" } },
      { key: "V_T_S", modalities: ["visual", "text", "spatial"], outputs: { spk1: "./generated_table_demo/V_T_S/speaker1.wav", spk2: "./generated_table_demo/V_T_S/speaker2.wav" } },
      { key: "V_S_P", modalities: ["visual", "pre-enrollment", "spatial"], outputs: { spk1: "./generated_table_demo/V_S_P/speaker1.wav", spk2: "./generated_table_demo/V_S_P/speaker2.wav" } },
      { key: "T_S_P", modalities: ["text", "pre-enrollment", "spatial"], outputs: { spk1: "./generated_table_demo/T_S_P/speaker1.wav", spk2: "./generated_table_demo/T_S_P/speaker2.wav" } },
      { key: "V_T_S_P", modalities: ["visual", "text", "pre-enrollment", "spatial"], outputs: { spk1: "./generated_table_demo/V_T_S_P/speaker1.wav", spk2: "./generated_table_demo/V_T_S_P/speaker2.wav" } },
    ],
  },
};
