import { useFetchLoadBalancerOption } from "../../../../service/hooks/queries/loadBalancers";
import LoadBalancerInformations from "./LoadBalancerInformations";
import LoadBalancerOptions from "./LoadBalancerOptions";

interface LoadBalancerInfoProps {
  id: string;
}

export default function LoadBalancerInfo(props: LoadBalancerInfoProps) {
  const { id } = props;

  const { loadBalancerOption } = useFetchLoadBalancerOption(id);
  console.log(loadBalancerOption.data);

  return (
    <>
      <LoadBalancerOptions name={loadBalancerOption.data.options.name} />
      <LoadBalancerInformations {...loadBalancerOption.data.informations} />
    </>
  );
}
