declare type AssetType = 'image';
declare type MatchType = (url: string) => AssetType | 'unknow';
export declare const matchType: MatchType;
export {};
