export type Loader = (
  url: string,
  options: {
    success?: () => void,
    error?: (event: Event | string) => void,
  }
) => Promise<string>

export type Bundler = (
  assets: string[],
  options?: {
    delay?: [number, number],
    debug?: Boolean,
    effect?: (progress: number) => void
  }
) => Promise<any>[]
