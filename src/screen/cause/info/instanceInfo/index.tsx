import { useFetchInstanceOption } from "../../../../service/hooks/queries/instances";
import BtnContainer from "../BtnContainer";
import InstanceInformations from "./InstanceInformations";
import InstanceOptions from "./InstanceOptions";

interface InstanceInfoProps {
  id: string;
}

export default function InstanceInfo(props: InstanceInfoProps) {
  const { id } = props;

  const { instanceOption } = useFetchInstanceOption(id);

  if (!instanceOption) return <div>Error</div>;
  return (
    <>
      <InstanceOptions name={instanceOption.options.name} />
      <InstanceInformations {...instanceOption.informations} />
      <BtnContainer
        instanceId={id}
        publicIp={instanceOption.informations.publicIp}
        isUrlFromGithub={instanceOption.options.githubUrl !== ""}
      />
    </>
  );
}
