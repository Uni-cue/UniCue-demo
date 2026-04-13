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
        sectorPrompt: "2",
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
        sectorPrompt: "5",
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

    stressGroups: [
      {
        id: "stress-mouth-grid",
        title: "Visual Stress · Mouth Occlusion",
        conditions: ["0%", "25%", "50%", "75%", "90%"],
        sampleRow: {
          label: "Stressed Video",
          type: "video",
          items: [
            { path: "./generated_table_demo/female.mp4", label: "0%" },
            {
              path: "./generated_table_demo/demo/video_stress_face_0.25/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "25%",
            },
            {
              path: "./generated_table_demo/demo/video_stress_face_0.5/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "50%",
            },
            {
              path: "./generated_table_demo/demo/video_stress_face_0.75/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "75%",
            },
            {
              path: "./generated_table_demo/demo/video_stress_face_0.9/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "90%",
            },
          ],
        },
        rows: [
          {
            label: "Only-V",
            outputs: [
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/only_v/0.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/only_v/25.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/only_v/50.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/only_v/75.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/only_v/90.wav",
            ],
          },
          {
            label: "Full, stress V",
            outputs: [
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/full/0.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/full/25.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/full/50.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/full/75.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/full/90.wav",
            ],
          },
          {
            label: "Ded-V",
            outputs: [
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/ded_v/0.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/ded_v/25.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/ded_v/50.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/ded_v/75.wav",
              "./generated_table_demo/stress/stress_visual/mouth_occlusion/ded_v/90.wav",
            ],
          },
        ],
      },

      {
        id: "stress-body-grid",
        title: "Visual Stress · Body Occlusion",
        conditions: ["0%", "25%", "50%", "75%", "90%"],
        sampleRow: {
          label: "Stressed Video",
          type: "video",
          items: [
            { path: "./generated_table_demo/female.mp4", label: "0%" },
            {
              path: "./generated_table_demo/demo/video_stress_dody_0.25/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "25%",
            },
            {
              path: "./generated_table_demo/demo/video_stress_dody_0.5/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "50%",
            },
            {
              path: "./generated_table_demo/demo/video_stress_dody_0.75/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "75%",
            },
            {
              path: "./generated_table_demo/demo/video_stress_dody_0.9/home/qianustb/PMY/yutto/split_output_all/BV1YgybB5E8a_female_English/segment_0069.mp4",
              label: "90%",
            },
          ],
        },
        rows: [
          {
            label: "Only-V",
            outputs: [
              "./generated_table_demo/stress/stress_visual/body_occlusion/only_v/0.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/only_v/25.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/only_v/50.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/only_v/75.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/only_v/90.wav",
            ],
          },
          {
            label: "Full, stress V",
            outputs: [
              "./generated_table_demo/stress/stress_visual/body_occlusion/full/0.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/full/25.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/full/50.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/full/75.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/full/90.wav",
            ],
          },
          {
            label: "Ded-V",
            outputs: [
              "./generated_table_demo/stress/stress_visual/body_occlusion/ded_v/0.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/ded_v/25.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/ded_v/50.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/ded_v/75.wav",
              "./generated_table_demo/stress/stress_visual/body_occlusion/ded_v/90.wav",
            ],
          },
        ],
      },

      {
        id: "stress-noise-grid",
        title: "Pre-enrollment Stress · Additive Noise",
        conditions: ["Clean", "+10", "+5", "0", "-5", "-10"],
        prePromptLabel: "Stressed Pre",
        prePromptAudios: [
          "./generated_table_demo/stress/stress_pre/noise/pre_prompt/clean.wav",
          "./generated_table_demo/stress/stress_pre/noise/pre_prompt/p10.wav",
          "./generated_table_demo/stress/stress_pre/noise/pre_prompt/p5.wav",
          "./generated_table_demo/stress/stress_pre/noise/pre_prompt/0.wav",
          "./generated_table_demo/stress/stress_pre/noise/pre_prompt/m5.wav",
          "./generated_table_demo/stress/stress_pre/noise/pre_prompt/m10.wav",
        ],
        rows: [
          {
            label: "Only-P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/noise/only_p/clean.wav",
              "./generated_table_demo/stress/stress_pre/noise/only_p/p10.wav",
              "./generated_table_demo/stress/stress_pre/noise/only_p/p5.wav",
              "./generated_table_demo/stress/stress_pre/noise/only_p/0.wav",
              "./generated_table_demo/stress/stress_pre/noise/only_p/m5.wav",
              "./generated_table_demo/stress/stress_pre/noise/only_p/m10.wav",
            ],
          },
          {
            label: "Full, stress P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/noise/full/clean.wav",
              "./generated_table_demo/stress/stress_pre/noise/full/p10.wav",
              "./generated_table_demo/stress/stress_pre/noise/full/p5.wav",
              "./generated_table_demo/stress/stress_pre/noise/full/0.wav",
              "./generated_table_demo/stress/stress_pre/noise/full/m5.wav",
              "./generated_table_demo/stress/stress_pre/noise/full/m10.wav",
            ],
          },
          {
            label: "Ded-P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/noise/ded_p/clean.wav",
              "./generated_table_demo/stress/stress_pre/noise/ded_p/p10.wav",
              "./generated_table_demo/stress/stress_pre/noise/ded_p/p5.wav",
              "./generated_table_demo/stress/stress_pre/noise/ded_p/0.wav",
              "./generated_table_demo/stress/stress_pre/noise/ded_p/m5.wav",
              "./generated_table_demo/stress/stress_pre/noise/ded_p/m10.wav",
            ],
          },
        ],
      },

      {
        id: "stress-bandwidth-grid",
        title: "Pre-enrollment Stress · Bandwidth Limitation",
        conditions: ["Clean", "8k", "4k"],
        prePromptLabel: "Stressed Pre",
        prePromptAudios: [
          "./generated_table_demo/stress/stress_pre/bandwidth/pre_prompt/clean.wav",
          "./generated_table_demo/stress/stress_pre/bandwidth/pre_prompt/8k.wav",
          "./generated_table_demo/stress/stress_pre/bandwidth/pre_prompt/4k.wav",
        ],
        rows: [
          {
            label: "Only-P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/bandwidth/only_p/clean.wav",
              "./generated_table_demo/stress/stress_pre/bandwidth/only_p/8k.wav",
              "./generated_table_demo/stress/stress_pre/bandwidth/only_p/4k.wav",
            ],
          },
          {
            label: "Full, stress P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/bandwidth/full/clean.wav",
              "./generated_table_demo/stress/stress_pre/bandwidth/full/8k.wav",
              "./generated_table_demo/stress/stress_pre/bandwidth/full/4k.wav",
            ],
          },
          {
            label: "Ded-P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/bandwidth/ded_p/clean.wav",
              "./generated_table_demo/stress/stress_pre/bandwidth/ded_p/8k.wav",
              "./generated_table_demo/stress/stress_pre/bandwidth/ded_p/4k.wav",
            ],
          },
        ],
      },

      {
        id: "stress-duration-grid",
        title: "Pre-enrollment Stress · Short Enrollment",
        conditions: ["Clean", "2.0s", "1.0s", "0.5s"],
        prePromptLabel: "Stressed Pre",
        prePromptAudios: [
          "./generated_table_demo/stress/stress_pre/duration/pre_prompt/clean.wav",
          "./generated_table_demo/stress/stress_pre/duration/pre_prompt/2.0s.wav",
          "./generated_table_demo/stress/stress_pre/duration/pre_prompt/1.0s.wav",
          "./generated_table_demo/stress/stress_pre/duration/pre_prompt/0.5s.wav",
        ],
        rows: [
          {
            label: "Only-P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/duration/only_p/clean.wav",
              "./generated_table_demo/stress/stress_pre/duration/only_p/2.0s.wav",
              "./generated_table_demo/stress/stress_pre/duration/only_p/1.0s.wav",
              "./generated_table_demo/stress/stress_pre/duration/only_p/0.5s.wav",
            ],
          },
          {
            label: "Full, stress P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/duration/full/clean.wav",
              "./generated_table_demo/stress/stress_pre/duration/full/2.0s.wav",
              "./generated_table_demo/stress/stress_pre/duration/full/1.0s.wav",
              "./generated_table_demo/stress/stress_pre/duration/full/0.5s.wav",
            ],
          },
          {
            label: "Ded-P",
            outputs: [
              "./generated_table_demo/stress/stress_pre/duration/ded_p/clean.wav",
              "./generated_table_demo/stress/stress_pre/duration/ded_p/2.0s.wav",
              "./generated_table_demo/stress/stress_pre/duration/ded_p/1.0s.wav",
              "./generated_table_demo/stress/stress_pre/duration/ded_p/0.5s.wav",
            ],
          },
        ],
      },

      {
        id: "stress-text-grid",
        title: "Text Stress · Prompt Granularity",
        conditions: ["G1", "G2", "G3", "G4"],
        sampleRow: {
          label: "Prompt Text",
          type: "text",
          items: [
            {
              text: "spk1: Please extract the female speaker in the audio.",
              label: "G1",
            },
            {
              text: "spk1: Please extract the female English speaker in the audio.",
              label: "G2",
            },
            {
              text: "spk1: Please extract the female English speaker in the audio.",
              label: "G3",
            },
            {
              text: "spk1: Please extract the female English speaker who says: \"but two is dismay, they either didn't care, or came up with...\", with a neutral emotion in the audio.",
              label: "G4",
            },
          ],
        },
        rows: [
          {
            label: "Only-T",
            outputs: [
              "./generated_table_demo/stress/stress_text/prompt_granularity/only_t/g1.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/only_t/g2.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/only_t/g3.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/only_t/g4.wav",
            ],
          },
          {
            label: "Full, stress T",
            outputs: [
              "./generated_table_demo/stress/stress_text/prompt_granularity/full/g1.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/full/g2.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/full/g3.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/full/g4.wav",
            ],
          },
          {
            label: "Ded-T",
            outputs: [
              "./generated_table_demo/stress/stress_text/prompt_granularity/ded_t/g1.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/ded_t/g2.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/ded_t/g3.wav",
              "./generated_table_demo/stress/stress_text/prompt_granularity/ded_t/g4.wav",
            ],
          },
        ],
      },
    ],
  },
};
