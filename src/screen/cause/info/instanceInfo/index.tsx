import { useFetchInstanceOption } from "../../../../service/hooks/queries/instances";
import InstanceInformations from "./InstanceInformations";
import InstanceOptions from "./InstanceOptions";

interface InstanceInfoProps {
  id: string;
}

export default function InstanceInfo(props: InstanceInfoProps) {
  const { id } = props;

  const { instanceOption } = useFetchInstanceOption(id);
  console.log(instanceOption.data);

  return (
    <>
      <InstanceOptions name={instanceOption.data.options.name} />
      <InstanceInformations {...instanceOption.data.informations} />
    </>
  );
}
