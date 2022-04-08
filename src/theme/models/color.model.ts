type BaseSwatchOption = "black" | "white" | "teal";
export type BaseSwatchModel = Record<BaseSwatchOption, string>;

type PaletteSwatchOption = "base";
export type PaletteSwatchModel = Record<PaletteSwatchOption, BaseSwatchModel>;
