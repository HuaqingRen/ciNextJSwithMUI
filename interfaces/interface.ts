export interface ReportItem {
    ruleName: string;
    rulePassStatus: boolean;
    ruleSkipStatus: boolean;
    id: number;
    rulePriority: string;
    ruleLink: string;
    ruleDescription: string;
    alertState: string;
  }
  
  export interface ReportContent {
    ReportItems: Array<ReportItem>;
    MetaData: {};
  }
  
  export type AlertType = 'success' | 'error' | 'warning' | 'info';


  export interface CiItem {
    id: number;
    author: string;
    paragraphs: string[];
    title: string;
  }


  export interface CiItemList {
    ciItems : Array<CiItem>;
    comments : string;
  }