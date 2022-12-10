import { useFetchRDSOption } from "../../../../service/hooks/queries/rds";
import BtnContainer from "../BtnContainer";
import RDSInformations from "./RDSInformations";
import RDSOptions from "./RDSOptions";

interface RDSInfoProps {
  id: string;
}

export default function RDSInfo(props: RDSInfoProps) {
  const { id } = props;

  const { rdsOption } = useFetchRDSOption(id);

  if (!rdsOption) return <div>Error</div>;
  return (
    <>
      <RDSOptions name={rdsOption.options.name} masterUserName={rdsOption.options.masterUserName} />
      <RDSInformations {...rdsOption.informations} />
    </>
  );
}
