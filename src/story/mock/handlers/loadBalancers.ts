import { rest } from "msw";
import { PATH } from "../../api/loadBalancers";

export const loadBalancersHandler = [
  rest.post(`${import.meta.env.VITE_BASE_URL}${PATH.loadBalancers}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        success: true,
        message: "로그인 성공",
        data: {
          options: {
            name: "아이디",
          },
          informations: {
            id: "아이디",
            domain: "도메인",
            securityGroup: ["랄", "랄랄"],
            targetGroupInstances: ["타겟", "그룹"],
          },
        },
      }),
    );
  }),
  rest.get(`${import.meta.env.VITE_BASE_URL}${PATH.loadBalancers}/*`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          options: {
            name: "아이디",
          },
          informations: {
            id: "아이디",
            domain: "도메인",
            securityGroup: ["랄", "랄랄"],
            targetGroupInstances: ["타겟", "그룹"],
          },
        },
      }),
    );
  }),
];
