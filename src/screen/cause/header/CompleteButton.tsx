import styled from "styled-components";
// import useALB from "../../../service/hooks/instanceContext/useALB";
import usePrivateCentos from "../../../service/hooks/instanceContext/usePrivateCentos";
import usePrivateUbuntu from "../../../service/hooks/instanceContext/usePrivateUbuntu";
import usePublicCentos from "../../../service/hooks/instanceContext/usePublicCentos";
import usePublicUbuntu from "../../../service/hooks/instanceContext/usePublicUbuntu";
import useRDS from "../../../service/hooks/instanceContext/useRDS";
import { useCreateInstancesMutation } from "../../../service/hooks/queries/instances";
import { useCreatRDSsMutation } from "../../../service/hooks/queries/rds";
import { removeALBIdsBeforePost, removeInstanceIdsBeforePost } from "../../../service/util/removeIdsBeforePost.ts";
import { IcApply } from "../../../store/assets";
// import { createLoadBalancer } from "../../../story/api/loadBalancers";
import { createRDS } from "../../../story/api/rds";

export default function CompleteButton() {
  const { privateUbuntuInstances } = usePrivateUbuntu();
  const { publicUbuntuInstances, resetCurrentInstances } = usePublicUbuntu();
  const { privateCentosInstances } = usePrivateCentos();
  const { publicCentosInstances } = usePublicCentos();
  const { mutateAsync: mutateAsyncCreateInstances } = useCreateInstancesMutation();
  const { instance: postingRDS, resetCurrentRDS } = useRDS();
  const { mutateAsync: mutateAsyncCreateRDS } = useCreatRDSsMutation();
  // const { instances: alb } = useALB();

  async function handleClickComplete() {
    const postingInstances = removeInstanceIdsBeforePost([
      ...privateUbuntuInstances,
      ...publicUbuntuInstances,
      ...privateCentosInstances,
      ...publicCentosInstances,
    ]);
    // TODO :: ALB TEST
    // const postingALB = removeALBIdsBeforePost([...alb][0]);

    postingInstances.length && (await mutateAsyncCreateInstances(postingInstances));
    postingRDS && (await mutateAsyncCreateRDS(postingRDS));
    // await createLoadBalancer(postingALB);

    resetAll();
  }

  function resetAll() {
    resetCurrentInstances();
    resetCurrentRDS();
  }

  return (
    <StCompleteButton onClick={handleClickComplete}>
      <IcApply />
      완료 버튼
    </StCompleteButton>
  );
}

const StCompleteButton = styled.button`
  width: 182px;
  height: 40px;

  position: absolute;
  right: 8.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.blue200};
  border-radius: 6px;

  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};

  & > svg {
    margin-right: 1rem;
  }
`;
