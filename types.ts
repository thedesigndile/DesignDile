export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: AllowedIconName;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

// Safe Icon Protocol: Strictly allowed icons
export type AllowedIconName = 
  | 'Check'
  | 'Menu'
  | 'X'
  | 'ArrowRight'
  | 'ChevronDown'
  | 'Star'
  | 'Mail'
  | 'Book'
  | 'FileText'
  | 'Smartphone'
  | 'Monitor';