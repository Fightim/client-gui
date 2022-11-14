import { useFetchOption } from "../../../../service/hooks/queries/instances";
import { instanceIconType } from "../../../../store/types/instanceIcon.d";
import InstanceInformations from "./InstanceInformations";
import InstanceOptions from "./InstanceOptions";

interface InstanceInfoProps {
  id: string;
}

export default function InstanceInfo(props: InstanceInfoProps) {
  const { id } = props;

  const { instanceOption } = useFetchOption(id, instanceIconType.Ubuntu);
  console.log(instanceOption.data);

  return (
    <>
      <InstanceOptions name={instanceOption.data.options.name} />
      <InstanceInformations {...instanceOption.data.informations} />
    </>
  );
}
