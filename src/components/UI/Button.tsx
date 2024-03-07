type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  style:
    | 'primary-input'
    | 'primary-card'
    | 'secondary'
    | 'tertiary'
    | 'header'
    | 'wide-primary'
    | 'wide-secondary'
    | 'favourite';
};

export default function Button(props: Props) {
  let styles = '';

  switch (props.style) {
    case 'primary-input':
      styles =
        'px-[calc(2rem-1.6px)] bg-primary text-center border-2 border-primary rounded-r button-typography transition-all hover:bg-white enabled:active:shadow-large disabled:bg-grey-inactive disabled:text-white disabled:border-grey-inactive';
      break;
    case 'primary-card':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.5rem-1.6px)] bg-primary text-center border-2 border-primary rounded button-typography transition-all hover:bg-white enabled:active:shadow-large disabled:bg-grey-inactive disabled:text-white disabled:border-grey-inactive';
      break;
    case 'secondary':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.75rem-1.6px)] bg-secondary text-white text-center border-2 border-secondary rounded button-typography transition-all hover:bg-transparent hover:text-secondary enabled:active:shadow-large disabled:bg-grey-inactive disabled:text-white disabled:border-grey-inactive';
      break;
    case 'tertiary':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.75rem-1.6px)] bg-tertiary text-white text-center border-2 border-tertiary rounded-r button-typography transition-all hover:bg-transparent hover:text-tertiary enabled:active:shadow-large disabled:bg-grey-inactive disabled:text-white disabled:border-grey-inactive';
      break;
    case 'header':
      styles =
        'button-header flex gap-2 items-center p-3 md:p-4 lg:px-8 lg:py-3 text-white text-center rounded button-typography enabled:transition-all enabled:hover:bg-white enabled:hover:text-tertiary enabled:active:shadow-large disabled:bg-grey-inactive';
      break;
    case 'wide-primary':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.5rem-1.6px)] w-full bg-primary text-center border-2 border-primary rounded button-typography transition-all hover:bg-transparent enabled:active:shadow-large';
      break;
    case 'wide-secondary':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.5rem-1.6px)] w-full bg-white text-center border-2 border-primary rounded button-typography transition-all hover:bg-primary enabled:active:shadow-large';
      break;
    case 'favourite':
      styles = 'p-2 bg-white rounded';
    default:
      break;
  }

  return (
    <button type={props.type} className={styles} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
