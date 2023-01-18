import { Player } from "@remotion/player";
import React, { useState } from "react";
import { Control } from "./control";
import type { DemoType } from "./types";
import { noiseDemo } from "./types";

const container: React.CSSProperties = {
  overflow: "hidden",
  width: "100%",
  border: "1px solid var(--ifm-color-emphasis-300)",
  borderRadius: "var(--ifm-pre-border-radius)",
};

const demos: DemoType[] = [noiseDemo];

export const Demo: React.FC<{
  type: string;
}> = ({ type }) => {
  const demo = demos.find((d) => d.id === type);

  if (!demo) {
    throw new Error("Demo not found");
  }

  const [state, setState] = useState(() =>
    demo.options
      .map((o) => [o.name, o.default] as const)
      .reduce((a, b) => {
        a[b[0]] = b[1];
        return a;
      }, {})
  );
  return (
    <div style={container}>
      <Player
        component={demo.comp}
        compositionWidth={demo.compWidth}
        compositionHeight={demo.compHeight}
        durationInFrames={demo.durationInFrames}
        fps={demo.fps}
        style={{
          width: "100%",
          aspectRatio: demo.compWidth / demo.compHeight,
        }}
        inputProps={state}
        autoPlay
        loop
      />
      <div>
        {demo.options.map((option) => {
          return (
            <Control
              key={option.name}
              option={option}
              value={state[option.name]}
              setValue={(value) => {
                setState((s) => ({
                  ...s,
                  [option.name]: value,
                }));
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
