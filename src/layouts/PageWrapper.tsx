type Props = {
  children?: React.ReactNode;
};

export default function PageWrapper(props: Props) {
  return <div className="min-h-full flex flex-col">{props.children}</div>;
}
