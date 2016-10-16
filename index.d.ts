declare namespace StackBlur {
    function image(
        img: HTMLImageElement | string,
        canvas: HTMLCanvasElement | string,
        radius: number,
        blurAlphaChannel?: boolean): void;

    function canvasRGBA(
        canvas: HTMLCanvasElement,
        topX: number, topY: number,
        width: number, height: number,
        radius: number): void;

    function canvasRGB(
        canvas: HTMLCanvasElement,
        topX: number, topY: number,
        width: number, height: number,
        radius: number): void;

    function imageDataRGBA(
        data: ImageData,
        topX: number, topY: number,
        width: number, height: number,
        radius: number): ImageData;

    function imageDataRGB(
        data: ImageData,
        topX: number, topY: number,
        width: number, height: number,
        radius: number): ImageData;
}

export = StackBlur;
