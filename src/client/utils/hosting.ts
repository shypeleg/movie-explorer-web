export function getHosting(viewMode: string): string {
  switch (viewMode) {
    case 'dashboard':
      return 'MA';
    case 'editor':
      return 'editor';
    default:
      return 'ADI';
  }
}
