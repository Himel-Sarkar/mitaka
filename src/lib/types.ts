export type SearchableType =
  | "asn"
  | "btc"
  | "cve"
  | "domain"
  | "email"
  | "eth"
  | "gaPubID"
  | "gaTrackID"
  | "hash"
  | "ip"
  | "text"
  | "url";

export interface Searcher {
  baseURL: string;
  name: string;
  supportedTypes: SearchableType[];
  searchByASN?(query: string): string;
  searchByBTC?(query: string): string;
  searchByCVE?(query: string): string;
  searchByDomain?(query: string): string;
  searchByEmail?(query: string): string;
  searchByETH?(query: string): string;
  searchByGAPubID?(quqery: string): string;
  searchByGATrackID?(query: string): string;
  searchByHash?(query: string): string;
  searchByIP?(query: string): string;
  searchByText?(query: string): string;
  searchByURL?(query: string): string;
  searchByXMR?(query: string): string;
}

export type ScannableType = "ip" | "domain" | "url";

export interface Scanner {
  baseURL: string;
  name: string;
  supportedTypes: ScannableType[];
  scanByIP?(query: string): Promise<string>;
  scanByDomain?(query: string): Promise<string>;
  scanByURL?(query: string): Promise<string> | string;
  setApiKey?(apiKey: string | undefined): void;
}

export interface SelectorSlot {
  type: SearchableType;
  func: () => string | null;
}

export interface ScannerSlot {
  type: ScannableType;
  func: () => string | null;
}

export interface AnalyzerEntry {
  analyzer: Scanner | Searcher;
  type: SearchableType | ScannableType;
  query: string;
}

export interface SearcherState {
  name: string;
  baseURL: string;
  supportedTypes: string[];
  isEnabled: boolean;
}

export interface SearcherStates {
  [name: string]: boolean;
}

export interface ApiKeys {
  hybridAnalysisApiKey: string | undefined;
  urlscanApiKey: string | undefined;
  virusTotalApiKey: string | undefined;
}

export interface UpdateContextMenuMessage {
  request: string;
  selection: string;
}

export interface SearcherTable {
  [name: string]: (searcher: Searcher, query: string) => string;
}

export interface ScannerTable {
  [name: string]: (scanner: Scanner, query: string) => Promise<string>;
}

export interface GeneralSettings {
  enableIDN: boolean;
}

export interface Config {
  generalSettings: GeneralSettings;
  searcherStates: SearcherStates;
}
