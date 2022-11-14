import { useFetchRDSOption } from "../../../../service/hooks/queries/rds";
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
      <RDSOptions name={rdsOption.data.options.name} />
      <RDSInformations {...rdsOption.data.informations} />
    </>
  );
}
