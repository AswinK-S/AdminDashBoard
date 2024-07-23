declare module '@canvasjs/react-charts' {
    export const CanvasJSChart: React.ComponentType<{ options: unknown, onRef?: (ref: unknown) => void }>;
    export const CanvasJS: {
      formatNumber: (number: number, format: string) => string;
    };
  }
  