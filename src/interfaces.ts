// CSSClass interface definition
interface CSSClass {
  [key: string]: any;
}

// CSSStyle interface definition
interface CSSStyle {
  [key: string]: any;
}

// StepItem interface definition
interface StepItem {
  name?: string;
  tooltip?: string;
  active?: boolean;
  onClick?: (...args: any) => any;
}

// StepItems interface definition
interface StepItems {
  [key: number]: StepItem;
}

// ToastOptions interface definition
interface ToastOptions {
  title?: string;
  content?: string;
  type: string;
  position?: string;
  closeBtn?: boolean;
}
