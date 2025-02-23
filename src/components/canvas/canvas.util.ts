export interface TextOptions {
  fontSize: string 
  fontFamily: string 
  lineHeight: string
  textAlign: string
  color: string 
}

export const defaultTextOptions: TextOptions = {
  fontSize: "48px", 
  fontFamily: "Oswald", 
  lineHeight: "1.2",
  textAlign: "left",
  color: "black",
}

export enum CanvasSize {
  A3 = "A3",
  A4 = "A4",
}

// based on 300 ppi
export const canvasMeta = {
  [CanvasSize.A3]: {
    height: 4961,
    width: 3508,
  },
  [CanvasSize.A4]: {
    height: 3508,
    width: 2480,
  }
}
