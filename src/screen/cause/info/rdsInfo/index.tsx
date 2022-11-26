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
  console.log(rdsOption.data);

  return (
    <>
      <RDSOptions name={rdsOption.data.options.name} masterUserName={rdsOption.data.options.masterUserName} />
      <RDSInformations {...rdsOption.data.informations} />
      <BtnContainer instanceId={id} publicIp={rdsOption.informations.publicIp} />
    </>
  );
}
