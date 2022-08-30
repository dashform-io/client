interface DashformProviderProps {
  apiKey: string;
  applicationId: string;
  databaseUrl: string;
  children: React.ReactNode;
}

export const DashformProvider: React.FC<DashformProviderProps> = (props) => {
  const { children, applicationId, databaseUrl, apiKey } = props;
  return <div>{children}</div>;
};
