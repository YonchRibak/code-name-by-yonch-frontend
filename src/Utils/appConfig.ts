class AppConfig {
  public readonly baseUrl = import.meta.env.VITE_API_URL;
  public readonly wordBankUrl = this.baseUrl + "/api/words";
  public WikiUrl(lang: string): string {
    return `https://${lang}.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=extracts&exsentences=1&exintro&explaintext&generator=random&grnnamespace=0&grnlimit=20`;
  }
}

export const appConfig = new AppConfig();
