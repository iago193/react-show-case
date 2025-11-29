export function formatImageName(path: string): string {
  return path.split('/').pop()?.split('.')[0] ?? "";
}