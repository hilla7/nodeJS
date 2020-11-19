export const log: (...p: unknown[]) => void = (...p: unknown[]) => {
  const timestamp: string = new Date().toString().substring(0, 24);
  console.log(`[${timestamp}]`, ...p);
}

export const error: (...p: unknown[]) => void = (...p: unknown[]) => {
  const timestamp: string = new Date().toString().substring(0, 24);
  console.error(`[${timestamp}]`, ...p);
}
